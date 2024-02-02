function subtractHour(time,substract) {
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours, 10);
    let minute = parseInt(minutes, 10);
    hour = (hour - substract + 24) % 24;
  
    const formattedHour = hour < 10 ? `0${hour}` : hour.toString();
    const formattedMinute = minute < 10 ? `0${minute}` : minute.toString();
  
    return `${formattedHour}:${formattedMinute}`;
  }

function getTimeInMinutes(time) {
    const hourTemp = time.replace(/ - /, "-");
     const [hour, minutes] = hourTemp.split(":");
     return parseInt(hour) * 60 + parseInt(minutes);
   }
   
export {subtractHour,getTimeInMinutes};