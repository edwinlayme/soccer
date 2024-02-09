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

    elems.name.textContent = getOnlyNameStadium(stadium);    elems.labelContainer.appendChild(elems.icon);
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
    /*if (text.includes(',')) {
        let [name, site] = text.split(",");
        site = site.replace(/ /g, "");
        if (name) {
           // const regex = /\b(Estadio|Stadium|Estádio|Stade|Stadio|Stadionul|Stadion)\b/gi;
            const replacedText = removeStadiumWords(name);
            return `${replacedText} (${site})`;
        }
    } else {
        return text;
    }*/
}
function removeStadiumWords(text) {
    const stadiumWords = ["Estadio", "Stadium", "Estádio", "Stade", "Stadio", "Stadionul", "Stadion","Mini"];
    let obj = {};
    
    text.split(" ").forEach(word => {
        obj[word] = true;
    });
        stadiumWords.forEach(word => {
        delete obj[word];
    });
    
    // Concatenar las palabras restantes en un string
    return Object.keys(obj).join(" ");
}

export default addStadium;