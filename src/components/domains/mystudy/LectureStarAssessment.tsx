"use client";

import SectionTitle from "./SectionTitle";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import AssessmentStar from "./AssessmentStar";
import { useState } from "react";

export default function LectureStarAssessment({ onRatingChange }: { onRatingChange: (rating: number) => void }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <section className="pt-11 px-4">
      <SectionTitle className="mb-5">강의는 어떠셨나요?</SectionTitle>
      <div className="w-full flex justify-center">
        <Rate value={rating} character={<AssessmentStar />} onChange={handleRatingChange} />
      </div>
    </section>
  );
}
