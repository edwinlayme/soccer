import { createElement } from "../../../../functions/common/common.js";
import { setHourByTimeZone } from "../../../../functions/dates/timezone.js";

const timezoneSelect = document.getElementById("timezone");

function addHour(hour){
    const selectedTimezone = timezoneSelect.value;
    const hourElement = createElement("span","hour-match");
    const elems = {
      timeZoneContent : createElement("p","timezone-details"),
      hourContent : createElement("p","hour-details"),
  }
    const hourMatch = setHourByTimeZone(hour.event_time,selectedTimezone);
    elems.timeZoneContent.textContent = selectedTimezone;
    elems.hourContent.textContent = hourMatch;
    hourElement.appendChild(elems.timeZoneContent);
    hourElement.appendChild(elems.hourContent);
    return hourElement;
  }

  export default addHour;