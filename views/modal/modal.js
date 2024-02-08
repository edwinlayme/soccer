import { matches } from "../../constants/cache.js";
import { getMatchByKey } from "../../data/match.js";
import { createMatchTitles,createTeamsContainer,createInfoModal } from "./component/index.js";

function showModal(matchKey) {
    const match = getMatchByKey(matches.value,matchKey);
    const modal = document.getElementById('modal');
    const matchContent = document.getElementById('modal-content');
    matchContent.innerHTML = '';
    const elems ={
              titles : createMatchTitles(match),
              teams : createTeamsContainer(match),
              infoMatch : createInfoModal (match),
             }
//    console.log(match);   
    matchContent.appendChild(elems.titles); 
    matchContent.appendChild(elems.teams);  
    matchContent.appendChild(elems.infoMatch);    
    modal.style.display = 'block'; 
  }

window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

export default showModal;