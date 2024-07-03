import { bookmarkGrayOn, bookmarkGrayOff } from "@/../public/icons/icons";
import Image from "next/image";
import { TagMain } from "../tag/TagMain";
import { TagLight } from "../tag/TagLight";
import { TagRate } from "../tag/TagRate";

interface LectureCardProps {
  variant: "card" | "info";
  isScraped?: boolean;
}

export default function LectureCard({ isScraped, variant }: LectureCardProps) {
  const isCard = variant === "card";
  return (
    <article className={isCard ? "py-[13px] px-[17px] border border-gray-300 rounded-[5px] bg-white" : ""}>
      <section className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <TagMain>{"온라인"}</TagMain>
          <TagLight>{"디자인"}</TagLight>
          <TagLight>{"유데미"}</TagLight>
          <TagRate>{"4.5"}</TagRate>
        </div>
        {isCard && (
          <Image src={isScraped ? bookmarkGrayOn : bookmarkGrayOff} alt="bookmark icon" width={24} height={24} />
        )}
      </section>
      <p className="mb-1 text-[14px] font-semibold tracking-[-0.28px] text-black">
        {"UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z"}
      </p>
      <p className="text-[12px] font-medium tracking-[-0.36px] text-gray-600">{"유데미디자인랩"}</p>
    </article>
  );
}
