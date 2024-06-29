"use client";

import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { UserFavoriteFieldType } from "@/types/study";
import Button from "@/components/commons/Button";
import Image from "next/image";
import { useState } from "react";

const content = MATCHING_CONFIG.mood.content;

export default function MoodContent() {
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
    <div className="grid grid-cols-2 gap-[15px]">
      {Object.keys(content).map((key) => {
        const mood = content[key as keyof UserFavoriteFieldType];
        const isSelected = selectedMood.includes(key);

        return (
          <Button
            type="button"
            key={key}
            varient="ghost"
            addStyle={`w-full h-[94px] gap-[10px] shrink-0 rounded-[8px] text-4 font-medium tracking-[-0.32px] leading-[24px] transform transition-transform duration-200 hover:scale-105 ${
              isSelected ? "border-main-500 text-main-500 bg-main-100" : "text-gray-700 border-gray-300 bg-white"
            }`}
            onClick={() => handleCategoryClick(key)}>
            <Image src={mood.imageSrc} alt={`${mood.name} icon`} width={28} height={28} />
            {mood.name}
          </Button>
        );
      })}
    </div>
  );
}
