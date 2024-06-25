"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

import SideBar from "./SideBar";
import useToggle from "@/hooks/useToggle";

export default function Gnb() {
  const [loginState, setLoginState] = useState(false);
  const [sideBar, setSideBar, handleSideBar] = useToggle(false);

  return (
    <div className="sticky top-0 bg-white w-full h-[54px] flex justify-between items-center px-4 border-b border-gray-300">
      <div className="flex justify-center items-center gap-2">
        <button onClick={handleSideBar}>
          <Image src="icons/menu.svg" alt="menu 아이콘" width={24} height={24} />
        </button>
        <Link href="/">
          <Image src="icons/textlogo.svg" alt="로고 아이콘" width={78} height={24} />
        </Link>
      </div>
      {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
      {loginState ? (
        <div className="flex justify-center items-center gap-3">
          <button>
            <Image src="icons/alarm.svg" alt="알림 아이콘" width={24} height={24} />
          </button>
          <Link href="">
            <Image src="icons/mypage.svg" alt="마이페이지 아이콘" width={24} height={24} />
          </Link>
        </div>
      ) : (
        <div>
          <Button
            type="ghost"
            style="h-[34px] w-[71px] border-main-500 text-main-500 rounded-[5px] font-medium text-[12px]">
            간편로그인
          </Button>
        </div>
      )}
    </div>
  );
}
