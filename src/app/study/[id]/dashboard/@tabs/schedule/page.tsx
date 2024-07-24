import CalendarCard from "@/components/domains/dashboard/CalendarCard";
import MeetingCard from "@/components/domains/dashboard/MeetingCard";
import { fetchStudyMeetingAction } from "@/lib/database/action/dashboard";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import { eachDayOfInterval, getDay } from "date-fns";

interface IScheduleTabProps {
  params: {
    id: string;
  };
}
type TWeekdayMap = {
  [key: string]: number;
};

// 요일을 한글에서 숫자로 매핑하는 맵
const weekdayMap: TWeekdayMap = {
  월요일: 1,
  화요일: 2,
  수요일: 3,
  목요일: 4,
  금요일: 5,
  토요일: 6,
  일요일: 0,
};

function getMeetingListByWeekday(startDate: Date, endDate: Date, weekday: number) {
  const allDates = eachDayOfInterval({ start: startDate, end: endDate });

  const datesByWeekday = allDates.filter((date) => getDay(date) === weekday);

  return datesByWeekday;
}

export default async function ScheduleTab(props: IScheduleTabProps) {
  const studyId = props.params.id;

  const { meeting, startDate, endDate, title } = await fetchStudyMeetingAction(studyId);

  const weekday = weekdayMap[meeting.schedule.day];
  const meetingList = getMeetingListByWeekday(startDate, endDate, weekday);

  const studyMeetingInfo = {
    title,
    where: meeting.format === "ONLINE" ? meeting.platform : meeting.location,
  };

  return (
    <section className="flex flex-col gap-3 pt-6 py-10 px-4">
      <CalendarCard meetingList={meetingList} />
      <MeetingCard meetingList={meetingList} studyMeetingInfo={studyMeetingInfo} />
    </section>
  );
}
