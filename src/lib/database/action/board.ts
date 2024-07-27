"use server";

import { getSession } from "../getSession";

export const postBoardAction = async (formData: FormData) => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;
    const studyId = formData.get("studyId");
    const title = formData.get("title");
    const content = formData.get("content");
    const isImportant = formData.get("isImportant") === "true";
    const postType = formData.get("postType");
    const imageUrl = formData.get("imageUrl");

    if (!userId || !studyId || !postType || !title || !content) {
      return { status: 400, message: "필수 정보가 누락되었습니다." };
    }

    const newBoard = {
      studyId,
      title,
      content,
      postType,
      imageUrl,
      isImportant,
    };

    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userId,
      },
      body: JSON.stringify(newBoard),
    });

    if (!response.ok) {
      return { status: 400, message: "게시글 작성을 실패하였습니다." };
    }

    const data = await response.json();
    return { status: 200, data };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
