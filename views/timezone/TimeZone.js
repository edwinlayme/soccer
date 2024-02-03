import { matchDates,matchTimes } from "../../constants/variable.js";
import { setDateByTimeZone,setHourByTimeZone } from "../../functions/dates/timezone.js";

const timezoneSelect = document.getElementById("timezone");

 function setTimeZone() {
    const dateElements = document.querySelectorAll(".date");
    const timeElements = document.querySelectorAll(".time");
    const timeZoneLabels = document.querySelectorAll(".label-time");
    const selectedTimezone = timezoneSelect.value;
    saveDateMatches();
    const initialTimes = matchTimes;
    const initialDates = matchDates;
     timeZoneLabels.forEach(element => {
          element.textContent = selectedTimezone;
        });
      if (selectedTimezone === "GMT+0") {
        dateElements.forEach((element, index) => {
          element.textContent = initialDates[index];
        });
    
        timeElements.forEach((element, index) => {
          element.textContent = initialTimes[index];
        });
      } else {
    
        dateElements.forEach((element, index) => {
         const formattedDate = setDateByTimeZone(initialDates[index],initialTimes[index],selectedTimezone);      
          element.textContent = formattedDate;
        });
    
        timeElements.forEach((element, index) => {
         const formattedTime= setHourByTimeZone(initialTimes[index],selectedTimezone);
         element.textContent = formattedTime;
        });
      }
    }
    function saveDateMatches(){
        const dateElements = document.querySelectorAll(".date");
        const timeElements = document.querySelectorAll(".time");
        dateElements.forEach((dateElement) => {
         matchDates.push(dateElement.textContent);
       });
        
       timeElements.forEach((timeElement) => {
         matchTimes.push(timeElement.textContent);
       });
    }
 
    export default setTimeZone;