import displayMatchesByDate from "../matches/matches.js";
import setdefaultTimeZone from "../timezone/default.js";

import { leagueCache } from "../../constants/cache.js";
import { clearDates } from "../../constants/variable.js";
import { removeFirstChild } from "../../functions/common/common.js";
import { formatDate, getFormattedDate } from "../../functions/dates/format.js";

const listDate = document.getElementById('list-dates');
const setDate = document.getElementById('date');

function showNextOrPrevDate(step) {
    setdefaultTimeZone();
    clearDates();
    leagueCache.value = null;
    const currentDate = new Date();
    const lowerLimitDate = new Date();
    const limitDate = new Date();
    lowerLimitDate.setDate(currentDate.getDate() - 6);
     limitDate.setDate(currentDate.getDate() + 5);
  
    const formattedDate = getFormattedDate(setDate.textContent);
    const initialDate = new Date(formattedDate);
    initialDate.setDate(initialDate.getDate() + step);
  
    if (initialDate >= lowerLimitDate && initialDate <= limitDate) {
      const nextDate = formatDate(initialDate);
      displayMatchesByDate(nextDate);
    }
    removeFirstChild(listDate);
  }

export default showNextOrPrevDate;