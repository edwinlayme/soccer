function setHourByTimeZone(time,timeZone){
    const offset = parseInt(timeZone.replace("GMT", ""));
    const [hours, minutes] = time.split(":");
    let hour = parseInt(hours) + offset;
   
    if (hour < 0) {
      hour += 24;
    } else if (hour >= 24) {
      hour -= 24;
    }
  
    const formattedTime = hour.toString().padStart(2, "0") + ":" + minutes;
    return formattedTime;
   }
   function setDateByTimeZone(date, time, timeZone) {
    const offset = parseInt(timeZone.replace("GMT", ""));
    const [day, month, year] = date.split("-");
    const hour = time.split(":")[0];
    
    let newDay = parseInt(day);
    let newMonth = parseInt(month);
    let newYear = parseInt(year);
    let newHour = parseInt(hour) + offset;
  
    if(newHour >= 24) {
      newHour -= 24;
      newDay++;
    } else if(newHour < 0) {
      newHour += 24;
      newDay--;
    }
  
    if(newDay > daysInMonth(newMonth, newYear)) {
      newDay = 1;
      newMonth++;
    } else if(newDay < 1) {
      newDay = daysInMonth(newMonth-1, newYear);
      newMonth--;
    }
  
    if(newMonth > 12) {
      newMonth = 1;
      newYear++;
    } else if(newMonth < 1) {
      newMonth = 12;
      newYear--;
    }
    const formattedDate = newDay.toString().padStart(2, "0") + "-" + 
                          newMonth.toString().padStart(2, "0") + "-" +
                          newYear;
    return formattedDate;
  }

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  export {setDateByTimeZone,setHourByTimeZone};