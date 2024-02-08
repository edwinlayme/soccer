import { createElement } from "../../../../functions/common/common.js";

function addStadium(stadium){
    const stadiumContainer = createElement("div","modal-stadium");
    const elems = {
        labelContainer: createElement("div","label-stadium-info"),
        icon: createElement("span","material-symbols-outlined"),
        label: createElement("p","label-stadium"),
        name: createElement("p","stadium-name"),
    };
    elems.icon.textContent = 'stadium';   
    elems.label.textContent = 'Estadio: ';

    elems.name.textContent = getOnlyNameStadium(stadium);
   // elems.name.textContent = stadium;
    elems.labelContainer.appendChild(elems.icon);
    elems.labelContainer.appendChild(elems.label);
    stadiumContainer.appendChild(elems.labelContainer);
    stadiumContainer.appendChild(elems.name);
    return stadiumContainer;
}

function getOnlyNameStadium(text)
{
    if(text){
      const regex = /(Estadio|Stadium|Estádio|Stade)\s+/ig;
      const replacedText = text.replace(regex, "");
      return replacedText;
     }
    else
    return text;
}

export default addStadium;