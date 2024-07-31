"use client";
import { githubLogin, kakaoLogin } from "@/lib/database/action/login";
import { useToggle } from "usehooks-ts";
import GitHubLoginButton from "../commons/GitHubLoginButton";
import KakaoLoginButton from "../commons/KakaoLoginButton";
import { LOGO } from "@/constant/icons";

export default function Login() {
  const [isHovered, hoverToggle] = useToggle(false);
  return (
    <div className="w-80 h-[340px] px-5 py-9 bg-white rounded-lg flex-col justify-center items-center gap-9 inline-flex">
      <div className="w-72 h-full flex-col justify-start items-end gap-8 inline-flex relative">
        <div className="w-72 h-20 flex-col justify-start items-center gap-1 inline-flex">
          <img className="w-40 h-12 relative" src={LOGO.logoText.src} alt="textlogo" />
          <div className="text-neutral-600 text-sm font-medium font-['Pretendard Variable'] leading-snug">
            {"사람과 스터디, 강의를 "}
            <span className="text-zinc-800 text-sm font-semibold font-['Pretendard Variable'] leading-snug">
              {"한 고리로"}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full">
          {isHovered && (
            <div className="w-[186px] absolute bottom-[110px] left-1/2 transform -translate-x-1/2">
              <img src="/icons/login-message.svg" alt="로그인 메세지" />
            </div>
          )}
          <form action={githubLogin}>
            <GitHubLoginButton
              addStyle="absolute bottom-[54px] left-1/2 transform -translate-x-1/2"
              onMouseEnter={hoverToggle}
              onMouseLeave={hoverToggle}
            />
          </form>
          <form action={kakaoLogin}>
            <KakaoLoginButton
              addStyle="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              onMouseEnter={hoverToggle}
              onMouseLeave={hoverToggle}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
