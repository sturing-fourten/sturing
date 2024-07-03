interface OptionalToggle {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

export default function OptionalToggle({ onClick, children, isActive }: OptionalToggle) {
  return (
    <div className="flex gap-[6px] text-neutral-400 text-sm font-normal leading-snug" onClick={onClick}>
      {isActive ? (
        <img src="/icons/toggle-active-icon.svg" alt="토글 활성화" />
      ) : (
        <img src="/icons/toggle-inactive-icon.svg" alt="토글 비활성화" />
      )}
      {children}
    </div>
  );
}
