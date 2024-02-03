import { createElement } from "../../../../functions/common/common.js";

function createTeam(logo,teamName){
  const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWRTNMpdvNQbNzEWlL1vljBVn4WHjpoWsg0IHaI-NyX6vgsi3phw7XHNR9SbpwcvACyAEu6YP-GXePYIhq9mNbEZYUkbX5airXLiTMdPzctwwpYV1_S-my3mVe-_TGuFEnnRoR0ade_r7tU5Tuefw7_170OQuiItRzh9W5JG5UtaGqnEsU0GVJ0paGr1bD/s320/defaultlogo.web';
    const team = createElement("div","modal-team");
    const elems ={
         teamElement: createElement("div","modal-team-element"),
         logo: createElement("img","home-team-logo"),
         name:  createElement("span", "team-name"),
    };
    elems.logo.onerror = () => {
      elems.logo.onerror = null; 
      elems.logo.src = defaultLogo;
      console.clear();
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