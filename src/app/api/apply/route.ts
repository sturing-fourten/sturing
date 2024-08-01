export const maxDuration = 300; // 추가한 코드
export const dynamic = "force-dynamic"; // 추가한 코드

import connectDB from "@/lib/database/db";
import { Application } from "@/schema/applicationSchema";
import { TeamMembers } from "@/schema/teamMemberSchema";

export async function PATCH(request: Request) {
  await connectDB();

  try {
    const { studyId, newApplication, newTeamMember } = await request.json();

    if (!studyId || !newApplication || !newTeamMember) throw new Error("지원서 필수 정보가 없습니다.");

    // 1) 지원서 생성
    newApplication.studyId = studyId;
    const { _id: applicationId } = await Application.create(newApplication);
    if (!applicationId) throw new Error("지원서 정보가 없습니다.");

    // 2) studyId로 teamMembers 조회해서 members에 추가 (지원서 id도 함께)
    newTeamMember.applicationId = applicationId;

    const updateResult = await TeamMembers.updateOne({ studyId: studyId }, { $push: { members: newTeamMember } });
    if (updateResult.matchedCount === 0) throw new Error("해당하는 팀 멤버 리스트가 없습니다.");
    return Response.json("지원서 생성 성공");
  } catch (error: any) {
    throw new Error(error);
  }
}
