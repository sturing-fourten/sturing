import { TStudy } from "@/types/study";
import { StudyDetailInfo } from "./element/StudyDetailInfo";
import StudyMeetingInfo from "./element/StudyMeetingInfo";
import { getDateRange } from "@/utils/getDateRange";

interface IStudyOnGoingCardProps {
  isStarted: boolean;
  study: TStudy;
}

export default function StudyOnGoingCard(props: IStudyOnGoingCardProps) {
  const {
    isStarted,
    study: {
      title,
      startDate,
      endDate,
      meeting: {
        schedule: { day },
        format,
        platform,
        location,
      },
      task,
      teamMembersId,
    },
  } = props;

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";
  const meetingDay = day === "추후협의" ? day : `매주 ${day}`;
  return (
    <article
      className={`py-6 px-5 border border-gray-300 bg-white rounded-lg ${
        isStarted ? "bg-gradient-to-br from-[#D9E3FF]/70 to-[#FFE4E0]/70" : "bg-white"
      }`}>
      <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
      <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
      <hr className="my-4" />
      <StudyDetailInfo meetingDay={meetingDay} task={"과제 없음"} memberCount={3} />
    </article>
  );
}
