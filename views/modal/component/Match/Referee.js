import { createElement } from "../../../../functions/common/common.js";

function addReferee(referee){
    const refereeContainer = createElement("div","modal-referee");
    if(referee){
   const elems = {
                 labelContainer: createElement("div","label-referee-info"),
                 icon: createElement("span","material-symbols-outlined"),
                 label: createElement("p","label-referee"),
                 name: createElement("p","referee-name"),
   };
   elems.icon.textContent = 'sports';
   elems.label.textContent = 'Arbitro: ';
   elems.name.textContent = referee;
   elems.labelContainer.appendChild(elems.icon);
   elems.labelContainer.appendChild(elems.label);
   refereeContainer.appendChild(elems.labelContainer)
   refereeContainer.appendChild(elems.name);
   return refereeContainer;
  }
  else
  return refereeContainer;
}
export default addReferee;