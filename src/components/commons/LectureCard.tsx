import { SAMPLE_PROGRESS_WAY_TYPE } from "@/app/publishing/page";
import { TagLight, TagMain, TagRate } from "./Tags";
import { bookmarkGrayOn, bookmarkGrayOff } from "../../../public/icons/icons";
import Image from "next/image";

export default function LectureCard({ isScraped }: { isScraped: boolean }) {
  return (
    <article className="py-[13px] px-[17px] border border-gray-300 rounded-[5px] bg-white">
      <section className="flex justify-between">
        <div className="flex items-center gap-1 mb-3">
          <TagMain>{SAMPLE_PROGRESS_WAY_TYPE.online}</TagMain>
          <TagLight>{"디자인"}</TagLight>
          <TagLight>{"유데미"}</TagLight>
          <TagRate>{"4.5"}</TagRate>
        </div>
        <Image src={isScraped ? bookmarkGrayOn : bookmarkGrayOff} alt="bookmark icon" width={24} height={24} />
      </section>
      <p className="mb-1 text-[14px] font-semibold tracking-[-0.28px] text-black">
        {"UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z"}
      </p>
      <p className="text-[12px] font-semibold tracking-[-0.36px] text-gray-600">{"유데미디자인랩"}</p>
    </article>
  );
}
