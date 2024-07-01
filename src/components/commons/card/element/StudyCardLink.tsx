import Link from "next/link";

export default function StudyCardLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      className="flex items-center justify-center w-full h-[42px] rounded-[5px] border border-gray-400 bg-white text-gray-1000 text-[14px] font-semibold tracking-[-0.42px]"
      href={href}>
      {children}
    </Link>
  );
}
