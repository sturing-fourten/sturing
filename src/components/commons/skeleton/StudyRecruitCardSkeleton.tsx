import Image from "next/image";
import { date, location } from "@/../public/icons/icons";

export default function StudyRecruitCardSkeleton({ isMini }: { isMini?: boolean }) {
  return (
    <article className={`flex flex-col gap-3 shrink-0 cursor-pointer ${isMini ? "w-full" : "w-[185px]"} animate-pulse`}>
      <section
        className={`relative rounded-lg bg-gray-300  ${isMini ? "h-[92px] sm:h-[150px]" : "h-[100px]"}`}></section>
      <section>
        <div className="flex gap-1 mb-1">
          <span className="w-[45px] bg-gray-300 h-[22px] px-[6px] border rounded-[3px] text-[12px] leading-[12px]" />
          <span className="w-[60px] bg-gray-300 h-[22px] px-[6px] border rounded-[3px] text-[12px] leading-[12px]" />
        </div>
        <div className="mb-[18px] mt-[7px] w-30 h-[16px] bg-gray-300 rounded-[3px]" />
        <div className="flex items-center text-[12px] font-medium tracking-[-0.36px] text-gray-600">
          <Image className="mr-[2px]" src={date} alt="date icon" width={18} height={18} />
          <div className="bg-gray-300 h-[12px] w-[63px]  rounded-[3px]" />
          <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
          <Image className="mr-[2px]" src={location} alt="location icon" width={18} height={18} />
          <div className="bg-gray-300 h-[12px] w-[63px] rounded-[3px] " />
        </div>
        <hr className="my-[8px] bg-gray-300" />
        <div className="mt-[10px] bg-gray-300 h-[12px] w-[63px]  rounded-[3px]" />
      </section>
    </article>
  );
}
