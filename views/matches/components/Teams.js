import { createElement } from "../../../functions/common/common.js";
import teamElement from "./Team.js";

function createTeamsElements(teamHome,teamAway)
{
 const teams = createElement("div", "match-current");
  const teamHomeElement = teamElement(teamHome);
  const teamAwayElement = teamElement(teamAway);

  teams.appendChild(teamHomeElement);
  teams.appendChild(teamAwayElement);
  
  return teams;
}

export default createTeamsElements;