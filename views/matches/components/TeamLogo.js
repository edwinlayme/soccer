import { createElement } from "../../../functions/common/common.js";

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

export default createLogo;