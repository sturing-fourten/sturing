"use client";

import useOpenToggle from "@/hooks/useOpenToggle";
import { more, moreWhite, share, shareWhite } from "../../../public/icons/icons";
import ShareModal from "../modal/ShareModal";

interface IShareButtonProps {
  showMore?: boolean;
  isWhite: boolean;
}
export default function ShareButton({ showMore, isWhite }: IShareButtonProps) {
  const shareIcon = isWhite ? shareWhite : share;
  const moreIcon = isWhite ? moreWhite : more;
  const { isOpen, setIsOpen, openToggle } = useOpenToggle();
  return (
    <div className="flex justify-center items-center gap-3">
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <img src={shareIcon.src} alt={shareIcon.alt} width={24} height={24} />
      </button>
      {isOpen && <ShareModal onClose={openToggle} />}
      {showMore && (
        <button type="button">
          <img src={moreIcon.src} alt={moreIcon.alt} width={24} height={24} />
        </button>
      )}
    </div>
  );
}
