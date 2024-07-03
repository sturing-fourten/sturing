"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { DashboardCalendar } from "./DashboardCalendar";
import DashboardCardLayout from "./DashboardCardLayout";

interface ICalendarCardProps {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export default function CalendarCard(props: ICalendarCardProps) {
  const { date, setDate } = props;

  return (
    <DashboardCardLayout layoutClassName="flex justify-center">
      <DashboardCalendar mode="single" selected={date} onSelect={setDate} />
    </DashboardCardLayout>
  );
}
