import { createElement } from "../../../functions/common/common.js";
import { translateRound } from "../../../functions/translate/round.js";

function createLeagueTitles(url, country, league, round) {
    const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYXCgqiWDXIUcLumu7_fyTD7cKTfmc1uCylVwGwiOCXwvn-ngNoEIuIkKcK3ZJadFhJEcnQYnU2ZuPk15qqRkaZbXIrQHzjpH3Xk-dbOb6o9oIwdeGmbbAkQ-8Rla-krXfe5VoesWB4tXoT_Efz2L7D8-0efNdw9Hia9Ps010NbZ3uYVLey-qJtRrosLpf/s320/32x32_World_Cup_FIFA.webp';
    const logo = url || defaultLogo;
    const countryName = country === 'intl'? 'Internacional': country;
    const leagueNameTemp = league.replace(/ - /, "-");
    const leagueName = leagueNameTemp.split("-")[0];
     const leagueTab = createElement("div", "country-info");
     const elems = {
       leagueTitle: createElement("h3", "league-name"),
       name: createElement("span","name"),
       country: createElement("span","country"),
       imgCountryLogo: createElement("div", "country-logo"),
       roundLeague: createElement("div", "round-league"),
     };
      
     elems.imgCountryLogo.style.backgroundImage = `url('${logo}')`;
     elems.name.textContent = countryName;
     elems.country.textContent = leagueName;
     elems.roundLeague.textContent = `${translateRound(round, league)}`;
   
     elems.leagueTitle.appendChild(elems.name);
     elems.leagueTitle.appendChild(elems.country);
     
     leagueTab.appendChild(elems.imgCountryLogo);
     leagueTab.appendChild(elems.leagueTitle);
     leagueTab.appendChild(elems.roundLeague);
   
     return leagueTab;
   }

   export default createLeagueTitles;