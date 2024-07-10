"use client";

import { useState } from "react";
import Button from "./Button";
import { ICONS, LOGO } from "@/constant/icons";
import Link from "next/link";

export default function CreateStudyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen sm:w-[600px] relative">
      <Button
        type="button"
        varient="circle"
        addStyle="w-[56px] h-[56px] shrink-0 fixed sm:right-[33%] sm:bottom-[30px] bottom-[20px] right-[20px] z-10"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <img src={ICONS.add.src} alt={ICONS.add.alt} width={32} height={32} />
      </Button>
      {isOpen && (
        <Link href="/recruit">
          <button className="fixed bottom-[90px] right-[22px] sm:bottom-[100px] sm:right-[33%] flex items-center w-[156px] h-[42px] gap-[10px] py-[10px] px-[12px] bg-white rounded-[5px] shadow-md">
            <img src={LOGO.logoCreate.src} alt={LOGO.logoCreate.alt} width={17} height={18} />
            <span className="text-gray-1000 text-[14px] font-medium leading-[22px] tracking-[-0.42px]">
              내 스터디 개설하기
            </span>
          </button>
        </Link>
      )}
    </div>
  );
}
