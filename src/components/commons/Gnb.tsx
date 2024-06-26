"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import SideBar from "./SideBar";
import useToggle from "@/hooks/useToggle";
import useOpenToggle from "@/hooks/useOpenToggle";
import LoginModal from "../modal/LoginModal";
import { useSession } from "next-auth/react";
import { alarm, logoText, menu } from "../../../public/icons/icons";

export default function Gnb() {
  const [sideBar, setSideBar, handleSideBar] = useToggle(false);
  const { isOpen, openToggle } = useOpenToggle();
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 bg-white w-full h-[54px] z-[1100] flex justify-between items-center px-4 border-b border-gray-300">
      <div className="flex justify-center items-center gap-2">
        <button onClick={handleSideBar}>
          <Image src={menu} alt="menu 아이콘" width={24} height={24} />
        </button>
        <Link href="/">
          <Image src={logoText} alt="로고 아이콘" width={78} height={24} priority />
        </Link>
      </div>
      {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
      {session ? (
        <div className="flex justify-center items-center gap-3">
          <button>
            <Image src={alarm} alt="알림 아이콘" width={24} height={24} />
          </button>
          <Link href="">
            <Image src="icons/mypage.svg" alt="마이페이지 아이콘" width={24} height={24} />
          </Link>
        </div>
      ) : (
        <div>
          <Button
            varient="ghost"
            className="h-[34px] w-[71px] border border-main-500 text-main-500 rounded-[5px] font-medium text-[12px]"
            onClick={openToggle}>
            간편로그인
          </Button>
          {isOpen && <LoginModal onClose={openToggle} />}
        </div>
      )}
    </div>
  );
}
