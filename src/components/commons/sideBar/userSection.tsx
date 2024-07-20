import { EditProfileType } from "@/types/editProfile";
import Avatar from "../Avatar";
import Link from "next/link";
import { LOGO } from "@/constant/icons";
import GitHubLoginButton from "../GitHubLoginButton";
import { githubLogin, kakaoLogin } from "@/lib/database/action/login";
import KakaoLoginButton from "../KakaoLoginButton";

const UserSection = ({ user }: { user: EditProfileType }) =>
  user && (
    <div className="flex flex-col justify-start gap-[32px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[#0D0D0D] text-[24px] font-semibold leading-[36px]">{user.nickname}님</span>
          <span className="text-gray-600 text-[14px] font-normal leading-[22px] tracking-[-0.42px]">{user.email}</span>
        </div>
        <Avatar profileImageUrl={user.profileImageUrl} width={60} height={60} />
      </div>
      <Link href="/mypage">
        <button className="flex text-[#0D0D0D] text-[18px] font-medium leading-[24px] tracking-[-0.54px]">
          스터링 프로필
        </button>
      </Link>
    </div>
  );

const GuestSection = () => (
  <div className="flex flex-col gap-[32px]">
    <div className="flex flex-col items-center justify-center gap-[5px]">
      <img src={LOGO.logoText.src} alt={LOGO.logoText.alt} width={155} height={48} />
    </div>
    <div className="flex flex-col gap-2">
      <form action={githubLogin}>
        <GitHubLoginButton />
      </form>
      <form action={kakaoLogin}>
        <KakaoLoginButton />
      </form>
    </div>
  </div>
);

export { UserSection, GuestSection };
