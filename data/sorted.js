import { getTimeInMinutes } from "../functions/dates/hours.js";

function sortMatchesByHours(matchesByLeague) {
    return Object.entries(matchesByLeague).reduce((sortedMatchesByLeague, [leagueKey, matches]) => {
      matches.sort((a, b) => getTimeInMinutes(a.event_time) - getTimeInMinutes(b.event_time));
      sortedMatchesByLeague[leagueKey] = matches;
      return sortedMatchesByLeague;
    }, {});
  }

export {sortMatchesByHours};