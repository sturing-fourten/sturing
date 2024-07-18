import { TeamMembers } from "@/schema/teamMemberSchema";
import connectDB from "../db";
import { Study } from "@/schema/studySchema";

export async function endRecurit(formData: FormData) {
  const studyId = formData.get("studyId");

  await connectDB();

  try {
    await Study.findByIdAndUpdate({ studyId }, { status: "RECRUIT_END" });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteMember(formData: FormData) {
  const studyId = formData.get("studyId");
  const memberId = formData.get("memberId");

  await connectDB();

  try {
    await TeamMembers.findOneAndUpdate({ studyId: studyId }, { $pull: { members: { userId: memberId } } });
    console.log("멤버 삭제 성공");
  } catch (error) {
    console.error(error);
  }
}
