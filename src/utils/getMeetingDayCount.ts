import { startOfDay } from "date-fns";

export default function getMeetingDayCount(meetingList: Date[], currentDate: Date): number {
  if (!meetingList || !currentDate) return -1;
  const targetDate = startOfDay(currentDate);

  const index = meetingList.findIndex((meeting) => startOfDay(meeting).getTime() === targetDate.getTime());

  return index;
}
