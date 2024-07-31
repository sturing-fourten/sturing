import GoBackButton from "./GoBackButton";
import SaveButton from "./SaveButton";
import ShareButton from "./ShareButton";

export type TopBarVariant = "share" | "back" | "save" | "edit";

interface TopBarProps {
  variant: TopBarVariant;
  showMore?: boolean;
  isWhite?: boolean;
  children?: React.ReactNode;
  showBookmark?: boolean;
  isBackToHome?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
  onClick?: () => void;
  isMine?: boolean;
  shareInfo?: {
    title?: string;
    shareThumbnail?: string;
    type?: "스터디" | "강의";
  };
}

export default function TopBar({
  variant,
  children,
  isWhite = false,
  showMore,
  onCancel,
  onSave,
  onClick,
  isMine,
  isBackToHome = false,
  shareInfo,
}: TopBarProps) {
  return (
    <div className="w-full h-[54px] flex justify-between items-center px-4">
      {(variant === "share" || variant === "back" || variant === "edit") && (
        <GoBackButton isBackToHome={isBackToHome} isWhite={isWhite} />
      )}
      {variant === "share" && (
        <ShareButton
          showMore={showMore}
          isWhite={isWhite}
          onPopoverClick={onClick}
          isMine={isMine ?? false}
          shareInfo={shareInfo}
        />
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
