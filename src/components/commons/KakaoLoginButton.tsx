import Image from "next/image";
import Button from "./Button";
import { kakaoLogo } from "../../../public/icons/icons";

interface GitHubLoginButtonProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  addStyle?: string;
}

export default function KakaoLoginButton({ onMouseEnter, onMouseLeave, addStyle }: GitHubLoginButtonProps) {
  return (
    <Button
      varient="filled"
      addStyle={`w-[275px] h-[46px] py-[12px] px-[14px] bg-[#FEE500] text-[14px] text-white font-semibold rounded-[5px] gap-[10px] ${addStyle}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <Image
        src={kakaoLogo}
        alt="로고 아이콘"
        width={25}
        height={25}
        className="w-[25px] h-[25px] bg-white rounded-[5px]"
      />
      Kakao로 3초 만에 시작하기
    </Button>
  );
}
