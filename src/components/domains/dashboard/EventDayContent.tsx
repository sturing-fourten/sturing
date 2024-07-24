interface IEveryDayContent {
  isMeetingDay: boolean;
  date: Date;
}
export function EventDayContent(props: IEveryDayContent) {
  const { isMeetingDay, date } = props;

  return (
    <span style={{ position: "relative", overflow: "visible" }}>
      {isMeetingDay ? (
        <div className="relative">
          {date.getDate()}
          <div className="absolute top-[-4px] left-[50%] w-1 h-1 rounded-full bg-main-500 translate-x-[-50%]"></div>
        </div>
      ) : (
        date.getDate()
      )}
    </span>
  );
}
