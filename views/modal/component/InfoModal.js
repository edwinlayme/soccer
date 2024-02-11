import { createElement } from "../../../functions/common/common.js";
import addReferee from "./Match/Referee.js";
import addSeason from "./Match/Season.js";
import addStadium from "./Match/Stadium.js";
import addStage from "./Match/Stage.js";

function createInfoModal(info){
    const container = createElement("div","info-container");
const elems = {
             label: createElement("div","label-info"),
             stadium: addStadium(info.event_stadium),
             referee: addReferee(info),
             season : addSeason(info.league_season),
             stage : addStage(info.stage_name),
   };
   elems.label.textContent = 'Información Adicional';
   container.appendChild(elems.label);
   container.appendChild(elems.season);
   container.appendChild(elems.stage);
   container.appendChild(elems.stadium);
   container.appendChild(elems.referee);
   return container;
}
export default createInfoModal;