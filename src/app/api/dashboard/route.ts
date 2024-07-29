import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";
import { calculateProgressGauge } from "@/utils/calculateProgressGauge";
import { startOfDay } from "date-fns";

export async function GET(request: Request) {
  connectDB();

  try {
    const { searchParams } = new URL(request.url);
    const studyId = searchParams.get("studyId");
    if (!studyId) throw new Error("대시보드 정보가 없습니다.");

    // 1. 대시보드 조회, 유저 프로필 정보, 팀 역할 정보 추가
    const dashboard = await Dashboard.findOne({ studyId }).populate({
      path: "studyId",
      select: "teamMembersId",
      populate: {
        path: "teamMembersId",
        model: "TeamMembers",
        select: "members",
      },
    });

    if (!dashboard) throw new Error("대시보드 정보가 없습니다.");

    // 2. checkList에서 오늘 날짜의 항목만 필터링, 진척도 계산
    const todayStart = startOfDay(new Date());

    dashboard.checkList.list.forEach((item: any, userIndex: number) => {
      // 오늘 날짜의 항목만 필터링
      const userTodayCheckList = item.data.filter((dataItem: any) => {
        const itemDateStartOfDay = startOfDay(dataItem.date);
        return itemDateStartOfDay.getTime() === todayStart.getTime();
      });

      dashboard.checkList.list[userIndex].data = userTodayCheckList;

      // 진척도 계산
      const { totalContentListCount, totalCheckedContentListCount } = item.data.reduce(
        (acc: any, dataItem: any) => {
          dataItem.contentList.forEach((contentItem: any) => {
            acc.totalContentListCount += 1;
            if (contentItem.isChecked) {
              acc.totalCheckedContentListCount += 1;
            }
          });
          return acc;
        },
        { totalContentListCount: 0, totalCheckedContentListCount: 0 },
      );

      dashboard.progressGauge.list[userIndex].data =
        totalContentListCount > 0 ? calculateProgressGauge(totalCheckedContentListCount, totalContentListCount) : 0;
    });

    const teamMembers = await TeamMembers.findOne({ studyId, "members.status": "ACCEPTED" });

    let acceptedTeamMembers = [];

    if (teamMembers) {
      acceptedTeamMembers = await Promise.all(
        teamMembers.members.map(async (member: any) => {
          const user = await User.findById(member.userId);
          return {
            userId: member.userId,
            nickname: user.nickname,
            profileImageUrl: user.profileImageUrl,
            role: member.role,
            isOwner: member.isOwner,
            status: member.status,
          };
        }),
      );
    }

    const ownerId = acceptedTeamMembers.find((member) => member.isOwner === true).userId;

    const study = await Study.findById(studyId).select("startDate endDate");

    return Response.json({ dashboard, teamMemberList: acceptedTeamMembers, ownerId, study });
  } catch (error: any) {
    throw new Error(error);
  }
}
