"use client";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { useDashboardScheduleStore } from "@/store/dahboardScheduleStore";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { TMeetingItem } from "@/utils/generateMeetingList";
import { getDayTimeByDate } from "@/utils/getDayTimeByDate";
import { getMeetingDayCount } from "@/utils/getIsMeetingDay";
import NoList from "../mystudy/NoList";

interface IMeetingCardProps {
  meetingList: Date[];
  studyMeetingInfo: Omit<TMeetingItem, "date">;
}
export default function MeetingCard({ meetingList, studyMeetingInfo }: IMeetingCardProps) {
  const { currentDate } = useDashboardScheduleStore();

  if (!currentDate) return <></>;

  const { where } = studyMeetingInfo;
  const DayTime = getDayTimeByDate(currentDate);
  const meetingDayCount = getMeetingDayCount(meetingList, currentDate);
  const isMeetingDay = meetingDayCount > -1;
  const title = format(currentDate, "MM.dd (EEE)", { locale: ko });

  return (
    <DashboardCardLayout>
      <DashboardCardTitle title={title} />

      {isMeetingDay ? (
        <>
          <p className="mb-3 text-gray-1000 text-base font-semibold tracking-[-0.32px]">
            {meetingDayCount + 1}회차 정기 모임
          </p>
          <div className="flex items-center gap-2 w-full p-2 border rounded-[3px] bg-gray-100 text-gray-700 text-[12px] font-semibold tracking-[-0.36px]">
            <span>{where}</span>
            <span className="w-[1px] h-3 bg-gray-400"></span>
            <span>
              {DayTime[0]} {DayTime[1]}
            </span>
          </div>
        </>
      ) : (
        <NoList>스터디 미팅이 없는 날이에요.</NoList>
      )}
    </DashboardCardLayout>
  );
}
