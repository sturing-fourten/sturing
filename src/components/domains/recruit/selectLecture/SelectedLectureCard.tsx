"use client";
import { ICONS } from "@/constant/icons";
import { useState } from "react";

interface SelectedLectureCardProps {
  onClick: () => void;
  setIsLecture: (lecture: string) => void;
}

export default function SelectedLectureCard({ onClick, setIsLecture }: SelectedLectureCardProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleLectureClick = () => {
    setIsLecture("668a69466e35d46f28129a90");
    setIsClicked(true);
  };

  return (
    <div
      className={`w-full px-5 py-6 bg-white rounded-lg border flex justify-between items-start ${
        isClicked ? "border-main-500" : "border-neutral-200"
      }`}>
      <button type="button" onClick={handleLectureClick} className="flex w-full">
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-sm font-semibold leading-snug">
            {"【한글자막】Python 부트캠프 : 100개의 프로젝트로 Python 개발 완전 정복"}
          </div>
          <p className="Dr. Angela Yu, Developer and Lead Instructor, 웅진씽크빅 글로벌">GameDev.tv Team</p>
        </div>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}>
        <img src={ICONS.close.src} alt={ICONS.close.alt} />
      </button>
    </div>
  );
}
