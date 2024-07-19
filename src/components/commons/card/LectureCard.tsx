import { bookmarkGrayOn, bookmarkGrayOff } from "@/../public/icons/icons";
import Image from "next/image";
import { TagMain } from "../tag/TagMain";
import { TagLight } from "../tag/TagLight";
import { TagRate } from "../tag/TagRate";
import { CATEGORY } from "@/constant/category";
import { TLectureInfoData, TLectureListCardData } from "@/types/api/lecture";

interface LectureCardProps {
  variant: "card" | "info";
  isScraped?: boolean;
  lecture: TLectureInfoData | TLectureListCardData;
}

export default function LectureCard({ variant, lecture, isScraped }: LectureCardProps) {
  const isCard = variant === "card";
  const { online, category, platform, rating, title, instructor } = lecture;

  return (
    <article className={isCard ? "py-[13px] px-[17px] border border-gray-300 rounded-[5px] bg-white" : ""}>
      <section className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <TagMain>{online ? "온라인" : "오프라인"}</TagMain>
          <TagLight>{CATEGORY(category)}</TagLight>
          <TagLight>{platform}</TagLight>
          <TagRate>{rating}</TagRate>
        </div>
        {isCard && (
          <button>
            <Image src={isScraped ? bookmarkGrayOn : bookmarkGrayOff} alt="bookmark icon" width={24} height={24} />
          </button>
        )}
      </section>
      <p className="mb-1 text-[14px] font-semibold tracking-[-0.28px] text-black">{title}</p>
      <p className="text-[12px] font-medium tracking-[-0.36px] text-gray-600">{instructor}</p>
    </article>
  );
}
