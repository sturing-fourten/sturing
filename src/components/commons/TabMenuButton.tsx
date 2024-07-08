"use client";

interface ITabMenuLinkUnderlinedProps {
  onClick: () => void;
  isSelected: boolean;
  title: string;
  isUnderlined?: boolean;
  isFilterTab?: boolean;
}

export default function TabMenuButton({
  onClick,
  title,
  isSelected,
  isUnderlined,
  isFilterTab,
}: ITabMenuLinkUnderlinedProps) {
  const baseClasses = "w-full flex justify-center items-center gap-1 font-medium leading-snug tracking-[-0.42px]";
  const currentClasses = isSelected ? "text-main-500" : "text-gray-700";
  const currentUnderlineClasses = isSelected && isUnderlined ? "border-b-2 border-main-500 " : "border-transparent";
  const textClasses = isFilterTab ? "text-base py-2" : "text-sm py-3";
  return (
    <button className={`${baseClasses} ${currentClasses} ${currentUnderlineClasses} ${textClasses}`} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
}
