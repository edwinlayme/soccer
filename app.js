import { getMatches } from './data/fetching.js';
import {groupMatchesByLeague} from './data/group.js';
import {sortMatchesByHours} from './data/sorted.js';
import { createElement,removeFirstChild} from './functions/common/common.js';
import { formatDate,getFormattedDate } from './functions/dates/format.js';
import { setTimeZone,setdefaultTimeZone } from './views/timezone/update.js';
import { getShortDay } from './functions/dates/day.js';
import { parseApiResponse } from './data/parse.js';
import {translateStatus} from './functions/translate/status.js';
import {translateRound} from './functions/translate/round.js';
import showModal from './views/modal/modal.js';

import { clearDates } from './constants/variable.js';
import { leagueCache, matches } from './constants/cache.js';
let date = new Date();


const leaguesContainer = document.getElementById("matches");
const timezoneSelect = document.getElementById("timezone");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const selectDate = document.getElementById('date-content');
const listDate = document.getElementById('list-dates');
const setDate = document.getElementById('date');
const shortDay = document.getElementById('day-short');


btnNext.addEventListener('click', () => showNextOrPrevDate(1));
btnPrev.addEventListener('click', () => showNextOrPrevDate(-1));
selectDate.addEventListener('click', toggleDatesList);
listDate.addEventListener('click', showDate);
timezoneSelect.addEventListener("change", setTimeZone);

const currentDate = formatDate(date);
displayDate(currentDate);

async function displayDate(date) {
    setDate.textContent = date;
    shortDay.textContent = getShortDay(date, '/');
    try {
        if (!leagueCache.value) {
          leagueCache.value = await getMatches(date);
        }
        const matchesByLeague = groupMatchesByLeague(leagueCache.value);
        const sortedMatchesByLeague = sortMatchesByHours(matchesByLeague);
        displayMatchesByLeague(sortedMatchesByLeague);
        matches.value = sortedMatchesByLeague;
        console.log(matches.value);
      } catch (error) {
        console.log(error);
      }
  }

  function showDate(event) {
    setdefaultTimeZone();
    clearDates();
     leagueCache.value = null;
    const today = formatDate(new Date());
    const target = event.target;
    if (target.tagName === 'LI') {
      const dateString = target.textContent;
      const spaceIndex = dateString.indexOf(" ");
      let getDate = dateString.substring(spaceIndex + 1);
      const selectedDate = new Date(target.textContent);
      date = selectedDate;
      if (target.textContent === 'Hoy') {
        getDate = today;
      }
      removeFirstChild(listDate);
      displayDate(getDate);
    }
  }
  
 function showNextOrPrevDate(step) {
    setdefaultTimeZone();
    clearDates();
    leagueCache.value = null;
    const currentDate = new Date();
    const lowerLimitDate = new Date();
    const limitDate = new Date();
    lowerLimitDate.setDate(currentDate.getDate() - 6);
     limitDate.setDate(currentDate.getDate() + 5);
  
    const formattedDate = getFormattedDate(setDate.textContent);
    const initialDate = new Date(formattedDate);
    initialDate.setDate(initialDate.getDate() + step);
  
    if (initialDate >= lowerLimitDate && initialDate <= limitDate) {
      const nextDate = formatDate(initialDate);
      displayDate(nextDate);
    }
    removeFirstChild(listDate);
  }
  
  function toggleDatesList() {
      const datesList = document.getElementById('list');
      if (!datesList) {
        createDatesList();
        return;
      }
      datesList.classList.toggle('visible');
    }
    
    function createDatesList() {
      const dates = getDates();
    
      const ul = document.createElement('ul');
      ul.id = 'list';
      ul.classList.add('visible');
      dates.forEach(date => {
        const li = document.createElement('li');
        li.textContent = date;
        ul.appendChild(li);
      });
      listDate.appendChild(ul);
    }
    
    function getDates() {
      const prevDates = getPrevDates();
      const nextDates = getNextDates();
      const currentDate = 'Hoy';
    
      return [
        ...prevDates,
        currentDate,
        ...nextDates
      ];
    }
    
    function getNextDates() {
      const nextDates = [];
      const currentDate = new Date();
      for (let i = 1; i <= 5; i++) {
        const nextDate = new Date(currentDate.getTime());
        nextDate.setDate(nextDate.getDate() + i);
        nextDates.push(`${getShortDay(formatDate(nextDate),'/')} ${formatDate(nextDate)}`);
      }
      return nextDates;
    }
    
    function getPrevDates() {
      const prevDates = [];
      const currentDate = new Date();
      for (let i = 0; i < 5; i++) {
        const prevDate = new Date(currentDate.getTime());
        prevDate.setDate(currentDate.getDate() - i - 1);
        prevDates.push(`${getShortDay(formatDate(prevDate),'/')} ${formatDate(prevDate)}`);
      }
      return prevDates.reverse();
    }
 

 /******************MODAL******************* */
 





  

   
 
 
