import Image from "next/image";
import { bookmarkWhiteOn, bookmarkWhiteOff, date, location } from "../../../public/icons/icons";
import { TagLight, TagMain } from "./Tags";
import { SAMPLE_PROGRESS_WAY_TYPE } from "@/app/publishing/page";

interface IStudyRecruitCardProps {
  isMini: boolean;
  isScraped: boolean;
}

export function StudyRecruitCard({ isMini, isScraped }: IStudyRecruitCardProps) {
  return (
    <article className={`flex flex-col gap-3 ${isMini ? "w-[168px]" : "w-[185px]"}`}>
      <section
        className={`relative rounded-[8px] bg-[url('https://picsum.photos/200/300')] overflow-hidden  ${
          isMini ? "h-[92px]" : "h-[100px]"
        }`}>
        <Image
          className="absolute right-[8px] top-[8px] cursor-pointer"
          src={isScraped ? bookmarkWhiteOn : bookmarkWhiteOff}
          alt="bookmark icon"
        />
        <p className="absolute bottom-0 w-full py-[3px] bg-black/[.8] text-[12px] text-semibold text-center tracking-[-0.36px] text-white">
          {"매주 목 오후 8:00"}
        </p>
      </section>
      <section>
        <div className="flex gap-1 mb-1">
          <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.mix}</TagMain>
          <TagLight>{"디자인"}</TagLight>
        </div>
        <p className="mb-3 text-4 font-semibold tracking-[-0.32px] text-black loading">
          {"기획안 작성 노하우 강의 들을 취준생 구해요!"}
        </p>
        <div className="flex items-center text-[12px] font-medium tracking-[-0.36px] text-gray-600">
          <Image className="mr-[2px]" src={date} alt="date icon" width={18} height={18} />
          <span>{"date"}</span>
          <span className="w-[1px] h-3 mx-2 bg-gray-400"></span>
          <Image className="mr-[2px]" src={location} alt="location icon" width={18} height={18} />
          <span>{"location"}</span>
        </div>
        <hr className="my-[8px] bg-gray-300" />
        <p className="text-[12px] font-medium tracking-[-0.36px] text-gray-700">{"모집 중 1/4"}</p>
      </section>
    </article>
  );
}
