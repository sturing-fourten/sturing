"use client";

import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { StepsProps, TypeContentConfig } from "@/types/matching";
import { useEffect, useState } from "react";
import Title from "../Title";
import Button from "@/components/commons/Button";
import { ICONS } from "@/constant/icons";

const content = MATCHING_CONFIG.type.content;

export default function TypeStep({ setIsSelected }: StepsProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleButtonClick = (key: string) => {
    setSelectedType(key === selectedType ? null : key);
    setIsSelected(true);
  };

  useEffect(() => {
    setIsSelected(selectedType !== null);
  }, [selectedType, setIsSelected]);

  return (
    <div className="flex flex-col w-full h-dvh gap-5">
      <div className="flex flex-1 flex-col gap-10 px-4">
        <Title>{`웅진님${MATCHING_CONFIG.type.title}`}</Title>
        <div className="flex flex-col gap-[15px]">
          {Object.keys(content).map((key) => {
            const type = content[key as keyof TypeContentConfig];
            const isSelected = key === selectedType;

            return (
              <Button
                type="button"
                key={key}
                varient="ghost"
                addStyle={`w-full h-[64px] py-5 px-6 shrink-0 rounded-[8px] border-gray-300 text-gray-700 text-4 font-medium tracking-[-0.32px] leading-[24px] ${
                  isSelected ? "text-main-500 bg-main-100 border-main-500" : "bg-white text-gray-700 border-gray-300"
                } transform transition-transform duration-200 hover:scale-105`}
                onClick={() => handleButtonClick(key)}>
                <div className="flex justify-between items-center w-full">
                  <span>{type}</span>
                  <img
                    src={!isSelected || selectedType === null ? ICONS.checkGray.src : ICONS.checkBlue.src}
                    alt="check icon"
                    width={24}
                    height={24}
                  />
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
