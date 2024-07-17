import { format, formatDistance } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * 주어진 날짜 문자열을 기반으로 날짜를 포맷팅합니다. 선택적으로 시간 정보도 포함할 수 있습니다.
 * 날짜는 "MM.DD" 형식으로 반환되며, 시간 정보를 포함할 경우 "YYYY.MM.DD HH:MM" 형식으로 반환됩니다.
 *
 * @param {string} createdAt - 포맷팅할 날짜의 문자열입니다.
 * @param {boolean} [withTime=false] - 반환되는 날짜 문자열에 시간 정보를 포함할지 여부를 결정합니다.
 *                                     true일 경우 시간을 포함하여 반환하며,
 *                                     false일 경우 또는 생략했을 때는 날짜만 반환합니다.
 * @returns {string} 포맷팅된 날짜 문자열입니다.
 */
export const formatDate = (targetDate: Date, withTime: boolean = false): string => {
  const date = new Date(targetDate);

  let formattedDate = format(date, "MM.dd", { locale: ko });

  if (withTime) {
    formattedDate = format(date, "MM.dd HH:mm", { locale: ko });
  }

  return formattedDate;
};
