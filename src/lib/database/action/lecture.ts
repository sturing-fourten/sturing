"use server";

import { Lecture, LectureBookmark } from "@/schema/lectureSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getLectureListAction = async () => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("강의 리스트 불러오기 실패");
    }

    const data = await response.json();
    return data.lectures;
  } catch (error: any) {
    console.log("error", error.message);
  }
};

export const getLectureAction = async (id: string) => {
  try {
    const lecture = await Lecture.findById(id);
    return lecture;
  } catch (error: any) {
    console.error("Error fetching lecture:", error.message);
    throw error;
  }
};

export const createLectureReviewAction = async (lectureId: string, formData: FormData) => {
  const newReview = {
    reviewerId: "668bcc45f6265b4ece271a16",
    reviewer: "모몽가",
    rating: Number(formData.get("rating")),
    comment: formData.get("comment"),
    createdAt: new Date(),
  };

  const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview),
  });

  if (!response.ok) {
    throw new Error("Failed to create lecture review");
  }

  redirect("/mystudy");
};

export const getLecturebookmarks = async (lectureId: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}/bookmark`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("강의 찜 리스트 불러오기 실패");
    }

    const { lectureBookmarks } = await response.json();
    return lectureBookmarks;
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
      throw new Error("Failed to create lecture review");
    }

    revalidatePath(`/lecture/${lectureId}`);
  } catch (error: any) {
    console.log("error", error.message);
  }
};

export const deleteLectureBookmarkAction = async (lectureId: string, _id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}/bookmark`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id),
    });

    if (!response.ok) {
      throw new Error("Failed to create lecture review");
    }

    // revalidatePath(`/lecture/${lectureId}`);
  } catch (error: any) {
    console.log("error", error.message);
  }
};