/************************ MATCHES*************************/
function clearLeaguesContainer() {
    while (leaguesContainer.firstChild) {
      leaguesContainer.removeChild(leaguesContainer.firstChild);
    }
  }
   function displayMatchesByLeague(matches) {
    clearLeaguesContainer();
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
  
    leaguesContainer.appendChild(frag);
  }
  
     function createMatchElements(matchData) {
      const matchElements = createElement("div", "match");
      matchElements.addEventListener('click', () => {
        showModal(matchData.key); 
      });
      const elems = {
         dates:createDateElements(matchData),
         divMatchCurrent: createTeamsElements(matchData.teams[0],matchData.teams[1]),
         divMatchStatus: createElement("div", "match-status"),
       };
       matchElements.id = matchData.key;
       if(translateStatus(matchData.status).length<=4){
         elems.divMatchStatus.style.color = '#c31818';
       }
       elems.divMatchStatus.textContent = `${translateStatus(matchData.status)}`;
     
       matchElements.appendChild(elems.dates.divMatchDate);
       matchElements.appendChild(elems.dates.divMatchTime);
       matchElements.appendChild(elems.divMatchCurrent);
       matchElements.appendChild(elems.divMatchStatus);
     
       return matchElements;
     }
     function createDateElements(dateMatch){
        const elems = {
         divMatchTime: createElement("div", "time"),
         divMatchDate: createElement("div", "date")
        }
         elems.divMatchDate.textContent = `${dateMatch.date.day}-${dateMatch.date.month}-${dateMatch.date.year}`;
       elems.divMatchTime.textContent = `${dateMatch.date.hour}:${dateMatch.date.minutes}`;
      
        return elems;
     }
     function createTeamsElements(teamHome,teamAway)
     {
      const teams = createElement("div", "match-current");
       const teamHomeElement = teamElement(teamHome);
       const teamAwayElement = teamElement(teamAway);
     
       teams.appendChild(teamHomeElement);
       teams.appendChild(teamAwayElement);
       
       return teams;
     }
     function createLeagueTitles(url, country, league, round) {
      const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYXCgqiWDXIUcLumu7_fyTD7cKTfmc1uCylVwGwiOCXwvn-ngNoEIuIkKcK3ZJadFhJEcnQYnU2ZuPk15qqRkaZbXIrQHzjpH3Xk-dbOb6o9oIwdeGmbbAkQ-8Rla-krXfe5VoesWB4tXoT_Efz2L7D8-0efNdw9Hia9Ps010NbZ3uYVLey-qJtRrosLpf/s320/32x32_World_Cup_FIFA.webp';
      const logo = url || defaultLogo;
      const countryName = country === 'intl'? 'Internacional': country;
      const leagueNameTemp = league.replace(/ - /, "-");
      const leagueName = leagueNameTemp.split("-")[0];
       const leagueTab = createElement("div", "country-info");
       const elems = {
         leagueName: createElement("h3", "league-name"),
         imgCountryLogo: createElement("div", "country-logo"),
         roundLeague: createElement("div", "round-league"),
       };
     
       elems.imgCountryLogo.style.backgroundImage = `url('${logo}')`;
       elems.leagueName.textContent = `${countryName} - ${leagueName} `;
       elems.roundLeague.textContent = `${translateRound(round, league)}`;
     
       leagueTab.appendChild(elems.imgCountryLogo);
       leagueTab.appendChild(elems.leagueName);
       leagueTab.appendChild(elems.roundLeague);
     
       return leagueTab;
     }
     
      function createLeagueIcons(timeZone) {
       const leagueIcons = createElement("div", "label-match");
       const elems = {
         labelCalendar: createElement("div", "label-calendar"),
         labelTime: createElement("div", "label-time"),
         labelTeam: createElement("div", "label-team"),
         labelGoals: createElement("div", "label-goals"),
         labelHalftime: createElement("div", "label-halftime"),
       };
     
       elems.labelTime.textContent = `${timeZone}`;
       leagueIcons.appendChild(elems.labelCalendar);
       leagueIcons.appendChild(elems.labelTime);
       leagueIcons.appendChild(elems.labelTeam);
       leagueIcons.appendChild(elems.labelGoals);
       leagueIcons.appendChild(elems.labelHalftime);
     
       return leagueIcons;
     }
     function teamElement(teamData) {
    
      const team = createElement("div", "team-container");
      const elems = {
          logo: createLogo(teamData),
          name: createName(teamData),
          goals: createGoals(teamData),
          goalsHalftime: createPartialsGoals(teamData),
      };
    
      team.appendChild(elems.logo);
      team.appendChild(elems.name);
      team.appendChild(elems.goals);
      team.appendChild(elems.goalsHalftime);
    
      return team;
    }
    function createLogo(teamData){
      const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibBBDPDNz7dyO9xcO6BjNbxzaIja9uehuCm3OoNkeaLGArmzElvpIP7fBp4Q34iOtyHcHAELbnmxOih4HZzKIUJqyW-k7MLK5EwoO23yoVxJRG3eLx8fpE6V9PCpXPZOjmuS2rSdQ8k4VHnf3nJX05M0ZerbdDnGOG0YmVncuAm2ABLrvYhQWSTQBzp5cQ/s320/team_shield_a.webp';
      const logo =  createElement("img", "team-logo");
      logo.onerror =  () => {
        logo.onerror = null; 
        logo.src = defaultLogo;
      };
    
      logo.src = teamData.logo || defaultLogo;
      logo.alt = teamData.name;
      logo.width = 24;
      logo.height = 24;
      logo.loading = 'lazy';
      return logo;
    }
    function createName(teamData){
     const teamName = createElement("div", "team");
     teamName.textContent = `${teamData.name}`;
     return teamName;
    }
    function createGoals(teamData){
      const goals = createElement("div", "team-goals");
      goals.textContent = teamData.goals ? teamData.goals : '-' ;
    return goals;
    }
    function createPartialsGoals(teamData){
      const goalsPartials = createElement("div", "team-goals-halftime");
      goalsPartials.textContent = teamData.goalshalftime === undefined || teamData.goalshalftime === '' ? '' : `(${teamData.goalshalftime})`;
      return goalsPartials;
    }
    function getLeague(leagueKey) {
      if (!leagueCache.value[leagueKey]) {
        leagueCache.value[leagueKey] = createLeague();
      }
      return leagueCache.value[leagueKey];
    }
    function createLeague() {
      const league = createElement("div", "league-container");
      league.hasBeenCreated = false;
      return league;
    }


   