import { createElement } from "../../../functions/common/common.js";

function createLeague() {
    const league = createElement("div", "league-container");
    league.hasBeenCreated = false;
    return league;
  }

function getLeague(leagueKey) {
    if (!leagueCache.value[leagueKey]) {
      leagueCache.value[leagueKey] = createLeague();
    }
    return leagueCache.value[leagueKey];
  }

export default createLeague;