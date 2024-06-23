import { SAMPLE_PROGRESS_WAY_TYPE } from "@/app/publishing/page";
import { TagLight, TagMain } from "../Tags";

export default function StudyUpcomingCard() {
  return (
    <article className="py-6 px-5">
      <div className="flex items-center gap-1 mb-3">
        <TagMain>{"D-3"}</TagMain>
        <TagLight>{"6월 7일"}</TagLight>
      </div>
      <p className="my-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">
        {"UXUI 디자이너 본질 강화 피그마 스터디"}
      </p>
      <div className="flex items-center gap-2 p-2 border rounded-[3px] bg-gray-100 text-gray-700 text-[12px] font-semibold tracking-[-0.36px]">
        <span>{"스타벅스 종로점"}</span>
        <span className="w-[1px] h-3 bg-gray-400"></span>
        <span>
          {"06.07(토)"} {"오후 8:00 - 9:00"}
        </span>
      </div>
    </article>
  );
}
