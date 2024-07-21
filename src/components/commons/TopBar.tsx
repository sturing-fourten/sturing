import { ICONS, BOOKMARK } from "@/constant/icons";
import GoBackButton from "./GoBackButton";
import Link from "next/link";
import SaveButton from "./SaveButton";
import ShareButton from "./ShareButton";

export type TopBarVariant = "share" | "chat" | "back" | "save" | "edit";

interface TopBarProps {
  variant: TopBarVariant;
  showMore?: boolean;
  isWhite?: boolean;
  children?: React.ReactNode;
  showBookmark?: boolean;
  isBackToHome?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
}

const { message } = ICONS;

export default function TopBar({
  variant,
  children,
  isWhite = false,
  showMore,
  showBookmark,
  onCancel,
  onSave,
  isBackToHome = false,
}: TopBarProps) {
  return (
    <div className="w-full h-[54px] flex justify-between items-center px-4">
      {(variant === "share" || variant === "chat" || variant === "back" || variant === "edit") && (
        <GoBackButton isBackToHome={isBackToHome} isWhite={isWhite} />
      )}
      {variant === "share" && <ShareButton showMore={showMore} isWhite={isWhite} />}
      {variant === "chat" && (
        <>
          <span className={`text-[18px] font-semibold tracking-[-0.36px] leading-[27px] ${showBookmark && "ml-8"}`}>
            {children}
          </span>
          <div className="flex justify-center items-center gap-3">
            <Link href={""}>
              <button>
                <img src={message.src} alt={message.alt} width={24} height={24} />
              </button>
            </Link>
            {showBookmark && (
              <Link href={"/mypage/scrap"}>
                <button>
                  <img src={BOOKMARK.grayOff.src} alt={BOOKMARK.grayOff.alt} width={24} height={24} />
                </button>
              </Link>
            )}
          </div>
        </>
      )}
      {variant === "back" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px] mr-6">{children}</span>
          <span></span>
        </>
      )}
      {variant === "save" && onCancel && onSave && <SaveButton onCancel={onCancel} onSave={onSave} />}
      {variant === "edit" && (
        <>
          <span className="text-[18px] font-semibold tracking-[-0.36px] leading-[27px]">{children}</span>
          <button type="submit" className="text-gray-600 text-[14px] tracking-[-0.42px] leading-[22px]">
            완료
          </button>
        </>
      )}
    </div>
  );
}
