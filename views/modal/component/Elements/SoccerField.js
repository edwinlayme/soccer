import { createElement } from "../../../../functions/common/common.js";
import addLineUps from "../Match/LineUps.js";
import addSuplents from "../Match/Suplents.js";

const createSoccerField = (data) => {
   const logo = 'https://edwinlayme.github.io/soccer/assets/footballpitch.svg';
   const elems = {
        container : createElement("div","soccer-field"),
        toggle :createElement("span","arrow-right"),
        suplentContainer: addSuplents(data),
        lineups: addLineUps(data),
    }
    if(empty(data)!==0){
      let isContainerVisible = false;
     elems.container.style.backgroundImage = `url(${logo})`;
     elems.toggle.addEventListener('click', function() {
      isContainerVisible = !isContainerVisible;
      elems.suplentContainer.classList.toggle('hidden', !isContainerVisible);
    });
    elems.container.appendChild(elems.lineups);
    elems.container.appendChild(elems.toggle);
    elems.container.appendChild(elems.suplentContainer);
    return elems.container;
   }
   else
    return elems.container;
}
const empty = (data) =>{
const homeLineup = data.lineups.home_team;
const homeStartingEmpty = homeLineup.starting_lineups.length; 
const homeSubsEmpty = homeLineup.substitutes.length;

// Verificar visitante
const awayLineup = data.lineups.away_team;
const awayStartingEmpty = awayLineup.starting_lineups.length;
const awaySubsEmpty = awayLineup.substitutes.length;

// Resultado
if (homeStartingEmpty===0 && homeSubsEmpty===0 && awayStartingEmpty===0 && awaySubsEmpty===0)
  return 0;
else 
  return 1;
}

export default createSoccerField;