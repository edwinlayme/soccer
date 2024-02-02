function formatResult(result){
    if(result === '? - ?')
       return '-';
    else
       return result;
  }
 function formatedDate(date){
    const [year,month,day] = date.split("-");
    return `${day}-${month}-${year}`;
  }
 function getFormattedDate(dateString) {
    const dateParts = dateString.split('/');
    return `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
  }
 function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  export {formatDate, getFormattedDate, formatedDate, formatResult}