import { createElement } from "../../../functions/common/common.js";
import createTab from "./Buttons/Tab.js";
import createSoccerField from "./Elements/SoccerField.js";
import createInfoModal from "./InfoModal.js";

function createTabsInfo(match){
    const container = createElement("div","tabs-container");
    const elems = {
            additional : createTab('additional-tab','tab','checked','Detalles'),
            lineups : createTab('lineups-tab','tab','','Alineaciones'),
            resume : createTab('resume-tab','tab','','Resumen'),
            tabAdditionalContainer: createElement("div","tab"),
            tabLineupsContainer: createElement("div","tab"),
            tabResumeContainer: createElement("div","tab"),
            additionalContent : createElement("div", "tab-content"),
            lineupsContent : createElement("div", "tab-content"),
            resumeContent : createElement("div", "tab-content"),
            infoMatch : createInfoModal (match),
            soccerField: createSoccerField(),
    };
    elems.additionalContent.appendChild(elems.infoMatch); 
    elems.lineupsContent.innerHTML = elems.soccerField;
    elems.resumeContent.textContent = "tab3";
    elems.tabAdditionalContainer.appendChild(elems.additionalContent);
    elems.tabLineupsContainer.appendChild(elems.lineupsContent);
    elems.tabResumeContainer.appendChild(elems.resumeContent);
    container.appendChild(elems.additional.tabInput);
    container.appendChild(elems.additional.tabLabel);
    container.appendChild(elems.lineups.tabInput);
    container.appendChild(elems.lineups.tabLabel);
    container.appendChild(elems.resume.tabInput);
    container.appendChild(elems.resume.tabLabel);
    container.appendChild(elems.tabAdditionalContainer);
    container.appendChild(elems.tabLineupsContainer);
    container.appendChild(elems.tabResumeContainer);
  

   return container;
}
export default createTabsInfo;