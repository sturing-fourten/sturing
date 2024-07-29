export function getIsTodayAfterEndDate(endDate: Date) {
  const today = new Date();
  return today > endDate;
}
