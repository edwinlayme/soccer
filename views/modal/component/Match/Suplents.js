import { createElement } from "../../../../functions/common/common.js";

const addSuplents = (data) =>{
    const homeTeamLineups  = data.lineups.home_team?data.lineups.home_team:'';
    const awayTeamLineups  = data.lineups.away_team?data.lineups.away_team:'';
const elems = {
    suplentContainer: createElement("div","suplents-container"),
    label: createElement("h3","label-suplents"),
    lineupsContainer: createElement("div","modal-lineups-suplents"),
    homeLineup : createElement("ul","home-lineup"),
    awayLineup : createElement("ul","away-lineup"),
}
         if( homeTeamLineups!=='' && awayTeamLineups!==''){
            addTeamName(elems.homeLineup,data.event_home_team);
            addTeamName(elems.awayLineup,data.event_away_team);
            elems.label.textContent = "suplentes";
            homeTeamLineups.substitutes.forEach(player => {
            const li = document.createElement("li");
            const name = createElement("span","name_player");
            const numberplayer = createElement("span","number_player");
            name.textContent = player.player;
            numberplayer.textContent = player.player_number;
            li.appendChild(numberplayer);
            li.appendChild(name);
            elems.homeLineup.appendChild(li);
         });
         awayTeamLineups.substitutes.forEach(player => {
            const li = document.createElement("li");
            const name = createElement("span","name_player");
            const numberplayer = createElement("span","number_player");
            name.textContent = player.player;
            numberplayer.textContent = player.player_number;
            li.appendChild(numberplayer);
            li.appendChild(name);
            elems.awayLineup.appendChild(li);
         });
           elems.lineupsContainer.appendChild(elems.homeLineup);         
           elems.lineupsContainer.appendChild(elems.awayLineup);
           elems.suplentContainer.appendChild(elems.label);
           elems.suplentContainer.appendChild(elems.lineupsContainer);
           return elems.suplentContainer;
           }
           else
           return elems.suplentContainer;
}
const addTeamName = (container,team) => {
    const li = document.createElement("li");
    const name = createElement("h3","name_team");
    name.textContent = team;
    li.appendChild(name);
    container.appendChild(li);
    return container;
}
export default addSuplents;