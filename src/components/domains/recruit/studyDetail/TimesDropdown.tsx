import { TIMES_LIST } from "@/constant/studyDetail";
import Dropdown from "../../../commons/Dropdown";

interface TimesDropdownProps {
  time: string;
  setTime: (time: string) => void;
}

export default function TimesDropdown(props: TimesDropdownProps) {
  const { time, setTime } = props;

  const handleTimeChange = (selectedTime: string) => {
    setTime(selectedTime);
  };

  return (
    <Dropdown type="text" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
      <div className="w-full flex-col inline-flex justify-center items-start mt-2">
        <div className="w-full h-px rotate-180 border border-neutral-200 z-toast"></div>
        <div className="w-full h-44 overflow-auto mt-2">
          {Object.keys(TIMES_LIST).map((key) => (
            <div
              key={key}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleTimeChange(TIMES_LIST[key])}>
              {TIMES_LIST[key]}
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  );
}
