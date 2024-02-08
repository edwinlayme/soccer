 import { createElement } from "../../../functions/common/common.js";
 import createLogo from "./TeamLogo.js";
 import createName from "./TeamName.js";
 import createGoals from "./Goals.js";
 import createPartialsGoals from "./GoalsPartials.js";

function teamElement(teamData) {
    
    const team = createElement("div", "team-container");
    const elems = {
        logo: createLogo(teamData),
        name: createName(teamData),
        goals: createGoals(teamData),
        goalsHalftime: createPartialsGoals(teamData),
    };
  
    team.appendChild(elems.logo);
    team.appendChild(elems.name);
    team.appendChild(elems.goals);
    team.appendChild(elems.goalsHalftime);
  
    return team;
  }

export default teamElement;