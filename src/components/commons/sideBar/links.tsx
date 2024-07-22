import { logout } from "@/lib/database/action/login";
import {
  useLevelsStore,
  useLocationsStore,
  useMatchingStore,
  useMoodsStore,
  useProgressWayStore,
} from "@/store/matchingStore";
import { useUserStore } from "@/store/userStore";
import { EditProfileType } from "@/types/editProfile";
import Link from "next/link";
import { showToast } from "../Toast";

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href}>
    <button className="flex text-gray-1000 text-[18px] font-semibold leading-[24px] tracking-[-0.54px]">{text}</button>
  </Link>
);

export const NavigationLinks = ({ user }: { user: EditProfileType | null }) => (
  <div className="flex flex-col gap-[24px] border-t border-gray-300 pt-[40px]">
    <NavLink href="/" text="추천" />
    <NavLink href="/search" text="검색" />
    {user && <NavLink href="/mystudy" text="내 스터디" />}
    <NavLink href="/" text="분야" />
  </div>
);

export const FooterLinks = ({ user }: { user: EditProfileType | null }) => {
  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await logout();

    useUserStore.getState().reset();
    useLevelsStore.getState().reset();
    useProgressWayStore.getState().reset();
    useLocationsStore.getState().reset();
    useMoodsStore.getState().reset();
    useMatchingStore.getState().reset();

    showToast("성공적으로 로그아웃되었습니다.");

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-[22px] border-t border-gray-300 pt-[40px]">
      <button type="button" className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
        공지사항
      </button>
      <button type="button" className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
        고객센터
      </button>
      <button type="button" className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
        설정
      </button>
      {user && (
        <form onSubmit={handleLogout}>
          <button
            type="submit"
            className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">
            로그아웃
          </button>
        </form>
      )}
    </div>
  );
};
