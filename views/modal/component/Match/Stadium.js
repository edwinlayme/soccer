import { createElement } from "../../../../functions/common/common.js";

function addStadium(stadium){
    const stadiumContainer = createElement("div","modal-stadium");
    if(stadium){
    const elems = {
        labelContainer: createElement("div","label-stadium-info"),
        icon: createElement("span","material-symbols-outlined"),
        label: createElement("p","label-stadium"),
        name: createElement("p","stadium-name"),
    };
    elems.icon.textContent = 'stadium';   
    elems.label.textContent = 'Estadio: ';

    elems.name.textContent = getOnlyNameStadium(stadium);   
     elems.labelContainer.appendChild(elems.icon);
    elems.labelContainer.appendChild(elems.label);
    stadiumContainer.appendChild(elems.labelContainer);
    stadiumContainer.appendChild(elems.name);
    return stadiumContainer;
    }
    else
    return stadiumContainer;
}

function getOnlyNameStadium(text) {
    const regex = /\b(Estadio|Stadium|Estádio|Stade|Stadio|Stadionul|Stadion|Mini Estadio)\b/gi;
    const replacedText = text.replace(regex, "").trim();
    if(replacedText.includes('('))
       return replacedText;
    else{
        if(replacedText.includes(',')){
        let [name, site] = replacedText.split(",");
        site = site.replace(/ /g, "");
        return `${name} (${site})`;
        }
        else
          return replacedText;
    }
}

export default addStadium;