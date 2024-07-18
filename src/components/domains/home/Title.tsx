import { ICONS } from "@/constant/icons";

interface TitleProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Title({ children, onClick }: TitleProps) {
  return (
    <>
      <div className="flex justify-between full pr-[16px]">
        <span className="text-gray-1000 text-[18px] text-center font-semibold tracking-[-0.54px] leading-[24px]">
          {children}
        </span>
        <button onClick={onClick}>
          <img src={ICONS.rightArrowBlack.src} alt="> 아이콘" width={24} height={24} />
        </button>
      </div>
    </>
  );
}
