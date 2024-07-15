"use client";

import LectureStarAssessment from "@/components/domains/mystudy/LectureStarAssessment";
import SectionTitle from "@/components/domains/mystudy/SectionTitle";
import Button from "@/components/commons/Button";
import { createLectureReviewAction } from "@/lib/database/action/lecture";
import { useState } from "react";

export default function LectureReviewForm({ lectureId }: { lectureId: string }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("rating", rating.toString());
    formData.append("comment", comment);
    await createLectureReviewAction(lectureId, formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <LectureStarAssessment onRatingChange={setRating} />

        <section className="pt-11 px-4 flex flex-col flex-1">
          <SectionTitle className="mb-5">강의 후기를 알려주세요.</SectionTitle>
          <textarea
            maxLength={500}
            className="w-full h-[200px] py-3 px-4 rounded border border-gray-300 text-gray-600 text-sm font-medium leading-snug"
            placeholder="후기를 적어주세요."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </section>

        <footer className="w-full py-3 px-4 bg-white">
          <Button
            type="submit"
            varient="filled"
            className="w-full h-12 bg-blue-500 rounded text-white text-base font-semibold leading-normal">
            완료
          </Button>
        </footer>
      </form>
    </>
  );
}
