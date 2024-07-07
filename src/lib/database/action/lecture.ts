"use server";

import { LectureReview } from "@/schema/lectureSchema";
import { redirect } from "next/navigation";
import connectDB from "../db";

export const getLectureListAction = async () => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/lecture`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

export const createLectureReviewAction = async (formData: FormData) => {
  try {
    const rating = formData.get("rating");
    const comment = formData.get("comment");

    // const review = new LectureReview({
    //   rating,
    //   comment,
    // });

    // const response = await fetch(`${process.env.LOCAL_URL}/api/lectureReview`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(review),
    // });

    // if (!response.ok) {
    //   throw new Error("강의 리뷰 작성 실패");
    // }

    // await review.save();
    // redirect("/mystudy");

    connectDB();

    await LectureReview.findOneAndUpdate({
      rating: rating,
      comment: comment,
    });

    redirect("/mystudy");
  } catch (error: any) {
    console.log("error", error.message);
  }
};
