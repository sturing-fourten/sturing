import { TUpcomingMeetingItem } from "@/utils/generateMeetingList";
import { TagLight } from "../tag/TagLight";
import { TagMain } from "../tag/TagMain";
import { getDayTimeByDate } from "@/utils/getDayTimeByDate";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { getDDayByDate } from "@/utils/getDDayByDate";

interface IStudyUpcomingCardProps {
  meeting: TUpcomingMeetingItem;
  className?: string;
}

export default function StudyUpcomingCard(props: IStudyUpcomingCardProps) {
  const {
    meeting: { title, where, date },
    className,
  } = props;

  const DayTime = getDayTimeByDate(new Date(date));

  return (
    <article className={`py-6 px-5 rounded-lg border border-gray-300 ${className}`}>
      <div className="flex items-center gap-1 mb-3">
        <TagMain>{getDDayByDate(date)}</TagMain>
        <TagLight>{format(new Date(date), "M월 d일", { locale: ko })}</TagLight>
      </div>
      <p className="my-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <div className="flex items-center gap-2 p-2 border rounded-[3px] bg-gray-100 text-gray-700 text-[12px] font-semibold tracking-[-0.36px]">
        <span>{where}</span>
        <span className="w-[1px] h-3 bg-gray-400"></span>
        <span>
          {DayTime[0]} {DayTime[1]}
        </span>
      </div>
    </article>
  );
}
