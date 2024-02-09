import { createElement } from "../../../functions/common/common.js";
import createTab from "./Buttons/Tab.js";

function createTabsInfo(){
    const container = createElement("div","modal-tabs");
    const elems = {
            resume : createTab('resume-tab','tab','checked','Resume'),
            lineups : createTab('lineups-tab','tab','','Lineups'),
    };
   container.appendChild(elems.resume.tabInput);
   container.appendChild(elems.resume.tabLabel);
   container.appendChild(elems.lineups.tabInput);
   container.appendChild(elems.lineups.tabLabel);
   return container;
}
export default createTabsInfo;