import connectDB from "@/lib/database/db";
import { Application } from "@/schema/applicationSchema";

import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const token = req.headers.get("Authorization");
  let userId = token?.split(" ")[1];
  if (!userId) {
    return Response.json({ error: "user id 가 필요합니다." }, { status: 400 });
  }
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ error: "study id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();

  try {
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    }
    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ message: "유저가 존재하지 않습니다." }, { status: 404 });
    }

    const teamMembersData = await TeamMembers.findOne({ studyId });
    if (!teamMembersData) {
      return new Response(JSON.stringify({ message: "팀 멤버가 존재하지 않습니다." }), { status: 404 });
    }

    // 팀 멤버 목록에서 해당 유저를 찾아 삭제
    const updatedMembers = teamMembersData.members.filter((member: any) => !member.userId.equals(userId));

    if (updatedMembers.length === teamMembersData.members.length) {
      return new Response(JSON.stringify({ message: "팀 멤버 목록에서 유저를 찾을 수 없습니다." }), { status: 404 });
    }

    await Application.findOneAndDelete({ studyId, userId });

    teamMembersData.members = updatedMembers;
    await teamMembersData.save();
    return new Response(JSON.stringify({ message: "지원을 취소하였습니다." }), { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
