
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
      return dayShort;
    }
  }

  export {getShortDay};