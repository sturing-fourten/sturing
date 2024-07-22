import React, { useState } from "react";

interface StudyTitleProps {
  studyTitle: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StudyTitle({ studyTitle, handleTitleChange }: StudyTitleProps) {
  const minLength = 5;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isError = isFocused && studyTitle.length < minLength;

  return (
    <div className="flex-col gap-2 inline-flex">
      <input
        type="text"
        name="study_title"
        className={`w-full border py-3 px-4 flex items-center gap-2 rounded-[5px] focus:outline-none placeholder:text-[14px] border-gray-300 placeholder:font-semibold placeholder:tracking-[-0.42px] placeholder:leading-[22px] ${
          isError ? "focus:border-red-500" : "focus:border-main-600"
        } text-[14px] font-semibold tracking-[-0.42px] leading-[22px] bg-white`}
        value={studyTitle}
        placeholder="내 스터디를 돋보이게 하는 한마디 (최소 5자 이상 필수)"
        minLength={minLength}
        maxLength={24}
        onChange={handleTitleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="flex w-full text-zinc-800 text-xs font-normal mt-1">
        <div className="flex-grow">
          {isError && <p className="text-red-500 text-xs">제목은 최소 {minLength}자 이상이어야 합니다.</p>}
        </div>
        <div className="text-right text-zinc-800 text-xs font-normal">
          {studyTitle.length}
          <span className="text-stone-300">/24</span>
        </div>
      </div>
    </div>
  );
}
