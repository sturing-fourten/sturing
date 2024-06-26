"use client";

import { useState } from "react";
import Title from "./Title";
import Image from "next/image";

import Link from "next/link";
import Button from "@/components/commons/Button";
import { StudyCategoryButton } from "@/components/commons/StudyCategoryButton";
import { STUDY_CATEGORY_MENU } from "@/constant/study";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import UserCard from "@/components/commons/card/UserCard";
import CardList from "@/components/commons/CardList";

const beforeStateTitle = [
  { id: 1, text: "이번주 인기 스터디" },
  { id: 2, text: "새로 개설된 스터디" },
  { id: 3, text: "스터링 활동 우수 팀원" },
];

export default function Contents() {
  const [isLogin, setIsLogin] = useState(true);
  const [isMatched, setIsMatched] = useState(true);

  const [userName, setUserName] = useState("웅진");

  const afterStateTitle = [
    { id: 1, text: `${userName}님을 위한 디자인 스터디` },
    { id: 2, text: `내 주변에 새로 개설된 스터디` },
    { id: 3, text: `${userName}님에게 딱 맞는 팀원 추천` },
  ];

  return (
    <div className="flex flex-col items-center w-full pb-[32px] px-[16px]">
      <div className="flex flex-col w-full gap-[20px]">
        <Title>분야별 스터디 탐색하기</Title>
        <div className="flex items-center whitespace-nowrap scrollbar-hide overflow-auto overflow-x-scroll mb-[40px]">
          <div className="inline-block">
            {Object.entries(STUDY_CATEGORY_MENU).map(([key, { imageSrc, name }]) => (
              <StudyCategoryButton key={key} imageSrc={imageSrc} imageAlt={name} addStyle="mr-[8px]">
                {name}
              </StudyCategoryButton>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] shrink-0 bg-[#F7F7F7] mb-[40px]" />

      {isLogin && isMatched
        ? afterStateTitle.map((title) => (
            <div key={title.id} className="flex flex-col gap-[20px] w-full mb-[50px]">
              <Title>{title.text}</Title>
              <CardList>
                {title.id === 3 ? (
                  <>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                  </>
                ) : (
                  <>
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                  </>
                )}
              </CardList>
            </div>
          ))
        : beforeStateTitle.map((title) => (
            <div key={title.id} className="flex flex-col gap-[20px] w-full mb-[50px]">
              <Title>{title.text}</Title>
              <CardList>
                {title.id === 3 ? (
                  <>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                  </>
                ) : (
                  <>
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                    <StudyRecruitCard isMini={false} isScraped />
                  </>
                )}
              </CardList>
            </div>
          ))}

      <div className="flex flex-col gap-[20px] w-full">
        <div>
          <Title>스터링 환급 챌린지</Title>
          <span className="text-[12px] text-gray-700 font-normal leading-[18px] tracking-[-0.24px]">
            팀원과 함께 2주 집중 스터디, 성공 시 스터디원 전원 지급!
          </span>
        </div>
        <Image src="images/challenge.svg" alt="스터링 챌린지 이미지" width={343} height={159} className="w-full" />
        <Link href="/preparing">
          <Button
            varient="ghost"
            addStyle="border border-gray-400 rounded-[5px] w-full h-[50px] py-[14px] px-[20px] shrink-0 text-gray-1000 text-[16px] font-semibold leading-[24px] tracking-[-0.48px]">
            챌린지 보러가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
