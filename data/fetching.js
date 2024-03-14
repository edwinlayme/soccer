import { subtractHour } from '../functions/dates/hours.js';
import {getDateString} from '../functions/dates/dates.js';

async function getMatches(date) {
    try {
      const apiKey = "139aad9883ccd042c0d16ac6db09f501cee668b61cd5d30ef6e711866ec3c179";
      const apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${apiKey}&from=${getDateString(date)}&to=${getDateString(date)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data && data.result && Array.isArray(data.result)) {
        return data.result.map(match => {
          const eventTimeMinusOneHour = subtractHour(match.event_time, 1);
          return { ...match, event_time: eventTimeMinusOneHour ,};
        });
      }
      } catch (error) {
      console.error("Error fetching matches:", error);
    }
  }

  
  export { getMatches };