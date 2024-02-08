import { createElement } from "../../../functions/common/common.js";
import addReferee from "./Match/Referee.js";
import addStadium from "./Match/Stadium.js";

function createInfoModal(info){
    const container = createElement("div","info-container");
const elems = {
             label: createElement("div","label-info"),
             stadium: addStadium(info.event_stadium),
             referee: addReferee(info.event_referee),
   };
   elems.label.textContent = 'Información Adicional';
   container.appendChild(elems.label);
   container.appendChild(elems.stadium);
   container.appendChild(elems.referee);
   return container;
}
export default createInfoModal;