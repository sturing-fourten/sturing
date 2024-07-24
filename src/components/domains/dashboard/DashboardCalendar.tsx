"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, Matcher } from "react-day-picker";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/shadcn/ui/button";
import { EventDayContent } from "./EventDayContent";
import getHasEvent from "@/utils/getHasEvent";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  dateList: Date[];
};

function DashboardCalendar({ classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const weekendMatcher: Matcher = { dayOfWeek: [0, 6] };
  const saturdayMatcher: Matcher = { dayOfWeek: [6] };
  const sundayMatcher: Matcher = { dayOfWeek: [0] };

  return (
    <DayPicker
      locale={ko}
      showOutsideDays={showOutsideDays}
      classNames={{
        months: "inline-flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-slate-500 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-full [&:has([aria-selected].day-range-start)]:rounded-full focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-blue-500 text-white",
        day_outside:
          "day-outside rounded-full overflow-hidden text-slate-500 opacity-50 aria-selected:bg-blue-500 aria-selected:text-white",
        day_disabled: "text-slate-500 opacity-50",
        day_range_middle: "aria-selected:bg-slate-100 aria-selected:text-slate-900 ",
        day_hidden: "invisible",
        ...classNames,
      }}
      modifiers={{
        weekend: weekendMatcher,
        saturday: saturdayMatcher,
        sunday: sundayMatcher,
      }}
      modifiersClassNames={{
        weekend: "text-blue-500",
        saturday: "text-blue-500",
        sunday: "text-red-500",
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        DayContent: ({ ...dateProps }) => (
          <EventDayContent date={dateProps.date} isMeetingDay={getHasEvent(props.dateList, dateProps.date)} />
        ),
      }}
      {...props}
    />
  );
}
DashboardCalendar.displayName = "Calendar";

export { DashboardCalendar };
