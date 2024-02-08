import { leagueCache } from "../../constants/cache.js";
import { clearDates } from "../../constants/variable.js";
import { removeFirstChild } from "../../functions/common/common.js";
import { formatDate } from "../../functions/dates/format.js";
import { getDates } from "../../functions/dates/listdates.js";
import displayMatchesByDate from "../matches/allmatches.js";
import setdefaultTimeZone from "../timezone/default.js";

let date = new Date();

const listDate = document.getElementById('list-dates');
listDate.addEventListener('click', showDate);

function toggleDatesList() {
    const datesList = document.getElementById('list');
    if (!datesList) {
      createDatesList();
      return;
    }
    datesList.classList.toggle('visible');
  }
  
  function createDatesList() {
    const dates = getDates(5,5);
  
    const ul = document.createElement('ul');
    ul.id = 'list';
    ul.classList.add('visible');
    dates.forEach(date => {
      const li = document.createElement('li');
      li.textContent = date;
      ul.appendChild(li);
    });
    listDate.appendChild(ul);
  }
  function showDate(event) {
    setdefaultTimeZone();
    clearDates();
     leagueCache.value = null;
    const today = formatDate(new Date());
    const target = event.target;
    if (target.tagName === 'LI') {
      const dateString = target.textContent;
      const spaceIndex = dateString.indexOf(" ");
      let getDate = dateString.substring(spaceIndex + 1);
      const selectedDate = new Date(target.textContent);
      date = selectedDate;
      if (target.textContent === 'Hoy') {
        getDate = today;
      }
      removeFirstChild(listDate);
      displayMatchesByDate(getDate);
    }
  }

export default toggleDatesList;