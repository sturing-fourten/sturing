import { ICONS } from "@/constant/icons";

interface OptionalToggle {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
  numberOfTeamMembers: number | "제한없음";
}

export default function OptionalToggle({ onClick, children, isActive, numberOfTeamMembers }: OptionalToggle) {
  return (
    <div
      className="flex gap-[6px] w-fit text-neutral-400 text-sm font-normal leading-snug cursor-pointer"
      onClick={onClick}>
      {isActive || numberOfTeamMembers === "제한없음" ? (
        <img src={ICONS.toggleCheckBlue.src} alt={ICONS.toggleCheckBlue.alt} />
      ) : (
        <img src={ICONS.toggleCheckGray.src} alt={ICONS.toggleCheckGray.alt} />
      )}
      {children}
    </div>
  );
}
