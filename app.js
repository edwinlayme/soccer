import { formatDate } from './functions/dates/format.js';
import toggleDatesList from './views/toggle/toggle.js';
import setTimeZone  from './views/timezone/TimeZone.js';
import displayMatchesByDate from './views/matches/matches.js';
import showNextOrPrevDate from './views/display/setDate.js';

let date = new Date();

const timezoneSelect = document.getElementById("timezone");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const selectDate = document.getElementById('date-content');

btnNext.addEventListener('click', () => showNextOrPrevDate(1));
btnPrev.addEventListener('click', () => showNextOrPrevDate(-1));
selectDate.addEventListener('click', toggleDatesList);
timezoneSelect.addEventListener("change", setTimeZone);

const currentDate = formatDate(date);
displayMatchesByDate(currentDate);

  

  
 
  