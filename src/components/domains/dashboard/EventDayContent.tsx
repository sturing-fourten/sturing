import { DayContentProps } from "react-day-picker";

interface Plan {
  date: Date;
  title: string;
  location: string;
  time: string;
}

const SAMPLE_PLAN_LIST: Plan[] = [
  {
    date: new Date(2024, 6, 19),
    title: "미팅 1회차",
    location: "온라인",
    time: "10:00 AM",
  },
  {
    date: new Date(2024, 6, 21),
    title: "미팅 2회차",
    location: "카페",
    time: "12:30 PM",
  },
];

export function EventDayContent(props: DayContentProps & { plan?: Plan[] }) {
  const eventDay = SAMPLE_PLAN_LIST.find(
    (planItem) => planItem.date.toISOString().slice(0, 10) === props.date.toISOString().slice(0, 10),
  );

  return (
    <span style={{ position: "relative", overflow: "visible" }}>
      {eventDay ? (
        <div className="relative">
          {props.date.getDate()}
          <div className="absolute top-[-4px] left-[50%] w-1 h-1 rounded-full bg-main-500 translate-x-[-50%]"></div>
        </div>
      ) : (
        props.date.getDate()
      )}
    </span>
  );
}
