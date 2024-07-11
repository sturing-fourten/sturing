export function calculateWeeks(startDate: Date, endDate: Date): number {
  const startTimestamp = new Date(startDate).getTime(); // 시작일의 타임스탬프
  const endTimestamp = new Date(endDate).getTime(); // 종료일의 타임스탬프

  const oneDayMilliseconds = 1000 * 60 * 60 * 24;
  const diffMilliseconds = Math.abs(endTimestamp - startTimestamp);
  const diffDays = Math.ceil(diffMilliseconds / oneDayMilliseconds);

  const weeks = Math.ceil(diffDays / 7);

  return weeks;
}
