import createAllMatches from "./components/AllMatches.js";
import { leagueCache, matches } from "../../constants/cache.js";
import { getMatches } from "../../data/fetching.js";
import { sortMatchesByHours } from "../../data/sorted.js";
import { groupMatchesByLeague } from "../../data/group.js";
import { getShortDay } from "../../functions/dates/day.js";


const leaguesContainer = document.getElementById("matches");
const setDate = document.getElementById('date');
const shortDay = document.getElementById('day-short');

async function displayMatchesByDate(date) {
  setDate.textContent = date;
  shortDay.textContent = getShortDay(date, '/');
  showMatches(date);
}

async function showMatches(date){
    try {
        if (!leagueCache.value) {
          leagueCache.value = await getMatches(date);  
          console.clear(); 
        }
        const matchesByLeague = groupMatchesByLeague(leagueCache.value);
        const sortedMatchesByLeague = sortMatchesByHours(matchesByLeague);
        displayMatchesByLeague(sortedMatchesByLeague);
        matches.value = sortedMatchesByLeague;
      } catch (error) {
        console.log(error);
      }
}
function displayMatchesByLeague(matches){
    const matchesContainer = createAllMatches(matches);
    clearLeaguesContainer();
    leaguesContainer.appendChild(matchesContainer);
}
  function clearLeaguesContainer() {
    while (leaguesContainer.firstChild) {
      leaguesContainer.removeChild(leaguesContainer.firstChild);
    }
  }

export default displayMatchesByDate;