import { ReactNode } from "react";

interface StudyInfoCardProps {
  children: ReactNode;
  addStyle: string;
}

export default function StudyDetailCardLayout({ children, addStyle }: StudyInfoCardProps) {
  return (
    <>
      <section className={`px-5 py-6 border border-gray-300 rounded-[5px] bg-white ${addStyle}`}>{children}</section>
    </>
  );
}
