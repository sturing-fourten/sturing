import Image from "next/image";
import Link from "next/link";
import { back, bookmarkGrayOff, message, share } from "../../../public/icons/icons";

interface TopBarProps {
  varient: "share" | "chat" | "back" | "save";
  children?: React.ReactNode;
}

export default function TopBar({ varient, children, ...props }: TopBarProps) {
  return (
    <div className="w-[375px] h-[54px] flex justify-between items-center px-4">
      {(varient === "share" || varient === "chat" || varient === "back") && (
        <Link href="">
          <Image src={back} alt="뒤로가기 아이콘" width={24} height={24} />
        </Link>
      )}
      {varient === "share" && (
        <div className="flex justify-center items-center gap-3">
          <button>
            <Image src={share} alt="menu 아이콘" width={24} height={24} />
          </button>
          <button>
            <Image src="icons/more.svg" alt="더보기 아이콘" width={24} height={24} />
          </button>
        </div>
      )}
      {varient === "chat" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <div className="flex justify-center items-center gap-3">
            <button>
              <Image src={message} alt="챗팅 아이콘" width={24} height={24} />
            </button>
            <button>
              <Image src={bookmarkGrayOff} alt="북마크 아이콘" width={24} height={24} />
            </button>
          </div>
        </>
      )}
      {varient === "back" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <span></span>
        </>
      )}
      {varient === "save" && (
        <>
          <button className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">취소</button>
          <button className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">임시저장</button>
        </>
      )}
    </div>
  );
}
