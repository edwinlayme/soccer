import { createElement } from "../../../../functions/common/common.js";
import  {translateRound}  from "../../../../functions/translate/round.js";

function createLeagueRound(round){
    const leagueRound = createElement("div","modal-round");
    leagueRound.textContent = `${translateRound(round.league_round,round.league_name)} `;
    return leagueRound;
  }

  export default createLeagueRound;