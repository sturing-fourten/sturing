"use server";

import { TLectureDetailData } from "@/types/api/lecture";
import { TCategory } from "@/types/api/study";
import { TLectureListQuery } from "@/types/filter";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "../getSession";

export const getLectureListAction = async (query: TLectureListQuery, page: number) => {
  const { categories, search } = query;

  const categoryQuery = categories.length > 0 ? categories.join() : "";
  const searchQuery = search && search.trim();
  const session = await getSession();
  const userId = session?.user?.id || "";

  try {
    const response = await fetch(
      `${process.env.LOCAL_URL}/api/lecture?category=${categoryQuery}&search=${searchQuery}`,
      {
        headers: {
          Authorization: "Bearer " + userId,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("강의 리스트 불러오기 실패");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("error", error.message);
    throw error;
  }
};

export const getLectureAction = async (id: string): Promise<TLectureDetailData> => {
  const session = await getSession();
  const userId = session?.user?.id || "";
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`, {
      headers: {
        Authorization: "Bearer " + userId,
      },
    });
    const data = await response.json();
    return data;
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

  revalidatePath("/lecture");
  redirect("/mystudy");
};
