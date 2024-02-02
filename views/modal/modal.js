import { matches } from "../../constants/cache.js";
import { getMatchByKey } from "../../data/match.js";
import { createMatchTitles,createTeamsContainer } from "./component/index.js";

function showModal(matchKey) {
    const match = getMatchByKey(matches.value,matchKey);
    const modal = document.getElementById('modal');
    const matchContent = document.getElementById('modal-content');
    matchContent.innerHTML = '';
    const titles = createMatchTitles(match);
    const teams = createTeamsContainer(match);
    console.log(match);   
    matchContent.appendChild(titles); 
    matchContent.appendChild(teams);   
    modal.style.display = 'block'; 
  }

window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

export default showModal;