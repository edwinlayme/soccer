import { createElement } from "../../../functions/common/common.js";
import { translateStatus } from "../../../functions/translate/status.js";
import createDateElements from "./Dates.js";
import createTeamsElements from "./Teams.js";
import showModal from "../../modal/modal.js";

function createMatchElements(matchData) {
    const matchElements = createElement("div", "match");
    matchElements.addEventListener('click', () => {
      showModal(matchData.key); 
    });
    const elems = {
       dates:createDateElements(matchData),
       divMatchCurrent: createTeamsElements(matchData.teams[0],matchData.teams[1]),
       divMatchStatus: createElement("div", "match-status"),
     };
     matchElements.id = matchData.key;
     if(translateStatus(matchData.status).length<=4){
       elems.divMatchStatus.style.color = '#c31818';
     }
     elems.divMatchStatus.textContent = `${translateStatus(matchData.status)}`;
   
     matchElements.appendChild(elems.dates.divMatchDate);
     matchElements.appendChild(elems.dates.divMatchTime);
     matchElements.appendChild(elems.divMatchCurrent);
     matchElements.appendChild(elems.divMatchStatus);
   
     return matchElements;
   }

export default createMatchElements;