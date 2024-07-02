"use client";

import { useState } from "react";
import Title from "@/components/domains/apply/Title";
import { checkBlue, question } from "../../../../public/icons/icons";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";

type RoleContent = {
  name: string;
  content: string;
};

export type RoleContentConfig = {
  leader: RoleContent;
  subLeader: RoleContent;
  homeworkLeader: RoleContent;
  attendanceLeader: RoleContent;
  recordLeader: RoleContent;
  scheduleLeader: RoleContent;
};

export const MOCK_ROLE_CONFIG: RoleContentConfig = {
  leader: {
    name: "팀장",
    content: "팀의 리더",
  },
  subLeader: {
    name: "부팀장",
    content: "팀장 보조",
  },
  homeworkLeader: {
    name: "과제팀장",
    content: "과제 제출 확인",
  },
  attendanceLeader: {
    name: "출결팀장",
    content: "출결 확인",
  },
  recordLeader: {
    name: "기록팀장",
    content: "스터디 기록",
  },
  scheduleLeader: {
    name: "일정팀장",
    content: "일정 조율",
  },
};

const content = MOCK_ROLE_CONFIG;

export default function RoleStep() {
  const [selectedRole, setSelectedRole] = useState<string | null>();

  const handleRoleClick = (key: string) => {
    setSelectedRole(key);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh px-4 gap-5">
      <TopBar variant="save" />
      <div className="flex-1 flex-col justify-between w-full">
        <Title>가장 희망하는 역할을 선택해 주세요</Title>
        <div className="flex flex-col gap-5 h-full mt-[14px]">
          <span className="text-gray-700 text-[14px] font-semibold tracking-[-0.42px] leading-[22px]">
            개설자가 원하는 역할 목록이에요
          </span>
          <div className="grid grid-cols-2 flex-col gap-[15px]">
            {Object.keys(content).map((key) => {
              const role = content[key as keyof RoleContentConfig];

              return (
                <Button
                  key={key}
                  type="button"
                  varient="ghost"
                  addStyle={`w-full py-2 px-3 shrink-0 rounded-[8px] text-4 tracking-[-0.32px] leading-[24px]  
                  ${
                    selectedRole === key
                      ? "text-main-500 bg-main-100 border-main-500 font-semibold"
                      : "bg-white text-gray-700 border-gray-300 font-medium"
                  } transform transition-transform duration-200 hover:scale-105`}
                  onClick={() => handleRoleClick(key)}>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-[7px] items-center w-full">
                      <span>{role.name}</span>
                      <span>{role.content}</span>
                    </div>
                    {selectedRole === key && <Image src={checkBlue} alt="체크 아이콘" className="w-6 h-6" />}
                  </div>
                </Button>
              );
            })}
          </div>
          <div className="w-full">
            <button type="button" className="flex justify-center items-center gap-[6px]">
              <Image src={question} alt="물음표 아이콘" width={13} height={13} />
              <span className="text-gray-500 text-center text-[12px] font-normal tracking-[-0.36px] leading-[18px]">
                역할에 대한 정보가 궁금하다면?
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="flex gap-4 justify-center items-center w-full py-3">
        <Link href="/apply" className="w-[100px] sm:w-[150px]">
          <Button type="button" varient="ghost" addStyle="w-full h-[50px] rounded-[8px] text-gray-600 font-medium">
            이전
          </Button>
        </Link>
        <Link href="/apply/success" className="w-full">
          <Button
            type="submit"
            varient="filled"
            addStyle="w-full h-[50px] rounded-[8px] bg-main-500 text-white font-medium">
            지원하기
          </Button>
        </Link>
      </footer>
    </div>
  );
}
