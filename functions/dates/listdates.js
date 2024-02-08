import { getShortDay } from "./day.js";
import { formatDate } from "./format.js";

function getDates(upperLimit,lowerLimit) {
    const prevDates = getPrevDates(lowerLimit);
    const nextDates = getNextDates(upperLimit);
    const currentDate = 'Hoy';
  
    return [
      ...prevDates,
      currentDate,
      ...nextDates
    ];
  }
  
  function getNextDates(upperLimit) {
    const nextDates = [];
    const currentDate = new Date();
    for (let i = 1; i <= upperLimit; i++) {
      const nextDate = new Date(currentDate.getTime());
      nextDate.setDate(nextDate.getDate() + i);
      nextDates.push(`${getShortDay(formatDate(nextDate),'/')} ${formatDate(nextDate)}`);
    }
    return nextDates;
  }
  
  function getPrevDates(lowerLimit) {
    const prevDates = [];
    const currentDate = new Date();
    for (let i = 0; i < lowerLimit; i++) {
      const prevDate = new Date(currentDate.getTime());
      prevDate.setDate(currentDate.getDate() - i - 1);
      prevDates.push(`${getShortDay(formatDate(prevDate),'/')} ${formatDate(prevDate)}`);
    }
    return prevDates.reverse();
  }

  export {getDates};