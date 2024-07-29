import connectDB from "@/lib/database/db";
import { Application } from "@/schema/applicationSchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const applicationId = params.id;
  connectDB();

  try {
    // 1. 지원서 조회
    const application = await Application.findById(applicationId);
    if (!application) {
      return new Response("Application not found", { status: 404 });
    }

    // 2. 지원서 유저 닉네임 추가
    const { userId: appliedMemberUserId } = application;
    const appliedUser = await User.findById(appliedMemberUserId);
    if (!appliedUser) {
      return new Response("User not found", { status: 404 });
    }

    const appliedMemberNickname = appliedUser.nickname;

    // 3. 지원 상태 추가
    const teamMember = await TeamMembers.findOne({ studyId: application.studyId }).select("members");
    const appliedMember = teamMember.members.find((member: any) => member.userId.equals(appliedMemberUserId));

    // 4. 스터디 개설자 추가
    const updatedApplication = {
      _id: application._id,
      studyId: application.studyId,
      userId: application.userId,
      userNickname: appliedMemberNickname,
      title: application.title,
      resolution: application.resolution,
      role: application.role,
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
      status: appliedMember.status,
      isOwner: appliedMember.isOwner,
    };

    return new Response(JSON.stringify(updatedApplication), { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "지원서가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}
