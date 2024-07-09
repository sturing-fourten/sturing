import connectDB from "@/lib/database/db";
import { Study } from "@/schema/studySchema";
import { TeamMembers } from "@/schema/teamMemberSchema";

export async function GET(request: Request) {
  connectDB();

  try {
    const studyList = await Study.find({});

    return Response.json(studyList);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function POST(request: Request) {
  connectDB();

  try {
    const newStudy = await request.json();

    if (!newStudy) throw new Error("필수 정보가 누락되었습니다.");

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
    return Response.json("스터디 개설 성공");
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function DELETE(request: Request) {
  connectDB();

  try {
    const _id = await request.json();
    if (!_id) throw new Error("스터디 정보가 없습니다.");

    await Study.findByIdAndDelete(_id);

    return Response.json("스터디 삭제 성공");
  } catch (error: any) {
    throw new Error(error);
  }
}
