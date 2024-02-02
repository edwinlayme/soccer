import { createElement } from "../../../../functions/common/common.js";

function createTeam(logo,teamName){
    const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibBBDPDNz7dyO9xcO6BjNbxzaIja9uehuCm3OoNkeaLGArmzElvpIP7fBp4Q34iOtyHcHAELbnmxOih4HZzKIUJqyW-k7MLK5EwoO23yoVxJRG3eLx8fpE6V9PCpXPZOjmuS2rSdQ8k4VHnf3nJX05M0ZerbdDnGOG0YmVncuAm2ABLrvYhQWSTQBzp5cQ/s320/team_shield_a.webp';
    const team = createElement("div","modal-team");
    const elems ={
         teamElement: createElement("div","modal-team-element"),
         logo: createElement("img","home-team-logo"),
         name:  createElement("span", "team-name"),
    };
    elems.logo.onerror = () => {
      elems.logo.onerror = null; 
      elems.logo.src = defaultLogo;
    };
    elems.name.textContent = teamName;
    elems.logo.src = logo || defaultLogo;
    elems.logo.alt = teamName;
    elems.logo.loading = 'lazy';
    elems.teamElement.appendChild(elems.logo);
    team.appendChild(elems.teamElement);
    team.appendChild(elems.name);
    return team;
  }

export default createTeam;