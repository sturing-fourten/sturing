import Image from "next/image";
import { star } from "../../../public/icons/icons";

interface ITagProps {
  children: React.ReactNode;
  className?: string;
}

export function TagBase({ children, className }: ITagProps) {
  return (
    <span
      className={`inline-flex items-center justify-between gap-[2px] h-[22px] px-[6px] border rounded-[3px] text-[12px] leading-[12px] border-main-500 bg-main-100 text-main-500 ${className}`}>
      {children}
    </span>
  );
}

export function TagLight({ children }: ITagProps) {
  return <TagBase className="border-main-500 bg-main-100 text-main-500">{children}</TagBase>;
}

export function TagMain({ children }: ITagProps) {
  return <TagBase className="border-main-500 bg-main-500 text-white">{children}</TagBase>;
}

export function TagRate({ children }: ITagProps) {
  return (
    <TagLight>
      <Image src={star} width={12} height={12} alt="rate icon" />
      {children}
    </TagLight>
  );
}
