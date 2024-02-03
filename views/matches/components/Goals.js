import { createElement } from "../../../functions/common/common.js";

function createGoals(teamData){
    const goals = createElement("div", "team-goals");
    goals.textContent = teamData.goals ? teamData.goals : '-' ;
  return goals;
  }

export default createGoals;