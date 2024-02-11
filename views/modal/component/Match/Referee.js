import { createElement } from "../../../../functions/common/common.js";

function addReferee(referee){
    const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYXCgqiWDXIUcLumu7_fyTD7cKTfmc1uCylVwGwiOCXwvn-ngNoEIuIkKcK3ZJadFhJEcnQYnU2ZuPk15qqRkaZbXIrQHzjpH3Xk-dbOb6o9oIwdeGmbbAkQ-8Rla-krXfe5VoesWB4tXoT_Efz2L7D8-0efNdw9Hia9Ps010NbZ3uYVLey-qJtRrosLpf/s320/32x32_World_Cup_FIFA.webp';
    const refereeContainer = createElement("div","modal-referee");
    const refereeName = referee.event_referee.split(',')[0];
    if(refereeName){
        const logo = referee.country_logo || defaultLogo;
   const elems = {
                 labelContainer: createElement("div","label-referee-info"),
                 icon: createElement("span","material-symbols-outlined"),
                 label: createElement("p","label-referee"),
                 nameContainer: createElement("div","elements-container"),
                 name: createElement("p","referee-name"),
                 country: createElement("span","country-referee-logo"),
   };
   elems.icon.textContent = 'sports';
   elems.label.textContent = 'Arbitro: ';
   elems.name.textContent = refereeName;
   elems.country.style.backgroundImage = `url('${logo}')`;
   elems.labelContainer.appendChild(elems.icon);
   elems.labelContainer.appendChild(elems.label);
   elems.nameContainer.appendChild(elems.name);
   elems.nameContainer.appendChild(elems.country);
   refereeContainer.appendChild(elems.labelContainer)
   refereeContainer.appendChild(elems.nameContainer);

   return refereeContainer;
  }
   else
      return refereeContainer;
}
export default addReferee;