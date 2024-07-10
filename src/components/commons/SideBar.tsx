import { useSession } from "next-auth/react";
import { ICONS, LOGO } from "@/constant/icons";
import Link from "next/link";
import GitHubLoginButton from "./GitHubLoginButton";
import { githubLogin } from "@/lib/database/action/login";

interface SideBarProps {
  sideBar: boolean;
  setSideBar: (value: boolean) => void;
}

export default function SideBar({ sideBar, setSideBar }: SideBarProps) {
  const { data: session } = useSession();

  return (
    <div
      className={`w-[323px] h-screen flex flex-col gap-[40px] pt-[40px] px-6 pb-56 bg-white fixed sm:absolute top-0 left-0 z-overlay transition-transform duration-500 will-change-transform ease-in-out transform overflow-scroll sm:overflow-visible scrollbar-hide ${
        sideBar ? "translate-x-0" : "-translate-x-full"
      }`}>
      <button
        className="flex justify-end"
        onClick={() => {
          setSideBar(!sideBar);
        }}>
        <img src={ICONS.close.src} alt={ICONS.close.alt} width={15} height={15} />
      </button>
      {session ? (
        <div className="flex flex-col gap-[32px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[#0D0D0D] text-[24px] font-semibold leading-[36px]">웅진님</span>
              <span className="text-gray-600 text-[14px] font-normal leading-[22px] tracking-[-0.42px]">
                sturing@kakao.com
              </span>
            </div>
            <img src={ICONS.defaultProfileImg.src} alt={ICONS.defaultProfileImg.alt} width={60} height={60} />
          </div>
          <Link href="/mypage">
            <button className="flex text-[#0D0D0D] text-[18px] font-medium leading-[24px] tracking-[-0.54px]">
              스터링 프로필
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <img src={LOGO.logoText.src} alt={LOGO.logoText.alt} width={155} height={48} />
          </div>
          <form action={githubLogin}>
            <GitHubLoginButton />
          </form>
        </div>
      )}
      <div className="flex flex-col gap-[24px] border-t border-gray-300 pt-[40px]">
        <Link href="/">
          <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
            추천
          </button>
        </Link>
        <Link href="/search">
          <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
            검색
          </button>
        </Link>
        {session && (
          <Link href="/mystudy">
            <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
              내 스터디
            </button>
          </Link>
        )}
        <Link href="/">
          <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">
            분야
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[22px] border-t border-gray-300 pt-[40px]">
        <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
          공지사항
        </button>
        <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
          고객센터
        </button>
        <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">설정</button>
        {session && (
          <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
            로그아웃
          </button>
        )}
      </div>
    </div>
  );
}
