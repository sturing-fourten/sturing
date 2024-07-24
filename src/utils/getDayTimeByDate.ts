import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function getDayTimeByDate(date: Date): [string, string] {
  if (!date) return ["", ""];
  const typedDate = new Date(date);
  const dayOfWeek = format(typedDate, "EEE", { locale: ko });
  const formattedDate = format(typedDate, "MM.dd", { locale: ko });
  const hours = typedDate.getHours();
  const minutes = typedDate.getMinutes();
  const isAM = hours < 12;
  const formattedHours = hours % 12 || 12;
  const period = isAM ? "오전" : "오후";
  const formattedTime = `${period} ${formattedHours}:${minutes.toString().padStart(2, "0")}`;

  return [`${formattedDate}(${dayOfWeek})`, formattedTime];
}
