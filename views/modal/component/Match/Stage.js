import { createElement } from "../../../../functions/common/common.js"
import translateText from "../../../../functions/translate/tranlatetext.js";

const addStage = (stage) =>{
    const stageContainer = createElement("div","modal-stage");

    const elems = {
        container : createElement("div","modal-stage-info"),
        icon: createElement("span","material-symbols-outlined"),
        label: createElement("p","label-stage"),
        stageElement : createElement("p","text-stage"),
    }
     elems.icon.textContent = 'hourglass';   
     elems.label.textContent = 'Temporada: ';
     elems.stageElement.textContent = translateText(stage,'ES');
     //elems.stageElement.textContent = stage
     elems.container.appendChild(elems.icon);
     elems.container.appendChild(elems.label);
     stageContainer.appendChild(elems.container);
     stageContainer.appendChild(elems.stageElement);

     return stageContainer;
};

export default addStage;