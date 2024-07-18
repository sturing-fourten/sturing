import connectDB from "@/lib/database/db";
import { Dashboard } from "@/schema/dashboardSchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

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

    return Response.json(dashboard);
  } catch (error: any) {
    throw new Error(error);
  }
}
