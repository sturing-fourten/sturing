"use client";

import { Dispatch, SetStateAction } from "react";
import { DashboardCalendar } from "./DashboardCalendar";
import DashboardCardLayout from "./DashboardCardLayout";
import { useDashboardScheduleStore } from "@/store/dashboardScheduleStore";

type setCurrentDate = Dispatch<SetStateAction<Date | undefined>>;

interface ICalendarCardProps {
  dateList: Date[];
}

export default function CalendarCard({ dateList }: ICalendarCardProps) {
  const { currentDate, setCurrentDate } = useDashboardScheduleStore();

  return (
    <DashboardCardLayout layoutClassName="flex justify-center">
      <DashboardCalendar
        mode="single"
        selected={currentDate}
        onSelect={setCurrentDate as setCurrentDate}
        dateList={dateList}
      />
    </DashboardCardLayout>
  );
}
