"use client";

import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { UserFavoriteFieldType } from "@/types/study";
import Button from "@/components/commons/Button";
import { useState } from "react";
import Title from "../Title";
import TopBar from "@/components/commons/TopBar";
import BottomButton from "../BottomButton";

const content = MATCHING_CONFIG.mood.content;

export default function MoodStep() {
  const [selectedMood, setSelectedMood] = useState<string[]>([]);

  const handleCategoryClick = (key: string) => {
    if (selectedMood.includes(key)) {
      setSelectedMood(selectedMood.filter((item) => item !== key));
    } else {
      if (selectedMood.length < 3) {
        setSelectedMood([...selectedMood, key]);
      }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen sm:h-dvh gap-5">
      <TopBar variant="back" />
      <div className="flex flex-1 flex-col gap-10 px-4">
        <Title subTitle>{`웅진님 ${MATCHING_CONFIG.mood.title}`}</Title>
        <div className="grid grid-cols-2 gap-[15px] mb-[30px]">
          {Object.keys(content).map((key) => {
            const mood = content[key as keyof UserFavoriteFieldType];
            const isSelected = selectedMood.includes(key);

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
              </Button>
            );
          })}
        </div>
      </div>

      <BottomButton />
    </div>
  );
}
