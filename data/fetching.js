import { subtractHour } from '../functions/dates/hours.js';
import {getDateString} from '../functions/dates/dates.js';

async function getMatches(date) {
    try {
      const apiKey = "4a3a5b3c5053d42468ae2866bc14a4492b5eaa3d40d59db2324ecd8d9feb2828";
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