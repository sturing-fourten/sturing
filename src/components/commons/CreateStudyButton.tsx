"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";
import { add, logoCreate } from "../../../public/icons/icons";

export default function CreateStudyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        varient="circle"
        addStyle="w-[56px] h-[56px] shrink-0 fixed sm:bottom-[30px] sm:right-[32%] bottom-[20px] right-[20px] z-10"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <Image src={add} alt="> 아이콘" width={32} height={32} />
      </Button>
      {isOpen && (
        <Link href="/recruit">
          <button className="fixed bottom-[90px] right-[15px] sm:bottom-[100px] sm:right-[32%] flex items-center w-[156px] h-[42px] gap-[10px] py-[10px] px-[12px] bg-white rounded-[5px] shadow-md hover:opacity-70">
            <Image src={logoCreate} alt="> 아이콘" width={17} height={18} className="w-[17px] h-[18px]" />
            <span className="text-gray-1000 text-[14px] font-medium leading-[22px] tracking-[-0.42px]">
              내 스터디 개설하기
            </span>
          </button>
        </Link>
      )}
    </>
  );
}
