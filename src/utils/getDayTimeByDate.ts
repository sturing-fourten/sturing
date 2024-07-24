import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function getDayTimeByDate(date: Date): [string, string] {
  if (!date) return ["", ""];
  const dayOfWeek = format(date, "EEE", { locale: ko });

  const formattedDate = format(date, "MM.dd", { locale: ko });

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12;
  const formattedHours = hours % 12 || 12;
  const period = isAM ? "오전" : "오후";
  const formattedTime = `${period} ${formattedHours}:${minutes.toString().padStart(2, "0")}`;

  return [`${formattedDate}(${dayOfWeek})`, formattedTime];
}
