import { format } from "date-fns";

/**
 *
 * @param startDate - 시작 날짜 (Date 객체 or 문자열)
 * @param endDate - 종료 날짜 (Date 객체 or 문자열)
 * @returns 포맷된 형태의 날짜 문자열
 */
export function getDateRange(startDate: Date | string, endDate: Date | string): string {
  const formattedStartDate = format(new Date(startDate), "MM.dd");
  const formattedEndDate = format(new Date(endDate), "MM.dd");

  return `${formattedStartDate}~${formattedEndDate}`;
}
