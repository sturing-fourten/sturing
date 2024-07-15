import { DAYS_LIST } from "@/constant/studyDetail";
import Dropdown from "../../../commons/Dropdown";

interface DaysDropdownProps {
  day: string;
  setDay: (day: string) => void;
}

export default function DaysDropdown(props: DaysDropdownProps) {
  const { day, setDay } = props;
  const handleDayChange = (selectedDay: string) => {
    setDay(selectedDay);
  };

  return (
    <Dropdown type="text" name="day" value={day} onChange={(e) => setDay(e.target.value)}>
      <div className="w-full flex-col inline-flex justify-center items-start mt-2">
        <div className="w-full h-px rotate-180 border border-neutral-200 z-toast"></div>
        <div className="w-full h-44 overflow-auto mt-2">
          {Object.keys(DAYS_LIST).map((key) => (
            <div
              key={key}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleDayChange(DAYS_LIST[key])}>
              {DAYS_LIST[key]}
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  );
}
