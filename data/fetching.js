import { subtractHour } from '../functions/dates/hours.js';
import {getDateString} from '../functions/dates/dates.js';

async function getMatches(date) {
    const apiKey = "3aade9eedc75fcad8ca4474270a52fe08cb8cccea5bfda3b684d244c07f91a24";
    const apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=${getDateString(date)}&to=${getDateString(date)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    if (data && data.result && Array.isArray(data.result)) {
      return data.result.map(match => {
        const eventTimeMinusOneHour = subtractHour(match.event_time, 1);
        return { ...match, event_time: eventTimeMinusOneHour };
      });
    }
  
    return [];
  }

  export {getMatches};