import { SetStateAction } from "react";
import Dropdown from "../../../commons/Dropdown";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { DateRange } from "react-day-picker";
import { format, isBefore, startOfToday } from "date-fns";

interface CalenderDropdownProps {
  date: DateRange;
  setDate: React.Dispatch<SetStateAction<DateRange>>;
}

export default function CalenderDropdown(props: CalenderDropdownProps) {
  const { date, setDate } = props;
  const handleDateChange = (range: DateRange | undefined) => {
    if (
      !range ||
      (range.from && isBefore(range.from, startOfToday())) ||
      (range.to && isBefore(range.to, startOfToday()))
    ) {
      return;
    }
    setDate(range);
  };

  const formattedDate =
    date?.from && date?.to ? `${format(date.from, "yyyy-MM-dd")} ~ ${format(date.to, "yyyy-MM-dd")}` : "";

  return (
    <Dropdown type="text" name="calendar" value={formattedDate} onChange={(e) => e.target.value}>
      <div className="w-full flex-col inline-flex justify-center items-center mt-2">
        <div className="w-full h-px rotate-180 border border-neutral-200 z-toast"></div>
        <Calendar
          mode="range"
          initialFocus
          defaultMonth={date?.from}
          selected={date}
          onSelect={handleDateChange}
          numberOfMonths={1}
          disabled={{ before: startOfToday() }}
        />
      </div>
    </Dropdown>
  );
}
