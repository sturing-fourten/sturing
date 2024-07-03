import { ICONS } from "@/constant/icons";

interface FavoriteListButtonProps {
  onClick: () => void;
}

export default function FavoriteListButton({ onClick }: FavoriteListButtonProps) {
  return (
    <button onClick={onClick}>
      <div className="flex items-center">
        <div className="text-neutral-400 text-xs font-normal leading-none">찜 목록에서 선택하기</div>
        <img className="w-5 h-5" src={ICONS.rightArrowDarkGray.src} alt={ICONS.rightArrowDarkGray.alt} />
      </div>
    </button>
  );
}
