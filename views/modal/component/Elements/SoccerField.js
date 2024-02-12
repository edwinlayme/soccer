import { createElement } from "../../../../functions/common/common.js";

const createSoccerField = () => {
   const logo = 'https://edwinlayme.github.io/soccer/assets/footballpitch.svg';
    const container = createElement("div","soccer-field");
    container.style.backgroundImage = `url(${logo})`;
    return container;
}
export default createSoccerField;