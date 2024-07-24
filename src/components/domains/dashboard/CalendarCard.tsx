"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { DashboardCalendar } from "./DashboardCalendar";
import DashboardCardLayout from "./DashboardCardLayout";
import { useDashboardScheduleStore } from "@/store/dahboardScheduleStore";

type setCurrentDate = Dispatch<SetStateAction<Date | undefined>>;
interface ICalendarCardProps {
  meetingList: Date[];
}

export default function CalendarCard({ meetingList }: ICalendarCardProps) {
  const { currentDate, setCurrentDate } = useDashboardScheduleStore();

  return (
    <DashboardCardLayout layoutClassName="flex justify-center">
      <DashboardCalendar
        mode="single"
        selected={currentDate}
        onSelect={setCurrentDate as setCurrentDate}
        meetingList={meetingList}
      />
    </DashboardCardLayout>
  );
}
