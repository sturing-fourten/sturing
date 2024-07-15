import { ICONS } from "@/constant/icons";

interface OptionalToggle {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

export default function OptionalToggle({ onClick, children, isActive }: OptionalToggle) {
  return (
    <div
      className="flex gap-[6px] w-fit text-neutral-400 text-sm font-normal leading-snug cursor-pointer"
      onClick={onClick}>
      {isActive ? (
        <img src={ICONS.toggleCheckBlue.src} alt={ICONS.toggleCheckBlue.alt} />
      ) : (
        <img src={ICONS.toggleCheckGray.src} alt={ICONS.toggleCheckGray.alt} />
      )}
      {children}
    </div>
  );
}
