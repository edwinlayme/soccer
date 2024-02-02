import { createElement } from '../../../functions/common/common.js';
import createCountryLogo from './Titles/CountryLogo.js';
import createCountryTitle from './Titles/CountryTitle.js';
import createLeagueName from './Titles/LeagueName.js';
import createLeagueRound from './Titles/LeagueRound.js';
import createClosedModal from './Titles/CloseModal.js';

function createMatchTitles(match){
    const titles = createElement("div","modal-titles");
    const elems = {
    countryLogo : createCountryLogo(match),
        country : createCountryTitle(match),
        league  : createLeagueName(match),
        round   : createLeagueRound(match),
        close : createClosedModal('X'),
   }
    titles.appendChild(elems.countryLogo);  
    titles.appendChild(elems.country);
    titles.appendChild(elems.league);
    titles.appendChild(elems.round);
    titles.appendChild(elems.close);
  
    return titles;
  }

export default createMatchTitles;