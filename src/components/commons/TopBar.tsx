import Image from "next/image";
import Link from "next/link";
import { ICONS, BOOKMARK } from "@/constant/icons";

interface TopBarProps {
  variant: "share" | "chat" | "back" | "save";
  showMore?: boolean;
  children?: React.ReactNode;
}

const { back, share, more, message } = ICONS;

export default function TopBar({ variant, children, showMore = false }: TopBarProps) {
  return (
    <div className="w-full h-[54px] flex justify-between items-center px-4">
      {(variant === "share" || variant === "chat" || variant === "back") && (
        <Link href="">
          <Image src={back.src} alt={back.alt} width={24} height={24} />
        </Link>
      )}
      {variant === "share" && (
        <div className="flex justify-center items-center gap-3">
          <button>
            <Image src={share.src} alt={share.alt} width={24} height={24} />
          </button>
          {showMore && (
            <button>
              <Image src={more.src} alt={more.alt} width={24} height={24} />
            </button>
          )}
        </div>
      )}
      {variant === "chat" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <div className="flex justify-center items-center gap-3">
            <button>
              <Image src={message.src} alt={message.alt} width={24} height={24} />
            </button>
            <button>
              <Image src={BOOKMARK.grayOff.src} alt={BOOKMARK.grayOff.alt} width={24} height={24} />
            </button>
          </div>
        </>
      )}
      {variant === "back" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <span></span>
        </>
      )}
      {variant === "save" && (
        <>
          <button className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">취소</button>
          <button className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">임시저장</button>
        </>
      )}
    </div>
  );
}
