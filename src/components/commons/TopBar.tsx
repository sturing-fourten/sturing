import Image from "next/image";
import Link from "next/link";
import { ICONS, BOOKMARK } from "@/constant/icons";

interface TopBarProps {
  variant: "share" | "chat" | "back" | "save";
  showMore?: boolean;
  isWhite?: boolean;
  children?: React.ReactNode;
  showBookmark?: boolean;
}

const { back, share, more, message, backWhite, shareWhite, moreWhite } = ICONS;

export default function TopBar({ variant, children, isWhite, showMore, showBookmark }: TopBarProps) {
  const backIcon = isWhite ? backWhite : back;
  const shareIcon = isWhite ? shareWhite : share;
  const moreIcon = isWhite ? moreWhite : more;

  return (
    <div className="w-full h-[54px] flex justify-between items-center px-4">
      {(variant === "share" || variant === "chat" || variant === "back") && (
        <Link href="">
          <Image src={backIcon.src} alt={backIcon.alt} width={24} height={24} />
        </Link>
      )}
      {variant === "share" && (
        <div className="flex justify-center items-center gap-3">
          <button>
            <Image src={shareIcon.src} alt={shareIcon.alt} width={24} height={24} />
          </button>
          {showMore && (
            <button>
              <Image src={moreIcon.src} alt={moreIcon.alt} width={24} height={24} />
            </button>
          )}
        </div>
      )}
      {variant === "chat" && (
        <>
          <span className={`text-[18px] font-semibold tracking-[-0.36px] leading-[27px] ${showBookmark && "ml-8"}`}>
            {children}
          </span>
          <div className="flex justify-center items-center gap-3">
            <button>
              <Image src={message.src} alt={message.alt} width={24} height={24} />
            </button>
            {showBookmark && (
              <button>
                <Image src={BOOKMARK.grayOff.src} alt={BOOKMARK.grayOff.alt} width={24} height={24} />
              </button>
            )}
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
