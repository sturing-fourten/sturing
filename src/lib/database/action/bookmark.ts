"use server";

import { revalidatePath } from "next/cache";

export const getLecturebookmarks = async (lectureId: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}/bookmark`, {
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

export const createLectureBookmarkAction = async (lectureId: string, userId: string) => {
  try {
    const newLectureBookmark = {
      lectureId: lectureId,
      userId: userId,
    };

    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}/bookmark`, {
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

export const deleteLectureBookmarkAction = async (lectureId: string, _id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}/bookmark`, {
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
