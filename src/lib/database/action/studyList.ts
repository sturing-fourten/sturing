"use server";

import { revalidatePath } from "next/cache";

export const deleteStudyAction = async (formData: FormData) => {
  try {
    const _id = formData.get("_id");
    if (!_id) throw new Error("스터디 정보가 없습니다.");

    const response = await fetch(`${process.env.LOCAL_URL}/api/study`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id),
    });

    if (!response.ok) {
      throw new Error("스터디 삭제 실패");
    }

    revalidatePath("/study-schema-test");
  } catch (error: any) {
    console.log("error", error.message);
  }
};
