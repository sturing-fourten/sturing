import { ReactNode } from "react";

export default function TagsLayout({ children, addStyle }: { children: ReactNode; addStyle?: string }) {
  return (
    <>
      <div className={`flex flex-wrap gap-[6px] ${addStyle}`}>{children}</div>
    </>
  );
}
