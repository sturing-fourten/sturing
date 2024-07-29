export function getIsTodayInRange(startDate: Date, endDate: Date) {
  const today = new Date();
  return today >= startDate && today <= endDate;
}
