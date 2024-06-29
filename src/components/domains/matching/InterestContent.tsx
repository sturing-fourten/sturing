"use client";

import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { StudyCategoryMenu } from "@/types/study";
import Button from "@/components/commons/Button";
import Image from "next/image";
import { useState } from "react";

const content = MATCHING_CONFIG.interests.content;

export default function InterestContent() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleCategoryClick = (key: string) => {
    if (selectedInterests.includes(key)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== key));
    } else {
      if (selectedInterests.length < 3) {
        setSelectedInterests([...selectedInterests, key]);
      }
    }
  };

  return (
    <div className="grid grid-rows-4 grid-cols-2 gap-[15px]">
      {Object.keys(content).map((key) => {
        const interest = content[key as keyof StudyCategoryMenu];
        const isSelected = selectedInterests.includes(key);

        return (
          <Button
            type="button"
            key={key}
            varient="ghost"
            addStyle={`w-full h-[94px] gap-[10px] shrink-0 rounded-[8px] text-4 font-medium tracking-[-0.32px] leading-[24px] transform transition-transform duration-200 hover:scale-105 ${
              isSelected ? "border-main-500 text-main-500 bg-main-100" : "text-gray-700 border-gray-300 bg-white"
            }`}
            onClick={() => handleCategoryClick(key)}>
            <Image src={interest.imageSrc} alt={`${interest.name} icon`} width={28} height={28} />
            {interest.name}
          </Button>
        );
      })}
    </div>
  );
}
