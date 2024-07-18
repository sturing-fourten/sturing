"use client";

import { useState } from "react";
import AlertMessage from "@/components/commons/AlertMessage";
import CardList from "@/components/commons/CardList";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import Button from "@/components/commons/Button";

export default function SuccessStep() {
  const [userName, setUserName] = useState("웅진");

  return (
    <div className="flex flex-col gap-[30px] px-4 w-full min-h-dvh">
      <div className="flex flex-1 flex-col gap-[70px] w-full mt-[70px]">
        <AlertMessage varient="matching" />
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-gray-900 text-[16px] font-[600] tracking-[-0.32px] leading-[24px]">{`${userName}님에게 딱 맞는 팀원 추천`}</h1>
          <CardList isSingleLine>
            {/* <StudyRecruitCard isMini={false} isScraped />
            <StudyRecruitCard isMini={false} isScraped />
            <StudyRecruitCard isMini={false} isScraped />
            <StudyRecruitCard isMini={false} isScraped />
            <StudyRecruitCard isMini={false} isScraped /> */}
          </CardList>
        </div>
      </div>
      <div className="py-4 bg-white flex flex-col gap-3">
        <Button
          varient="filled"
          addStyle="w-full h-[50px] bg-main-500 rounded-[5px] shrink-0 text-white font-semibold text-4">
          내 프로필 보러가기
        </Button>
        <Button
          varient="filled"
          addStyle="w-full h-[50px] bg-main-100 rounded-[5px] shrink-0 text-main-500 font-semibold text-4">
          홈으로 가기
        </Button>
      </div>
    </div>
  );
}
