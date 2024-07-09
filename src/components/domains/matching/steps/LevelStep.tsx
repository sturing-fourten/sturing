"use client";

import { LEVEL_TAB_MENU_LIST, MATCHING_CONFIG } from "@/constant/matchingConfig";
import { LevelContentConfig, StepsProps } from "@/types/matching";
import { useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import Title from "@/components/domains/matching/Title";
import { useLevelsStore } from "@/store/matchingStore";

export default function LevelStep({ setIsSelected }: StepsProps) {
  const content = MATCHING_CONFIG.level.content;
  const selectedLevels = useLevelsStore((state) => state.levels);
  const setSelectedLevels = useLevelsStore((state) => state.setLevels);
  const storedInterests = selectedLevels.flatMap((interests) => interests.interest);
  const selectedCategories = storedInterests ? storedInterests : [];
  const filteredTabMenuList = LEVEL_TAB_MENU_LIST.filter((tab) => selectedCategories.includes(tab.id));

  const initialSelectedLevels = storedInterests
    ? storedInterests.reduce((acc: { [key: string]: string | null }, interest: string) => {
        acc[interest] = null;
        return acc;
      }, {})
    : [];

  const [selectedTab, setSelectedTab] = useState<string>(Object.keys(initialSelectedLevels)[0]);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const handleButtonClick = (interest: string, level: string) => {
    const updatedLevels = [...selectedLevels];
    const interestIndex = updatedLevels.findIndex((item) => item.interest === interest);
    if (interestIndex !== -1) {
      updatedLevels[interestIndex] = { ...updatedLevels[interestIndex], level: level };
    }
    setSelectedLevels(updatedLevels);
  };

  useEffect(() => {
    const allLevelSelected = selectedLevels.every((level) => level.level !== "");
    if (allLevelSelected) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [setIsSelected, filteredTabMenuList]);

  return (
    <div className="flex flex-1 flex-col gap-10 w-full px-4">
      <Title>{MATCHING_CONFIG.level.title}</Title>
      <div className="flex flex-col gap-5">
        <nav className="flex justify-between items-center gap-3 bg-white">
          {filteredTabMenuList.map((tab) => (
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
            const currentLevel = selectedLevels.find((item) => item.interest === selectedTab)?.level;
            const isSelected = currentLevel === key;
            return (
              <Button
                key={key}
                type="button"
                varient="ghost"
                addStyle={`w-full h-[64px] px-6 shrink-0 rounded-[8px] border-gray-300 text-gray-700 text-4 tracking-[-0.28px] leading-[21px] ${
                  isSelected
                    ? "text-main-500 bg-main-100 border-main-500 font-semibold"
                    : "bg-white text-gray-700 border-gray-300 font-medium"
                } transform transition-transform duration-200 hover:scale-105`}
                onClick={() => handleButtonClick(selectedTab, key)}>
                <div className="flex gap-[10px] items-center w-full">
                  <div className="flex w-[41px]">{level.name}</div>
                  <span>{level.explanation}</span>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
