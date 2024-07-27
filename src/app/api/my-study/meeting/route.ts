import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { generateUpcomingMeetingList, TUpcomingMeetingList } from "@/utils/generateMeetingList";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }

  connectDB();

  try {
    const myAcceptedTeamMember = await TeamMembers.find({
      members: {
        $elemMatch: { userId: userId, status: "ACCEPTED" },
      },
    }).select("studyId members");
    const studyIdList = myAcceptedTeamMember.map((member) => member.studyId);

    // 1) 내가 참여하고 있는 모든 스터디 중 PROGRESS 상태인 것만 조회
    const studyList = await Study.find(
      {
        _id: { $in: studyIdList },
        status: "PROGRESS",
      },
      { meeting: 1, startDate: 1, endDate: 1, title: 1 },
    );
    // 2) 모든 스터디의 14일 내 미팅으로 리스트 생성
    let upcomingMeetingList: TUpcomingMeetingList = [];
    studyList.forEach((study) => {
      const {
        meeting: {
          format,
          platform,
          schedule: { time, day },
          location,
        },
        endDate,
        title,
      } = study;

      const where = format === "ONLINE" ? platform : location;
      const meetingInfo = {
        title,
        endDate,
        where,
        day,
        time,
      };

      upcomingMeetingList = [...upcomingMeetingList, ...generateUpcomingMeetingList(meetingInfo)].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    });

    return Response.json(upcomingMeetingList);
  } catch (error: any) {
    return Response.json("error");
  }
}
