import { subtractHour } from '../functions/dates/hours.js';
import {getDateString} from '../functions/dates/dates.js';

async function getMatches(date) {
    try {
      const apiKey = "272ddd797cae75baeb1e6b5a5b1c31a963e0f0997dc25192526ef9745ef1b84e";
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