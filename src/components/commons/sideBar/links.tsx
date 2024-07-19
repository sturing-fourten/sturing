import { logout } from "@/lib/database/action/login";
import { EditProfileType } from "@/types/editProfile";
import Link from "next/link";

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
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-[22px] border-t border-gray-300 pt-[40px]">
      <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">공지사항</button>
      <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">고객센터</button>
      <button className="flex text-gray-600 text-[18px] font-normal leading-[26px] tracking-[-0.54px]">설정</button>
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
