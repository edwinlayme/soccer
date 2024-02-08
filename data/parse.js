export function parseApiResponse(match) {
    const [homeGoals, awayGoals] = match.event_final_result.replace(/ - /, "-").split("-");
    const partialGoalsHalftime = match.event_halftime_result.replace(/ - /, "-");
    const [homeGoalsHalftime, awayGoalsHalftime] = partialGoalsHalftime.split("-");
    const [year, month, day] = match.event_date.split("-");
    const [hour, minutes] = match.event_time.split(":");
    const leagueLogo = match.country_logo ? match.country_logo : match.league_logo;
    return {
      key:match.event_key,
      leaguekey:match.league_key,
      competition: {
        logo: leagueLogo,
        country: match.country_name,
        name: match.league_name,
        season: match.league_season,
        stadium: match.event_stadium,
        referee: match.event_referee,
      },
      date: {
        timezone: 'GTM+0',
        day:day,
        month:month,
        year:year,
        hour:hour,
        minutes:minutes,
      },
      round: match.league_round,
      status:match.event_status,
      teams: [
        {
          logo: match.home_team_logo,
          name: match.event_home_team,
          goals: homeGoals === '?' ? '-' : homeGoals,
          goalshalftime: homeGoalsHalftime,
        },
        {
          logo: match.away_team_logo,
          name: match.event_away_team,
          goals: awayGoals === '?' ? '-' : awayGoals,
          goalshalftime: awayGoalsHalftime,
        },
      ],
    };
  }
