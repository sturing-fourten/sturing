export function getIsTodayAfterTargetDate(targetDate: Date) {
  const today = new Date();
  return today > targetDate;
}
