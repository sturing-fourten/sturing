import { useState } from "react";
import CalenderDropdown from "../../recruit/studyDetail/CalenderDropdown";
import { DateRange } from "react-day-picker";

export default function PeriodFilter() {
  const [date, setDate] = useState<DateRange>({ from: new Date(), to: new Date() });

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-800 text-sm sm:text-base font-medium leading-snug">{"스터디 진행 기간"}</h1>
        <CalenderDropdown date={date} setDate={setDate} />
      </div>
    </>
  );
}
