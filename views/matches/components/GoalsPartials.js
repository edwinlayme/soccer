import { createElement } from "../../../functions/common/common.js";

function createPartialsGoals(teamData){
    const goalsPartials = createElement("div", "team-goals-halftime");
    goalsPartials.textContent = teamData.goalshalftime === undefined || teamData.goalshalftime === '' ? '' : `(${teamData.goalshalftime})`;
    return goalsPartials;
  }

  export default createPartialsGoals;