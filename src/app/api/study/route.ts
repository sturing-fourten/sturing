import connectDB from "@/lib/database/db";
import { Lecture } from "@/schema/lectureSchema";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";

export async function POST(request: Request) {
  connectDB();

  try {
    const newStudy = await request.json();

    if (!newStudy) throw new Error("필수 정보가 누락되었습니다.");
    newStudy.status = "RECRUIT_START";
    newStudy.scrapCount = 0;

    // 1) Study 생성
    const newStudyResult = await Study.create(newStudy);
    const newStudyId = newStudyResult._id;
    // 2) TeamMembers 생성
    const newTeamMembers = {
      studyId: newStudyId,
      members: [
        {
          userId: newStudy.ownerId,
          role: "팀장",
          isOwner: true,
          status: "ACCEPTED",
        },
      ],
    };

    const { _id: teamMembersId } = await TeamMembers.create(newTeamMembers);
    if (!teamMembersId) throw new Error("팀원 정보가 없습니다.");

    // 3) Study에 teamMembersId 추가
    await Study.findOneAndUpdate({ _id: newStudyId }, { $push: { teamMembersId: teamMembersId } }, { new: true });

    // 4) Study에 관련 강의 추가
    const lectureId = newStudyResult.lectureId;
    const lectureData = await Lecture.findById(lectureId);

    const { _id, category, online, platform, rating, title, instructor, link } = lectureData;
    const lectureResult = { id: _id, category, online, platform, rating, title, instructor, link };

    return Response.json({ study: newStudyResult, lecture: lectureResult }, { status: 200 });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ message: "필수 값을 모두 입력해주세요" }, { status: 400 });
    } else {
      return Response.json(error, { status: 500 });
    }
  }
}
