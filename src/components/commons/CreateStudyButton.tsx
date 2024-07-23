"use client";

import { useState } from "react";
import Button from "./Button";
import { ICONS, LOGO } from "@/constant/icons";
import Link from "next/link";

export default function CreateStudyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        varient="circle"
        addStyle="flex items-center justify-center w-14 h-14 absolute right-[22px] bottom-10 z-10 shadow"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <img
          className={`transition-all duration-300 ${isOpen ? "animate-[rotate-45_0.3s_ease-in-out_forwards]" : ""}`}
          src={ICONS.add.src}
          alt={ICONS.add.alt}
          width={32}
          height={32}
        />
      </Button>
      {isOpen && (
        <Link href="/recruit">
          <button className="absolute bottom-[110px] right-[22px] flex items-center w-[156px] h-[42px] gap-[10px] py-[10px] px-[12px] bg-white rounded-[5px] shadow-md">
            <img src={LOGO.logoCreate.src} alt={LOGO.logoCreate.alt} width={17} height={18} />
            <span className="text-gray-1000 text-[14px] font-medium leading-[22px] tracking-[-0.42px]">
              내 스터디 개설하기
            </span>
          </button>
        </Link>
      )}
    </>
  );
}
