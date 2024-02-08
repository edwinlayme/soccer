import { createElement } from "../../../functions/common/common.js";

function createName(teamData){
    const teamName = createElement("div", "team");
    teamName.textContent = `${teamData.name}`;
    return teamName;
   }

export default createName;