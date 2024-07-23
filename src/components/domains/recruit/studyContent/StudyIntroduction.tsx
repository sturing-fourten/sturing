import React, { useState } from "react";

interface StudyIntroductionProps {
  studyIntroduction: string;
  handleIntroductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function StudyIntroduction({ studyIntroduction, handleIntroductionChange }: StudyIntroductionProps) {
  const minLength = 20;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isError = isFocused && studyIntroduction.length < minLength;

  return (
    <>
      <textarea
        className={`w-full h-60 text-sm font-semibold leading-snug border border-gray-300  bg-white py-3 px-4 flex items-center gap-2 rounded-[5px] focus-visible:outline-none placeholder:text-[14px] placeholder:font-semibold placeholder:tracking-[-0.42px] placeholder:leading-[22px] ${
          isError ? "focus:border-red-500" : "focus:border-main-600"
        }`}
        maxLength={500}
        placeholder="소개글을 입력해 주세요 (최소 20자 필수)"
        onChange={handleIntroductionChange}
        value={studyIntroduction}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="flex w-full text-zinc-800 text-xs font-normal mt-1">
        <div className="flex-grow">
          {isError && <p className="text-red-500 text-xs">스터디 소개는 최소 {minLength}자 이상이어야 합니다.</p>}
        </div>
        <div className="text-right text-zinc-800 text-xs font-normal">
          {studyIntroduction.length}
          <span className="text-stone-300">/500</span>
        </div>
      </div>
    </>
  );
}
