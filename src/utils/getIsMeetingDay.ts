import { startOfDay } from "date-fns";

export const getIsMeetingDay = (meetingList: Date[], currentDate: Date): boolean => {
  if (!meetingList || !currentDate) return false;
  const targetDate = startOfDay(currentDate);

  const index = meetingList.findIndex((meeting) => startOfDay(meeting).getTime() === targetDate.getTime());

  return index > -1;
};

export const getMeetingDayCount = (meetingList: Date[], currentDate: Date): number => {
  if (!meetingList || !currentDate) return -1;
  const targetDate = startOfDay(currentDate);

  const index = meetingList.findIndex((meeting) => startOfDay(meeting).getTime() === targetDate.getTime());

  return index;
};
