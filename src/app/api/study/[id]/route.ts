import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ error: "id 가 필요합니다." }, { status: 400 });
  }
  connectDB();

  try {
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "해당 스터디가 존재하지 않습니다." }, { status: 404 });
    }

    const ownerId = study.ownerId;

    const isOwnerExisted = await User.findById(ownerId);
    if (!isOwnerExisted) {
      return Response.json({ message: "해당 스터디의 작성자가 존재하지 않습니다." }, { status: 410 });
    }

    const lectureId = study.lectureId;
    const lectureData = await Lecture.findById(lectureId);
    const { _id, category, online, platform, rating, title, instructor, link } = lectureData;
    const lectureResult = { id: _id, category, online, platform, rating, title, instructor, link };

    const teamMembers = await TeamMembers.findOne({ studyId, "members.status": "ACCEPTED" });

    let acceptedTeamMembers = [];

    if (teamMembers) {
      acceptedTeamMembers = await Promise.all(
        teamMembers.members.map(async (member: any) => {
          const user = await User.findById(member.userId);
          return {
            memberId: member.id,
            nickname: user.nickname,
            profileImageUrl: user.profileImageUrl,
            role: member.role,
            isOwner: member.isOwner,
          };
        }),
      );
    }
    return Response.json({ study, lecture: lectureResult, teamMemberList: acceptedTeamMembers }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ error }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ error: "id 가 필요합니다." }, { status: 400 });
  }
  connectDB();
  try {
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    }
    await Study.findByIdAndDelete(studyId);

    return Response.json({ message: "스터디가 삭제되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
