import { differenceInWeeks } from "date-fns";

export function getDateRangeWithWeeks(startDate: Date | string, endDate: Date | string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const weeks = differenceInWeeks(end, start);

  return `${weeks}주 진행`;
}
