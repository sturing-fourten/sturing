import connectDB from "@/lib/database/db";
import { TeamMembers } from "@/schema/teamMemberSchema";

export async function GET(request: Request) {
  connectDB();

  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const studyId = searchParams.get("studyId");
    if (!userId) return Response.json(false);
    if (!studyId) return Response.json(false);

    // 내가 해당 스터디의 멤버인지
    const teamMember = await TeamMembers.findOne({
      studyId,
      "members.userId": userId,
      "members.status": "ACCEPTED",
    });

    return Response.json(teamMember !== null);
  } catch (error: any) {
    throw new Error(error);
  }
}
