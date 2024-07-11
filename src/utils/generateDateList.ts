export default function generateDateList(startDate: string, endDate: string, itemKey: "isAttended") {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dateList = [];

  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    dateList.push({
      date: new Date(date),
      [itemKey]: false,
    });
  }

  return dateList;
}
