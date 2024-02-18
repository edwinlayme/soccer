import { createElement } from "../../../../functions/common/common.js";

const addLineUps = (data) =>{
    const lineupsContainer = createElement("div","modal-lineups");
    const homeTeamLineups  = data.lineups.home_team?data.lineups.home_team:'';
    const awayTeamLineups  = data.lineups.away_team?data.lineups.away_team:'';
    const elems = {
       homeLineup : createElement("ul","home-lineup"),
       awayLineup : createElement("ul","away-lineup"),
    }
    if( homeTeamLineups!=='' && awayTeamLineups!==''){
    addTeamName(elems.homeLineup,data.event_home_team);
    addTeamName(elems.awayLineup,data.event_away_team);
    homeTeamLineups.starting_lineups.forEach(player => {
       const li = document.createElement("li");
       const name = createElement("span","name_player");
       const numberplayer = createElement("span","number_player");
       name.textContent = player.player;
       numberplayer.textContent = player.player_number;
       li.appendChild(numberplayer);
       li.appendChild(name);
       elems.homeLineup.appendChild(li);
    });
    awayTeamLineups.starting_lineups.forEach(player => {
       const li = document.createElement("li");
       const name = createElement("span","name_player");
       const numberplayer = createElement("span","number_player");
       name.textContent = player.player;
       numberplayer.textContent = player.player_number;
       li.appendChild(numberplayer);
       li.appendChild(name);
       elems.awayLineup.appendChild(li);
    });
    if (homeTeamLineups.coaches.length > 0) {
       addCoacheName(elems.homeLineup,homeTeamLineups.coaches[0].coache);
    }
    if (awayTeamLineups.coaches.length > 0) {
       addCoacheName(elems.awayLineup,awayTeamLineups.coaches[0].coache);
    }
    lineupsContainer.appendChild(elems.homeLineup);
    lineupsContainer.appendChild(elems.awayLineup);
    return lineupsContainer;
   }
   else
     return lineupsContainer;
   }
   const addTeamName = (container,team) => {
    const li = document.createElement("li");
    const name = createElement("h3","name_team");
    name.textContent = team;
    li.appendChild(name);
    container.appendChild(li);
    return container;
}

const addCoacheName = (container,coache) => {
    const li = document.createElement("li");
    const label = createElement("span","label_coache");
    const name = createElement("span","name_coache");
    label.textContent = "DT.:";
    name.textContent = coache;
    li.appendChild(label);
    li.appendChild(name);
    container.appendChild(li);
    return container;
}
   export default addLineUps;