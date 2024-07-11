"use server";

import { revalidatePath } from "next/cache";

export const getbookmarksAction = async (type: string, typeId: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/${type}/${typeId}/bookmark`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("강의 찜 리스트 불러오기 실패");
    }

    const data = await response.json();
    return data.lectureBookmark;
  } catch (error: any) {
    console.error("Error fetching lecture:", error.message);
    throw error;
  }
};

export const createBookmarkAction = async (type: string, typeId: string, userId: string) => {
  try {
    const newLectureBookmark = {
      [`${type}Id`]: typeId,
      userId: userId,
    };

    const response = await fetch(`${process.env.LOCAL_URL}/api/${type}/${typeId}/bookmark`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLectureBookmark),
    });

    if (!response.ok) {
      throw new Error("강의 북마크 실패");
    }

    revalidatePath("/lecture", "layout");
    revalidatePath("/search", "layout");
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteBookmarkAction = async (type: string, typeId: string, _id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/${type}/${typeId}/bookmark`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    if (!response.ok) {
      throw new Error("강의 북마크 삭제 실패");
    }

    revalidatePath("/lecture", "layout");
    revalidatePath("/search", "layout");
  } catch (error) {
    console.log("error", error);
  }
};
