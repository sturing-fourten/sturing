"use client";

import { useEffect } from "react";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import Button from "@/components/commons/Button";
import Title from "../Title";
import { StepsProps } from "@/types/matching";
import { UserFavoriteFieldType } from "@/types/study";
import { useMoodsStore } from "@/store/matchingStore";

export default function MoodStep({ userNickname, setIsSelected }: StepsProps) {
  const content = MATCHING_CONFIG.mood.content;

  const selectedMoods = useMoodsStore((state) => state.moods);
  const setSelectedMoods = useMoodsStore((state) => state.setMoods);

  const handleCategoryClick = (key: string) => {
    if (selectedMoods.includes(key)) {
      setSelectedMoods(selectedMoods.filter((item) => item !== key));
    } else {
      if (selectedMoods.length < 3) {
        setSelectedMoods([...selectedMoods, key]);
      } else {
        alert("최대 3개의 분위기만 선택할 수 있습니다.");
      }
    }
  };

  useEffect(() => {
    setIsSelected(selectedMoods.length > 0);
  }, [selectedMoods, setIsSelected]);

  return (
    <div className="flex flex-1 flex-col px-4">
      <Title subTitle>{`${userNickname}님 ${MATCHING_CONFIG.mood.title}`}</Title>
      <div className="grid grid-cols-2 gap-[15px] mt-10 mb-5">
        {Object.keys(content).map((key) => {
          const mood = content[key as keyof UserFavoriteFieldType];
          const isSelected = selectedMoods.includes(key);

          return (
            <Button
              type="button"
              key={key}
              varient="ghost"
              addStyle={`w-full h-[70px] gap-[10px] shrink-0 rounded-[8px] text-4 font-medium tracking-[-0.32px] leading-[24px] transform transition-transform duration-200 hover:scale-105 ${
                isSelected ? "border-main-500 text-main-500 bg-main-100" : "text-gray-700 border-gray-300 bg-white"
              }`}
              onClick={() => handleCategoryClick(key)}>
              <img src={mood.src} alt={`${mood.alt} icon`} width={28} height={28} />
              {mood.alt}
              {selectedMoods[0] === key && (
                <span className="absolute top-1 sm:top-2 left-1 sm:left-2 flex justify-center items-center bg-main-500 rounded-full py-[2px] px-[6px] text-white text-[11px] tracking-[-0.22px] leading-[16px] font-semibold">
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
          첫 번째로 선택한 분위기가 대표 분위기로 설정됩니다.
        </span>
      </div>
    </div>
  );
}
