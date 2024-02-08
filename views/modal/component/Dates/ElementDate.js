import { createElement } from "../../../../functions/common/common.js";
import { setDateByTimeZone } from "../../../../functions/dates/timezone.js";
import { formatedDate } from "../../../../functions/dates/format.js";
import { getShortDay } from "../../../../functions/dates/day.js";


const timezoneSelect = document.getElementById("timezone");

function addDate(date){
    const selectedTimezone = timezoneSelect.value;
    const dateElement = createElement("span","date-match");
    const elems = {
                dateContent : createElement("p","date-details"),
                dayContent : createElement("p","day-details"),
     }
     const dateMatch = setDateByTimeZone(formatedDate(date.event_date),date.event_time,selectedTimezone);
     const dayShort = getShortDay(dateMatch,'-');
     elems.dayContent.textContent = dayShort;
     elems.dateContent.textContent = dateMatch;
     dateElement.appendChild(elems.dayContent);
     dateElement.appendChild(elems.dateContent);
  
    return dateElement;
  }

  export default addDate;