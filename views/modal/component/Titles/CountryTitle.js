import { createElement } from "../../../../functions/common/common.js";

function createCountryTitle(country){
    const countryName = createElement("div","modal-country");
    const name = country.country_name === 'intl'? 'Internacional': country.country_name;
    countryName.textContent = name;
    return countryName;
}

export default createCountryTitle;