import { createElement } from "../../../functions/common/common.js";
import addDate from "./Dates/ElementDate.js";
import addHour from "./Dates/ElementHour.js";
import addResult from "./Dates/ElementResult.js";
import addStatus from "./Dates/ElementStatus.js";

function createDate(data){
    const dates = createElement("div","modal-dates");
    const elems = {
            dateMatch: addDate(data),
            hourMatch: addHour(data),
            resultMatch: addResult(data),
            statusMatch: addStatus(data),
    }
     dates.appendChild(elems.dateMatch);
     dates.appendChild(elems.hourMatch);
     dates.appendChild(elems.resultMatch);
     dates.appendChild(elems.statusMatch);
     return dates;
   }

   export default createDate;