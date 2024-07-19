import { addDays, getDay } from "date-fns";

const dayMap: { [key: string]: number } = {
  일요일: 0,
  월요일: 1,
  화요일: 2,
  수요일: 3,
  목요일: 4,
  금요일: 5,
  토요일: 6,
};

const timeMap: { [key: string]: string[] } = {
  "오전 12:00": ["00", "00"],
  "오전 1:00": ["01", "00"],
  "오전 2:00": ["02", "00"],
  "오전 3:00": ["03", "00"],
  "오전 4:00": ["04", "00"],
  "오전 5:00": ["05", "00"],
  "오전 6:00": ["06", "00"],
  "오전 7:00": ["07", "00"],
  "오전 8:00": ["08", "00"],
  "오전 9:00": ["09", "00"],
  "오전 10:00": ["10", "00"],
  "오전 11:00": ["11", "00"],
  "오후 12:00": ["12", "00"],
  "오후 1:00": ["13", "00"],
  "오후 2:00": ["14", "00"],
  "오후 3:00": ["15", "00"],
  "오후 4:00": ["16", "00"],
  "오후 5:00": ["17", "00"],
  "오후 6:00": ["18", "00"],
  "오후 7:00": ["19", "00"],
  "오후 8:00": ["20", "00"],
  "오후 9:00": ["21", "00"],
  "오후 10:00": ["22", "00"],
  "오후 11:00": ["23", "00"],
};

interface IGenerateUpcomingMeetingListProps {
  startDate: Date;
  endDate: Date;
  title: string;
  where: string;
  day: string;
  time: string;
}

export type TUpcomingMeetingItem = { title: string; where: string; date: Date };
export type TUpcomingMeetingList = TUpcomingMeetingItem[];

export function generateUpcomingMeetingList(props: IGenerateUpcomingMeetingListProps): TUpcomingMeetingList {
  const { startDate, endDate, title, where, day, time } = props;
  const meetingDayOfWeek = dayMap[day];
  const meetingTime = timeMap[time][0];
  const meetingMinutes = timeMap[time][1];

  const today = new Date();
  const twoWeekFromToday = addDays(today, 14);

  let meetingList = [];
  let current = today;

  while (current >= startDate && current >= today && current <= twoWeekFromToday && current <= endDate) {
    // 1. 오늘 이후
    // 2. 2주 이내
    // 3. startDate 이후
    // 4. endDate 이내
    // 5. current의 요일 === 미팅 요일
    const targetDayOfWeek = getDay(current);

    if (targetDayOfWeek === meetingDayOfWeek) {
      const meetingDateTime = new Date(
        current.getFullYear(),
        current.getMonth(),
        current.getDate(),
        parseInt(meetingTime),
        parseInt(meetingMinutes),
      );

      meetingList.push({
        title,
        where,
        date: meetingDateTime,
      });
    }
    current = addDays(current, 1);
  }

  return meetingList;
}
