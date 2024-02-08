import { createElement } from "../../../functions/common/common.js";

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

  export default createLeagueIcons;