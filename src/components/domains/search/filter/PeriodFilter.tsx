import { useState } from "react";
// import CalenderDropdown from "../../recruit/studyDetail/CalenderDropdown";
// import { DateRange } from "react-day-picker";
import { useFilterStore } from "@/store/FilterStore";
import Dropdown from "../../../commons/Dropdown";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { DateRange } from "react-day-picker";
import { format, isBefore, startOfToday } from "date-fns";
import { ko } from "date-fns/locale";

export default function PeriodFilter() {
  const [date, setDate] = useState<DateRange | { from: undefined; to: undefined }>({ from: undefined, to: undefined });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { setDateFilter } = useFilterStore();

  // setDateFilter(date.from, date.to);
  const handleDateChange = (range: DateRange | undefined) => {
    if (
      !range ||
      (range.from && isBefore(range.from, startOfToday())) ||
      (range.to && isBefore(range.to, startOfToday()))
    ) {
      return;
    }
    setDate(range);
    setStartDate(range.from || null);
    setEndDate(range.to || null);
  };

  const formattedDate = date?.from
    ? date?.to
      ? `${format(date.from, "yyyy-MM-dd", { locale: ko })} ~ ${format(date.to, "yyyy-MM-dd", { locale: ko })}`
      : `${format(date.from, "yyyy-MM-dd", { locale: ko })}`
    : "";

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-800 text-sm sm:text-base font-medium leading-snug">{"스터디 진행 기간"}</h1>
        <Dropdown
          value={formattedDate}
          placeholder="진행 기간을 선택해 주세요."
          autoClose
          onChange={(e) => e.target.value}>
          <div className="w-full flex-col inline-flex justify-center items-center mt-2">
            <div className="w-full h-px rotate-180 border border-neutral-200 z-toast"></div>
            <Calendar
              mode="range"
              initialFocus
              defaultMonth={date.from || new Date()}
              selected={date}
              onSelect={handleDateChange}
              numberOfMonths={1}
              disabled={{ before: startOfToday() }}
            />
          </div>
        </Dropdown>
      </div>
    </>
  );
}
