import { createElement } from "../../../functions/common/common.js";
import createTeam from "./Teams/ElementTeam.js";
import createDate from "./DatesModal.js";

function createTeamsContainer(data){
    const teams = createElement("div","modal-teams-container");
    const elems = {
            homeTeam: createTeam(data.home_team_logo,data.event_home_team),
            awayTeam: createTeam(data.away_team_logo,data.event_away_team),
            dateMatch: createDate(data),
      };
      teams.appendChild(elems.homeTeam);
      teams.appendChild(elems.dateMatch);
      teams.appendChild(elems.awayTeam);
    return teams;
   }

export default createTeamsContainer;