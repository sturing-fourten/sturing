"use client";

import { useState } from "react";
import CardList from "@/components/commons/CardList";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";

export default function SuccessContent() {
  const [userName, setUserName] = useState("웅진");

  return (
    <div className="flex flex-col gap-5 w-full mt-[70px]">
      <h1 className="text-gray-900 text-[16px] font-[600] tracking-[-0.32px] leading-[24px]">{`${userName}님에게 딱 맞는 팀원 추천`}</h1>
      <CardList>
        <StudyRecruitCard isMini={false} isScraped />
        <StudyRecruitCard isMini={false} isScraped />
        <StudyRecruitCard isMini={false} isScraped />
        <StudyRecruitCard isMini={false} isScraped />
        <StudyRecruitCard isMini={false} isScraped />
      </CardList>
    </div>
  );
}
