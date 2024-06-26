"use client";

interface ITabMenuLinkUnderlinedProps {
  onClick: () => void;
  isCurrent: boolean;
  title: string;
}

export default function TabMenuButtonUnderlined(props: ITabMenuLinkUnderlinedProps) {
  const { onClick, title, isCurrent } = props;
  return (
    <button
      className={`w-full flex justify-center items-center gap-1 py-3 border-b-2 text-sm font-medium leading-snug tracking-[-0.42px] ${
        isCurrent ? "text-main-500 border-main-500" : "border-transparent"
      }`}
      onClick={onClick}>
      <span>{title}</span>
    </button>
  );
}
