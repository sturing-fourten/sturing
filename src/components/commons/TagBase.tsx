export interface ITagProps {
  children: React.ReactNode;
  className?: string;
}

export default function TagBase({ children, className }: ITagProps) {
  return (
    <span
      className={`inline-flex items-center justify-between gap-[2px] h-[22px] px-[6px] border rounded-[3px] text-[12px] leading-[12px] ${
        className ?? "border-main-500 bg-main-100 text-main-500"
      }`}>
      {children}
    </span>
  );
}
