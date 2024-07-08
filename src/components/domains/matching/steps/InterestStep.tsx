"use client";

import { StepsProps } from "@/types/matching";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { StudyCategoryMenu } from "@/types/study";
import Button from "@/components/commons/Button";
import { useEffect, useState } from "react";
import Title from "../Title";

const content = MATCHING_CONFIG.interests.content;

export default function InterestStep({ setIsSelected }: StepsProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleCategoryClick = (key: string) => {
    let updatedInterests;
    if (selectedInterests.includes(key)) {
      updatedInterests = selectedInterests.filter((item) => item !== key);
    } else {
      updatedInterests = [...selectedInterests, key];
    }
    setSelectedInterests(updatedInterests);
    setIsSelected(updatedInterests.length > 0);
  };

  useEffect(() => {
    setIsSelected(selectedInterests.length > 0);
  }, [selectedInterests, setIsSelected]);

  return (
    <>
      <div className="flex flex-1 flex-col w-full px-4">
        <Title subTitle>{`웅진님 ${MATCHING_CONFIG.interests.title}`}</Title>
        <div className="grid grid-rows-4 grid-cols-2 gap-[15px] mt-10 mb-5">
          {Object.keys(content).map((key, index) => {
            const interest = content[key as keyof StudyCategoryMenu];
            const isSelected = selectedInterests.includes(key);
            return (
              <Button
                type="button"
                key={key}
                varient="ghost"
                addStyle={`w-full h-[94px] gap-[10px] shrink-0 rounded-[8px] text-4 font-medium tracking-[-0.32px] leading-[24px] transform transition-transform duration-200 hover:scale-105 relative ${
                  isSelected ? "border-main-500 text-main-500 bg-main-100" : "text-gray-700 border-gray-300 bg-white"
                }`}
                onClick={() => handleCategoryClick(key)}>
                <img src={interest.src} alt={`${interest.alt} icon`} width={28} height={28} />
                {interest.alt}
                {selectedInterests[0] === key && (
                  <span className="absolute top-2 left-2 flex justify-center items-center bg-main-500 rounded-full py-[2px] px-[6px] text-white text-[11px] tracking-[-0.22px] leading-[16px] font-semibold">
                    대표
                  </span>
                )}
              </Button>
            );
          })}
        </div>
        <div className="flex items-center gap-[6px] w-full">
          <span className="flex justify-center items-center text-center text-[11px] tracking-[-0.22px] leading-[16px] font-semibold bg-main-100 text-main-500 rounded-full w-[13px] h-[13px]">
            !
          </span>
          <span className="text-[13px] tracking-[-0.22px] leading-[16px] text-gray-900">
            첫 번째로 선택한 분야가 대표 분야로 설정됩니다.
          </span>
        </div>
      </div>
    </>
  );
}
