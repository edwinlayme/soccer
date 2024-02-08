function getMatchByKey(listMatches,eventKey) {
    let matchByKey = {};
      for (const leagueKey in listMatches) {
      const matches = listMatches[leagueKey];
      const match = matches.find(match => match.event_key === eventKey);
      if (match) {
        matchByKey = match;
        break;
      }
    }
    return matchByKey;
  }

  export {getMatchByKey};