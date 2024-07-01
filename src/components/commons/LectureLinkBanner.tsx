import Link from "next/link";

interface LectureLinkTag {
  title: string;
  href: string;
}

export default function LectureLinkBanner({ title, href }: LectureLinkTag) {
  return (
    <>
      <div className="w-full bg-main-500 rounded-[5px] px-3 py-[10px] font-light flex items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          <div className="inline-block text-xs text-main-500 text-nowrap bg-main-200 px-[6px] py-[2px] rounded-[3px] leading-[18px] ">
            강의
          </div>
          <p className="text-gray-300 text-[14px] line-clamp-1">{title}</p>
        </div>
        <Link href={href} target="_blank" className="text-gray-400 underline text-sm text-nowrap">
          바로가기
        </Link>
      </div>
    </>
  );
}
