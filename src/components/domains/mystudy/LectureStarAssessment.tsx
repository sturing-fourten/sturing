"use client";

import SectionTitle from "./SectionTitle";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import AssessmentStar from "./AssessmentStar";

export default function LectureStarAssessment() {
  return (
    <section className="pt-11 px-4">
      <SectionTitle className="mb-5">강의는 어떠셨나요?</SectionTitle>
      <div className="w-full flex justify-center">
        <Rate value={1} allowHalf character={<AssessmentStar />} onChange={(v) => console.log(v)} />
      </div>
    </section>
  );
}
