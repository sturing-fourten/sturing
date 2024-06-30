import { ReactNode } from "react";

export default function Title({ children, addStyle }: { children: ReactNode; addStyle?: string }) {
  return (
    <>
      <h1 className={`text-gray-1000 font-semibold text-base tracking-[-0.32px] ${addStyle}`}>{children}</h1>
    </>
  );
}
