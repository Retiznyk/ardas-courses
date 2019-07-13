export function daysBetween(date1, date2) {
  const secondsPerDay = 24 * 60 * 60 * 1000;
  const from = new Date(date1);
  const to = new Date(date2);

  from.setHours(0, 0, 0, 0);
  to.setHours(0, 0, 0, 0);

  const diffDays = Math.round((from.getTime() - to.getTime()) / secondsPerDay);

  return diffDays;
}

export function daysToDate(date) {
  const expectedDate = new Date(date);
  const today = new Date();
  const thisYear = today.getFullYear();
  expectedDate.setYear(thisYear);
  const diff = daysBetween(expectedDate, today);

  return diff >= 0
    ? diff
    : daysBetween(expectedDate.setYear(thisYear + 1), today);
}
