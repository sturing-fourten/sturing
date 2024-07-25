import { getDateRange } from "@/utils/getDateRange";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { TMyStudy } from "@/types/study";
import Link from "next/link";

export default function StudyHistoryCard({ study }: { study: TMyStudy }) {
  const {
    _id,
    title,
    startDate,
    endDate,
    meeting: { format, platform, location },
  } = study;

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";

  return (
    <>
      <article className="flex flex-col py-6 px-5  rounded-lg bg-gray-100">
        <StudyMeetingInfo format={format === "ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
        <p className="mt-2  text-[#212121] text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      </article>
    </>
  );
}
