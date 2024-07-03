import { Dispatch, ReactNode, SetStateAction } from "react";
import Link from "next/link";
import { ICONS } from "@/constant/icons";

interface TitleProps {
  children: ReactNode;
  addStyle?: string;
  openToggle?: () => void;
  isOpen?: boolean;
}

export default function Title({ children, addStyle, openToggle, isOpen }: TitleProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className={`text-gray-1000 font-semibold text-lg tracking-[-0.54px] ${addStyle}`}>{children}</h1>
        {openToggle && (
          <button onClick={openToggle}>
            <img
              src={ICONS.rightArrowBlack.src}
              alt={ICONS.rightArrowBlack.alt}
              className={`origin-center ${isOpen ? "rotate-[270deg]" : "rotate-90"}`}
            />
          </button>
        )}
      </div>
    </>
  );
}
