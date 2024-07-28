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

export async function PostComment(formData: FormData) {
  const comment = formData.get("comment");
  const studyId = formData.get("studyId");
  const postId = formData.get("postId");

  try {
    const session = await getSession();
    const userId = session?.user?.id;

    const newComment = {
      studyId: studyId,
      content: comment,
    };

    if (userId) {
      const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard-post/${postId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userId,
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        return { status: 400, message: "댓글을 작성하는 데 실패하였습니다." };
      }

      return { status: 200 };
    } else {
      console.error("사용자 정보가 없습니다.");
    }
  } catch (error) {
    console.error("댓글 작성하는 데 에러 발생:", error);
  }
}
