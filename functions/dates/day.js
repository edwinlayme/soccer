import { capitalizeFirstLetter } from "../common/common.js";

function getShortDay(date,separator) {
    if(separator ==='/'){
      const dateParts = date.split("/");
      const formattedDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
      const dateObject = new Date(formattedDate);
      const dayShort = dateObject.toLocaleDateString('es-ES', { weekday: 'short' });
      return dayShort;
    }
    else{
      const dateParts = date.split("-");
      const formattedDate = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`;
      const dateObject = new Date(formattedDate);
      const dayShort = dateObject.toLocaleDateString('es-ES', { weekday: 'long' });
      return capitalizeFirstLetter(dayShort);
    }
  }

  export {getShortDay};