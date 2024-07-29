export const calculateProgressGauge = (completedCount: number, totalCount: number) => {
  const percentage = (completedCount / totalCount) * 100;
  return Math.round(percentage);
};
