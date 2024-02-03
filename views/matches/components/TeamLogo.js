import { createElement } from "../../../functions/common/common.js";

function createLogo(teamData){
    const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWRTNMpdvNQbNzEWlL1vljBVn4WHjpoWsg0IHaI-NyX6vgsi3phw7XHNR9SbpwcvACyAEu6YP-GXePYIhq9mNbEZYUkbX5airXLiTMdPzctwwpYV1_S-my3mVe-_TGuFEnnRoR0ade_r7tU5Tuefw7_170OQuiItRzh9W5JG5UtaGqnEsU0GVJ0paGr1bD/s320/defaultlogo.web';
    const logo =  createElement("img", "team-logo");
    logo.onerror =  () => {
    logo.src = defaultLogo;
    console.clear();
    };
  
    logo.src = teamData.logo || defaultLogo;
    logo.alt = teamData.name;
    logo.width = 24;
    logo.height = 24;
    logo.loading = 'lazy';
    return logo;
  }
  
export default createLogo;