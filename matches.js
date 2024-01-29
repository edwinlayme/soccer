let date = new Date();
let leagueCache = null;
let matchTimes = [];
let matchDates = []; 

const leaguesContainer = document.getElementById("matches");
const timezoneSelect = document.getElementById("timezone");
const setDate = document.getElementById('date');
const selectDate = document.getElementById('date-content');
const shortDay = document.getElementById('day-short');
const listDate = document.getElementById('list-dates');
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

selectDate.addEventListener('click', toggleDatesList);
timezoneSelect.addEventListener("change", setTimeZone);
btnNext.addEventListener('click', () => showNextOrPrevDate(1));
btnPrev.addEventListener('click', () => showNextOrPrevDate(-1));
listDate.addEventListener('click', showDate);



const currentDate = formatDate(date);
displayDate(currentDate);
async function displayDate(date) {
  setDate.textContent = date;
  shortDay.textContent = getShortDay(date);
  try {
    if (!leagueCache) {
      leagueCache = await getMatches(date);
    }
    const matchesByLeague = groupMatchesByLeague(leagueCache);
    const sortedMatchesByLeague = sortMatchesByHours(matchesByLeague);
    displayMatchesByLeague(sortedMatchesByLeague);
  } catch (error) {
    if(error.status === 404) 
     console.log("Error de recurso");
}
}
/*****************************Matches Functions*******************************/
function clearLeaguesContainer() {
  leaguesContainer.innerHTML = "";
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
        const leagueNameTemp = apiResponse.competition.name.replace(/ - /, "-");
        const leagueName = leagueNameTemp.split("-")[0];
        const leagueIcons = createLeagueIcons(apiResponse.date.timezone);
        const leagueTitles = createLeagueTitles(apiResponse.competition.logo, apiResponse.competition.country, leagueName, apiResponse.round);
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
  const elems = {
     dates:createDateElements(matchData),
     divMatchCurrent: createTeamsElements(matchData.teams[0],matchData.teams[1]),
     divMatchStatus: createElement("div", "match-status"),
   };
 
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
 function createLeagueTitles(logo, country, league, round) {
   const leagueTab = createElement("div", "country-info");
   const elems = {
     leagueName: createElement("h3", "league-name"),
     imgCountryLogo: createElement("div", "country-logo"),
     roundLeague: createElement("div", "round-league"),
   };
 
   elems.imgCountryLogo.style.backgroundImage = `url('${logo}')`;
   elems.leagueName.textContent = `${country} - ${league} `;
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

  const img = createImage(teamData);
  const name = createName(teamData);
  const goals = createGoals(teamData);
  const halftime = createHalftimeGoals(teamData);

  const team = createElement("div", "team-container");
  
  team.appendChild(img);
  team.appendChild(name);
  team.appendChild(goals);
  team.appendChild(halftime);

  return team;
}
 function createImage(teamData) {
  const defaultTeamSrc = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibBBDPDNz7dyO9xcO6BjNbxzaIja9uehuCm3OoNkeaLGArmzElvpIP7fBp4Q34iOtyHcHAELbnmxOih4HZzKIUJqyW-k7MLK5EwoO23yoVxJRG3eLx8fpE6V9PCpXPZOjmuS2rSdQ8k4VHnf3nJX05M0ZerbdDnGOG0YmVncuAm2ABLrvYhQWSTQBzp5cQ/s320/team_shield_a.webp';
  const img = createElement("img", "team-logo");

  img.src = teamData.logo || defaultTeamSrc;
  img.alt = teamData.name;
  img.width = 24; 
  img.height = 24;

  return img
}

function createName(teamData) {
  const name = createElement("div", "team");
  name.textContent = teamData.name;
  return name;
}

function createGoals(teamData) {
  const goals = createElement("div", "team-goals");
  goals.textContent = getGoalsString(teamData.goals);
  return goals;
}

function getGoalsString(goals) {
  return goals || "-";
}

function createHalftimeGoals(teamData) {
  const halftime = createElement("div", "team-goals-halftime");
  halftime.textContent = getHalftimeGoalsString(teamData.goalshalftime);
  return halftime;
} 

function getHalftimeGoalsString(goals) {
  return goals ? `(${goals})` : ""; 
}

function getLeague(leagueKey) {
  if (!leagueCache[leagueKey]) {
    leagueCache[leagueKey] = createLeague();
  }
  return leagueCache[leagueKey];
}
function createLeague() {
  const league = createElement("div", "league-container");
  league.hasBeenCreated = false;
  return league;
}
/*****************************Common Functions*******************************/
function parseApiResponse(match) {
   const defaultTeamSrc = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibBBDPDNz7dyO9xcO6BjNbxzaIja9uehuCm3OoNkeaLGArmzElvpIP7fBp4Q34iOtyHcHAELbnmxOih4HZzKIUJqyW-k7MLK5EwoO23yoVxJRG3eLx8fpE6V9PCpXPZOjmuS2rSdQ8k4VHnf3nJX05M0ZerbdDnGOG0YmVncuAm2ABLrvYhQWSTQBzp5cQ/s320/team_shield_a.webp';
  const [homeGoals, awayGoals] = match.event_final_result.split("-");
  const partialGoalsHalftime = match.event_halftime_result.replace(/ - /, "-");
  const [homeGoalsHalftime, awayGoalsHalftime] = partialGoalsHalftime.split("-");
  const [year, month, day] = match.event_date.split("-");
  const [hour, minutes] = match.event_time.split(":");
  const leagueLogo = match.league_logo ? match.league_logo : match.country_logo;
  const homeTeamLogo =  match.home_team_logo.status !==404  ? match.home_team_logo : defaultTeamSrc;
  const awayTeamLogo =  match.away_team_logo.status   !==404 ? match.away_team_logo : defaultTeamSrc;
  return {
    key:match.event_key,
    leaguekey:match.league_key,
    competition: {
      logo: leagueLogo,
      country: match.country_name,
      name: match.league_name,
      season: match.league_season,
      stadium: match.event_stadium,
      referee: match.event_referee,
    },
    date: {
      timezone: getTimeZone(),
      day:day,
      month:month,
      year:year,
      hour:hour,
      minutes:minutes,
    },
    round: match.league_round,
    status:match.event_status,
    teams: [
      {
        logo: homeTeamLogo,
        name: match.event_home_team,
        goals: homeGoals,
        goalshalftime: homeGoalsHalftime,
      },
      {
        logo: awayTeamLogo,
        name: match.event_away_team,
        goals: awayGoals,
        goalshalftime: awayGoalsHalftime,
      },
    ],
  };
}
function translateRound(roundValue, leagueValue) {
  if (roundValue === "") {
    const leagueTemp = leagueValue.replace(/ - /, "-");
    const leagueRound = leagueTemp.split('-')[1];
  switch(leagueRound){
    case "Qualification":
      return "Clasificación";
    case "Preliminary Round":
        return "Ronda Preliminar";
    case "8th Round":
        return "Octava Ronda";
    case "Club Friendlies":
    case "Club Friendlies 1":
    case "Club Friendlies 2":
    case "Club Friendlies 3":
    case "Club Friendlies 4":
    case "Club Friendlies 5":
      return "Amistosos";
    default:
      return "Amistosos";
           }
  } else {
    const [round, number] = roundValue.split(" ");
    switch (round) {
      case "Round":
        return number === 'of' ? "Octavos-Final" : `Jornada ${number}`;
      case "Final":
        return "Final";
      case "Semi-finals":
        return "Semi-Final";
      case "Quarter-finals":
        return "Cuartos-Final";
      default:
        return `${roundValue}'`;
    }
  }
}

function translateStatus(status) {
  switch (status) {
    case "":
      return "Pendiente";
    case "Postponed":
      return "Aplazado";
    case "Abandoned":
      return "Suspendido";
    case "Cancelled":
      return "Cancelado";
    case "Half Time":
      return "Descanso";
    case "Finished":
    case "After ET":
    case "After Pen.":
      return "Finalizado";
    default:
      return `${status}'`;
  }
}

function createElement(tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
}
function removeFirstChild(parentElement) {
  if (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
function addMatch(match, matches) {
  matches.push(match);
}
/************************** Get Data and Save Data Functions*************************/

function groupMatchesByLeague(matches) {
  const matchesByLeague = {};
  matches.forEach(match => {
    const leagueName = match.league_name;
    if (!matchesByLeague[leagueName]) {
      matchesByLeague[leagueName] = [];
    }

    matchesByLeague[leagueName].push(match);
  });
  return matchesByLeague;
}
function sortMatchesByHours(matchesByLeague) {
  const sortedMatchesByLeague = {};

  for (const leagueKey in matchesByLeague) {
    if (matchesByLeague.hasOwnProperty(leagueKey)) {
      const matches = matchesByLeague[leagueKey];

      matches.sort((a, b) => {
        const aTime = getTimeInMinutes(a.event_time);
        const bTime = getTimeInMinutes(b.event_time);
        return aTime - bTime;
      });

      sortedMatchesByLeague[leagueKey] = matches;
    }
  }

  return sortedMatchesByLeague;
}
async function getMatches(date) {
  const matches = [];
  const apiKey = "3aade9eedc75fcad8ca4474270a52fe08cb8cccea5bfda3b684d244c07f91a24";
  const apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=${getDateString(date)}&to=${getDateString(date)}`;
  const response = await fetch(apiUrl)

  const data = await response.json();

  if (data && data.result && Array.isArray(data.result)) {
    for (const match of data.result) {
      const eventTime = match.event_time;
      const eventTimeMinusOneHour = subtractHour(eventTime, 1);
      match.event_time = eventTimeMinusOneHour;
      addMatch(match, matches);
    }
  }
  return matches;
}
/************************** Date Functions*************************/
function getTimeZone() {
  const selectedTimezone = timezoneSelect.value;  
   return selectedTimezone;
 }
 
 function setTimeZone() {
 const dateElements = document.querySelectorAll(".date");
 const timeElements = document.querySelectorAll(".time");
 const timeZoneLabels = document.querySelectorAll(".label-time");
 const selectedTimezone = timezoneSelect.value;
 dateElements.forEach((dateElement) => {
  matchDates.push(dateElement.textContent);
});
 
timeElements.forEach((timeElement) => {
  matchTimes.push(timeElement.textContent);
});
 const initialTimes = matchTimes;
 const initialDates = matchDates;
  timeZoneLabels.forEach((element, index) => {
       element.textContent = selectedTimezone;
     });
   if (selectedTimezone === "GMT+0") {
     dateElements.forEach((element, index) => {
       element.textContent = initialDates[index];
     });
 
     timeElements.forEach((element, index) => {
       element.textContent = initialTimes[index];
     });
   } else {
     const offset = parseInt(selectedTimezone.replace("GMT", ""));
 
     dateElements.forEach((element, index) => {
       const [days,months,years] = initialDates[index].split("-");
       const [hours, minutes] = initialTimes[index].split(":");
       let day = parseInt(days);
       let month = parseInt(months);
       let year = parseInt(years);
       let hour = parseInt(hours) + offset;
 
       if (hour < 0) {
         hour += 24;
         day -= 1;
       } else if (hour >= 24) {
         hour -= 24;
          day += 1;
       }
       const formattedDate = day.toString().padStart(2, "0") + "-" + month.toString().padStart(2, "0")+"-"+year;
       element.textContent = formattedDate;
     });
 
     timeElements.forEach((element, index) => {
       const [hours, minutes] = initialTimes[index].split(":");
       let hour = parseInt(hours) + offset;
 
       if (hour < 0) {
         hour += 24;
       } else if (hour >= 24) {
         hour -= 24;
       }
 
       const formattedTime = hour.toString().padStart(2, "0") + ":" + minutes;
       element.textContent = formattedTime;
     });
   }
 }
function getDateString(date) {
  const [day,month,year] = date.split("/")
  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function getShortDay(date) {
  const dateParts = date.split("/");
  const formattedDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
  const dateObject = new Date(formattedDate);
  const dayShort = dateObject.toLocaleDateString('es-ES', { weekday: 'short' });
  return `${dayShort}`;
}

function getTimeInMinutes(time) {
  const hourTemp = time.replace(/ - /, "-");
   const [hour, minutes] = hourTemp.split(":");
   return parseInt(hour) * 60 + parseInt(minutes);
 }
 function subtractHour(time,substract) {
  const [hours, minutes] = time.split(':');
  let hour = parseInt(hours, 10);
  let minute = parseInt(minutes, 10);
  hour = (hour - substract + 24) % 24;

  const formattedHour = hour < 10 ? `0${hour}` : hour.toString();
  const formattedMinute = minute < 10 ? `0${minute}` : minute.toString();

  return `${formattedHour}:${formattedMinute}`;
}
/************************** Toggle Functions*************************/
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
    nextDates.push(`${getShortDay(formatDate(nextDate))} ${formatDate(nextDate)}`);
  }
  return nextDates;
}

function getPrevDates() {
  const prevDates = [];
  const currentDate = new Date();
  for (let i = 0; i < 5; i++) {
    const prevDate = new Date(currentDate.getTime());
    prevDate.setDate(currentDate.getDate() - i - 1);
    prevDates.push(`${getShortDay(formatDate(prevDate))} ${formatDate(prevDate)}`);
  }
  return prevDates.reverse();
}
/*********************** SelectDate Functions ***************************/
function showDate(event) {
  matchTimes = [];
  matchDates = [];
  leagueCache = null;
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
  matchTimes = [];
  matchDates = [];
  leagueCache = null;
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
function getFormattedDate(dateString) {
  const dateParts = dateString.split('/');
  return `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
}