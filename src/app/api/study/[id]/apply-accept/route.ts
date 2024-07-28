import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  const { appliedUserId } = await req.json();
  const token = req.headers.get("Authorization");
  let userId = token?.split(" ")[1];
  await connectDB();

  if (!studyId) {
    return Response.json({ error: "스터디 id 가 필요합니다." }, { status: 400 });
  }
  if (!userId) {
    return Response.json({ error: "유저 id 가 필요합니다." }, { status: 400 });
  }
  connectDB();
  try {
    const currentStudy = await Study.findById(studyId);

    if (!currentStudy) {
      return Response.json({ message: "스터디가 존재하지 않습니다" }, { status: 404 });
    }

    // 1. 권한 체크
    const currentStudyOwnerId = currentStudy.ownerId.toString();
    const user = await User.findById(userId);

    if (!user) {
      return Response.json({ message: "유저가 존재하지 않습니다" }, { status: 404 });
    }

    if (currentStudyOwnerId !== user.id) {
      return Response.json({ message: "권한이 없습니다" }, { status: 403 });
    }

    // 2. 팀멤버에서 상태를 accepted로
    const updatedTeamMember = await TeamMembers.findOneAndUpdate(
      { studyId, "members.userId": appliedUserId },
      { $set: { "members.$.status": "ACCEPTED" } },
      { new: true },
    );

    if (!updatedTeamMember) {
      return new Response(JSON.stringify({ message: "해당 조건의 팀 멤버를 찾을 수 없습니다" }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: "팀 멤버 상태가 업데이트 되었습니다" }), { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "요청을 처리할 수 없습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
