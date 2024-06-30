"use client";

import Button from "@/components/commons/Button";
import { MATCHING_CONFIG } from "@/constant/matchingConfig";
import { LevelContentConfig } from "@/types/matching";
import { useState } from "react";

const LEVEL_TAB_MENU_LIST = [
  { id: "디자인", title: "디자인" },
  { id: "기획 · 마케팅", title: "기획 · 마케팅" },
  { id: "비즈니스", title: "비즈니스" },
];

const content = MATCHING_CONFIG.level.content;

export default function LevelContent() {
  const initialSelectedLevels = {
    디자인: null,
    "기획 · 마케팅": null,
    비즈니스: null,
  };

  const [selectedTab, setSelectedTab] = useState<string>(LEVEL_TAB_MENU_LIST[0].id);
  const [selectedLevels, setSelectedLevels] = useState<{ [key: string]: string | null }>(initialSelectedLevels);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const handleButtonClick = (key: string) => {
    const updatedLevels = { ...selectedLevels, [selectedTab]: key === selectedLevels[selectedTab] ? null : key };
    setSelectedLevels(updatedLevels);
    console.log(updatedLevels);
  };

  return (
    <div className="flex flex-col gap-[20px]">
      <nav className="flex justify-between items-center gap-3 bg-white">
        {LEVEL_TAB_MENU_LIST.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`w-full flex justify-center items-center gap-3 py-3 text-4 text-gray-700 font-semibold leading-[22px] tracking-[-0.42px] ${
              selectedTab === tab.id ? "text-main-500 border-main-500 border-b-2" : "border-b-2 border-gray-300"
            }`}
            onClick={() => handleTabClick(tab.id)}>
            <span>{tab.title}</span>
          </button>
        ))}
      </nav>
      <div className="flex flex-col gap-[15px]">
        {Object.keys(content).map((key) => {
          const level = content[key as keyof LevelContentConfig];
          const isSelected = selectedLevels[selectedTab] === key;

          return (
            <Button
              key={key}
              type="button"
              varient="ghost"
              addStyle={`w-full h-[64px] py-5 px-6 shrink-0 rounded-[8px] border-gray-300 text-gray-700 text-4 tracking-[-0.32px] leading-[24px] ${
                isSelected
                  ? "text-main-500 bg-main-100 border-main-500 font-semibold"
                  : "bg-white text-gray-700 border-gray-300 font-medium"
              } transform transition-transform duration-200 hover:scale-105`}
              onClick={() => handleButtonClick(key)}>
              <div className="flex gap-[18px] items-center w-full">
                <div className="flex w-[41px]">{level.name}</div>
                <span>{level.explanation}</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
