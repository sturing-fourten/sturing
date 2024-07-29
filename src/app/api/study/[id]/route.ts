import connectDB from "@/lib/database/db";
import { Application } from "@/schema/applicationSchema";
import { StudyBookmark } from "@/schema/bookmarkSchema";
import { Dashboard } from "@/schema/dashboardSchema";
import { Lecture } from "@/schema/lectureSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";
import { User } from "@/schema/userSchema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const studyId = params.id;
  if (!studyId) {
    return Response.json({ error: "id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();

  const token = req.headers.get("Authorization");
  const userId = token?.split(" ")[1];
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
    const isBookmarked = userId ? Boolean(await StudyBookmark.findOne({ studyId, userId })) : false;

    const lectureId = study.lectureId;
    const lectureData = await Lecture.findById(lectureId);
    const { _id, category, online, platform, rating, title, instructor, link } = lectureData;
    const lectureResult = { id: _id, category, online, platform, rating, title, instructor, link };

    const teamMembers = await TeamMembers.findOne({ studyId });
    let acceptedTeamMembers = [];

    if (teamMembers) {
      acceptedTeamMembers = await Promise.all(
        teamMembers.members
          // .filter((member: any) => member.status === "ACCEPTED")   //유저 정보 받은 후 처리\
          .map(async (member: any) => {
            const user = await User.findById(member.userId);
            return {
              memberId: member.userId,
              nickname: user.nickname,
              profileImageUrl: user.profileImageUrl,
              role: member.role,
              isOwner: member.isOwner,
              status: member.status,
            };
          }),
      );
    }

    return Response.json(
      { study, lecture: lectureResult, teamMemberList: acceptedTeamMembers, isBookmarked },
      { status: 200 },
    );
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

  const token = request.headers.get("Authorization");
  const userId = token?.split(" ")[1];

  if (!userId) {
    return Response.json({ error: "user id 가 필요합니다." }, { status: 400 });
  }
  await connectDB();
  try {
    const study = await Study.findById(studyId);
    if (!study) {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    }

    // if (study.status !== "RECRUIT_START") {
    //   return Response.json({ message: "모집중인 스터디가 아닙니다." }, { status: 403 });
    // }

    if (study.ownerId !== userId) {
      return Response.json({ message: "권한이 없습니다." }, { status: 403 });
    }

    const teamMembers = await TeamMembers.findOne({ studyId });
    const acceptedTeamMembers = teamMembers.members.filter(({ status }: { status: string }) => {
      return status === "ACCEPTED";
    });

    if (acceptedTeamMembers.length > 1) {
      return Response.json({ message: "수락한 팀원이 존재하므로 스터디를 삭제할 수 없습니다." }, { status: 403 });
    }
    await TeamMembers.findOneAndDelete({ studyId }); //팀멤버 데이터 삭제
    await Application.deleteMany({ studyId }); //지원서들 삭제
    await Study.findByIdAndDelete(studyId); //스터디 삭제
    await Dashboard.findOneAndDelete({ studyId }); //대시보드 삭제

    return Response.json({ message: "스터디가 삭제되었습니다." }, { status: 200 });
  } catch (error: any) {
    if (error.name === "CastError") {
      return Response.json({ message: "스터디가 존재하지 않습니다." }, { status: 404 });
    } else {
      return Response.json({ message: error.name }, { status: 500 });
    }
  }
}
