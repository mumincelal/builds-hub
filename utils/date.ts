import { intlFormatDistance } from "date-fns";

/**
 * Returns the relative time from now
 * @param date
 * @returns string
 */
export const getRelativeTime = (date: string | Date) => {
  let value = date;

  if (typeof date === "string") {
    value = new Date(date);
  }

  return intlFormatDistance(new Date(value), new Date());
};

/**
 * Returns the difference between two dates in minutes and seconds
 * @param first
 * @param second
 * @returns string
 */
export const getTimeDifference = (
  first: string | Date,
  second: string | Date
): string => {
  let newFirst = first;
  let newSecond = second;

  if (typeof first === "string") {
    newFirst = new Date(first);
  }

  if (typeof second === "string") {
    newSecond = new Date(second);
  }

  const firstDate = new Date(newFirst);
  const secondDate = new Date(newSecond);

  const diff = secondDate.getTime() - firstDate.getTime();

  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return `${minutes}m ${seconds}s`;
};
