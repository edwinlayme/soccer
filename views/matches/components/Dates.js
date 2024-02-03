import { createElement } from "../../../functions/common/common.js";

function createDateElements(dateMatch){
    const elems = {
     divMatchTime: createElement("div", "time"),
     divMatchDate: createElement("div", "date")
    }
     elems.divMatchDate.textContent = `${dateMatch.date.day}-${dateMatch.date.month}-${dateMatch.date.year}`;
   elems.divMatchTime.textContent = `${dateMatch.date.hour}:${dateMatch.date.minutes}`;
  
    return elems;
 }

 export default createDateElements;