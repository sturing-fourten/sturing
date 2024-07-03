import { Dispatch, ReactNode, SetStateAction } from "react";
import Link from "next/link";
import { ICONS } from "@/constant/icons";

interface TitleProps {
  children: ReactNode;
  addStyle?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function Title({ children, addStyle, setIsOpen }: TitleProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className={`text-gray-1000 font-semibold text-lg tracking-[-0.54px] ${addStyle}`}>{children}</h1>
        {setIsOpen && (
          <button onClick={() => setIsOpen}>
            <img src={ICONS.rightArrowBlack.src} alt={ICONS.rightArrowBlack.alt} className="origin-center rotate-90" />
          </button>
        )}
      </div>
    </>
  );
}
