import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

interface SideBarProps {
  sideBar: boolean;
  setSideBar: (value: boolean) => void;
}

export default function SideBar({ sideBar, setSideBar }: SideBarProps) {
  const [loginState, setLoginState] = useState(false);

  return (
    <div
      className={`w-[323px] min-h-full flex flex-col gap-[40px] pt-[40px] px-6 pb-56 bg-white fixed sm:absolute top-0 left-0 z-overlay transition-transform duration-500 will-change-transform ease-in-out transform overflow-scroll sm:overflow-visible scrollbar-hide ${
        sideBar ? "translate-x-0" : "-translate-x-full"
      }`}>
      <button
        className="flex justify-end"
        onClick={() => {
          setSideBar(!sideBar);
        }}>
        <Image src="icons/close.svg" alt="닫기 아이콘" width={15} height={15} />
      </button>
      {loginState ? (
        <div className="flex flex-col justify-start gap-[32px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[#0D0D0D] text-[24px] font-semibold leading-[36px]">웅진님</span>
              <span className="text-gray-600 text-[14px] font-normal leading-[22px] tracking-[-0.42px]">
                sturing@kakao.com
              </span>
            </div>
            <Image src="icons/defaultProfileImg.svg" alt="프로필 아이콘" width={60} height={60} />
          </div>
          <button className="flex text-[#0D0D0D] text-[18px] font-medium leading-[24px] tracking-[-0.54px]">
            스터링 프로필
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-start gap-[32px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <Image
              src="icons/textlogo.svg"
              alt="로고 아이콘"
              width={155}
              height={48}
              priority
              className="w-[155px] h-[48px]"
            />
          </div>
          <Button
            type="filled"
            style="w-[275px] h-[46px] py-[12px] px-[14px] bg-gray-1000 text-[14px] text-white font-semibold rounded-[5px] gap-[10px]">
            <Image
              src="/icons/github-logo.svg"
              alt="로고 아이콘"
              width={25}
              height={25}
              className="w-[25px] h-[25px] bg-white rounded-[5px]"
            />
            GitHub로 3초 만에 시작하기
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-[24px] border-t border-gray-300 pt-[40px]">
        <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
          추천
        </button>
        <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
          검색
        </button>
        {loginState && (
          <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
            내 스터디
          </button>
        )}
        <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
          분야
        </button>
      </div>
      <div className="flex flex-col gap-[22px] border-t border-gray-300 pt-[40px]">
        <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
          공지사항
        </button>
        <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
          고객센터
        </button>
        <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">설정</button>
        {loginState && (
          <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
            로그아웃
          </button>
        )}
      </div>
    </div>
  );
}
