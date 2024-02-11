import { createElement } from "../../../../functions/common/common.js"

const addSeason = (season) =>{
    const elems = {
        container : createElement("div","modal-season"),
        icon: createElement("span","material-symbols-outlined"),
        seasonElement : createElement("p","text-season"),
    }
    elems.icon.textContent = 'today';   
     elems.seasonElement.textContent = season;
     elems.container.appendChild(elems.icon);
     elems.container.appendChild(elems.seasonElement);

     return elems.container
};

export default addSeason;