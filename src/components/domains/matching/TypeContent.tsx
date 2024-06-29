"use client";

import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { TypeList } from "@/types/matching";
import Button from "@/components/commons/Button";
import Image from "next/image";
import { checkBlue, checkGray } from "../../../../public/icons/icons";
import { useState } from "react";

const content = MATCHING_CONFIG.type.content;

export default function TypeContent() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleButtonClick = (key: string) => {
    setSelectedType(key === selectedType ? null : key);
  };

  return (
    <div className="flex flex-col gap-[15px]">
      {Object.keys(content).map((key) => {
        const type = content[key as keyof TypeList];
        const isSelected = key === selectedType;

        return (
          <Button
            type="button"
            key={key}
            varient="ghost"
            addStyle={`w-full h-[64px] py-5 px-6 shrink-0 rounded-[8px] border-gray-300 bg-white text-gray-700 text-4 font-medium tracking-[-0.32px] leading-[24px] ${
              isSelected ? "text-main-500 bg-main-100 border-main-500" : "text-gray-700 border-gray-300"
            } transform transition-transform duration-200 hover:scale-105`}
            onClick={() => handleButtonClick(key)}>
            <div className="flex justify-between items-center w-full">
              <span>{type}</span>
              <Image
                src={!isSelected || selectedType === null ? checkGray : checkBlue}
                alt="check icon"
                width={24}
                height={24}
              />
            </div>
          </Button>
        );
      })}
    </div>
  );
}
