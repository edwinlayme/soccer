import { createElement } from "../../../../functions/common/common.js";

function createLeagueName(name){
    const leagueNameTemp = name.league_name.replace(/ - /, "-");
    const leagueName = leagueNameTemp.split("-")[0];
    const league = createElement("div","modal-league");
    league.textContent = ` ${leagueName} `;
    return league;
  }

export default createLeagueName;