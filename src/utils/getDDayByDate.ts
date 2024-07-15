import { differenceInDays } from "date-fns";

export function getDDayByDate(targetDate: Date): string {
  const today = new Date();
  const targetDay = new Date(targetDate);
  const formattedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  const formattedTargetDate = new Date(targetDay.getFullYear(), targetDay.getMonth(), targetDay.getDate() - 1);
  const differenceInDay = differenceInDays(formattedTargetDate, formattedToday);
  return `D-${differenceInDay}`;
}
