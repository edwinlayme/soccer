function groupMatchesByLeague(matches) {
  return matches.reduce((matchesByLeagueAndCountry, match) => {
    const leagueName = match.league_name;
    const leagueKey = match.league_key;

    const key = `${leagueName}_${leagueKey}`;

    matchesByLeagueAndCountry[key] = matchesByLeagueAndCountry[key] || [];

    matchesByLeagueAndCountry[key].push(match);

    return matchesByLeagueAndCountry;
  }, {});
}

export {groupMatchesByLeague};

