import { startOfDay } from "date-fns";

export default function getHasEvent(dateList: Date[], currentDate: Date): boolean {
  if (!dateList || !currentDate) return false;
  const targetDate = startOfDay(currentDate);

  const index = dateList.findIndex((meeting) => startOfDay(meeting).getTime() === targetDate.getTime());

  return index > -1;
}
