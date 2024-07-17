"use server";
import { RecruitComment } from "@/schema/RecruitCommentSchema";
import connectDB from "../db";
import { getSession } from "../getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function recruitComment(formData: FormData) {
  const comment = formData.get("comment");
  const studyId = formData.get("studyId");
  const nickname = formData.get("nickname");
  const profileImageUrl = formData.get("profileImageUrl");

  await connectDB();

  try {
    const session = await getSession();
    const userId = session?.user?.id;

    if (userId) {
      const newComment = new RecruitComment({
        studyId: studyId,
        userId: userId,
        nickname: nickname,
        profileImageUrl: profileImageUrl,
        content: comment,
      });

      await newComment.save();
      revalidatePath(`/study/${studyId}`);
      redirect(`/study/${studyId}`);
    } else {
      console.error("사용자 정보가 없습니다.");
    }
  } catch (error) {
    console.error("댓글 저장 중 에러 발생:", error);
  }
}
