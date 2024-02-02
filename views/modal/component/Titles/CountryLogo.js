import { createElement } from "../../../../functions/common/common.js";

function createCountryLogo(url){
    const defaultLogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYXCgqiWDXIUcLumu7_fyTD7cKTfmc1uCylVwGwiOCXwvn-ngNoEIuIkKcK3ZJadFhJEcnQYnU2ZuPk15qqRkaZbXIrQHzjpH3Xk-dbOb6o9oIwdeGmbbAkQ-8Rla-krXfe5VoesWB4tXoT_Efz2L7D8-0efNdw9Hia9Ps010NbZ3uYVLey-qJtRrosLpf/s320/32x32_World_Cup_FIFA.webp';
    const logo = url.country_logo || defaultLogo;
    const countryLogo = createElement("div","modal-country-logo");
    countryLogo.style.backgroundImage = `url('${logo}')`;
    return countryLogo;
}

export default createCountryLogo;