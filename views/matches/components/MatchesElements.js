import { parseApiResponse } from "../../../data/parse.js"; 
import { createLeague,createMatchElements,createLeagueTitles,createLeagueIcons } from "./index.js";

function createAllMatches(matches){
    const frag = document.createDocumentFragment();
    for (const leagueKey in matches) {
      const league = createLeague();
      for (const match of matches[leagueKey]) {
        const apiResponse = parseApiResponse(match);
        const matchElements = createMatchElements(apiResponse);
  
        if (!league.hasBeenCreated) {
          const leagueIcons = createLeagueIcons(apiResponse.date.timezone);
          const leagueTitles = createLeagueTitles(apiResponse.competition.logo, apiResponse.competition.country, apiResponse.competition.name, apiResponse.round);
          league.appendChild(leagueTitles);
          league.appendChild(leagueIcons);
          league.hasBeenCreated = true;
        }
        league.appendChild(matchElements);
      }
      frag.appendChild(league);
    }
    return frag;
}
export default createAllMatches;