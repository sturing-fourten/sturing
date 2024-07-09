"use server";

import { Lecture, LectureReview } from "@/schema/lectureSchema";
import { redirect } from "next/navigation";
import connectDB from "../db";

export const getLectureListAction = async () => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("강의 리스트 불러오기 실패");
    }

    const data = await response.json();
    return data;
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

export const createLectureReviewAction = async (formData: FormData) => {
  try {
    const rating = formData.get("rating");
    const comment = formData.get("comment");

    await connectDB();

    await LectureReview.findOneAndUpdate({
      rating: rating,
      comment: comment,
    });

    redirect("/mystudy");
  } catch (error: any) {
    console.log("error", error.message);
  }
};
