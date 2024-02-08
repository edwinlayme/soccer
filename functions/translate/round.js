export function translateRound(roundValue, leagueValue) {
    if (roundValue === "") {
      const leagueTemp = leagueValue.replace(/ - /, "-");
      const leagueRound = leagueTemp.split('-')[1];
    switch(leagueRound){
      case "Qualification":
        return "Clasificación";
      case "Preliminary Round":
          return "Ronda Preliminar";
      case "8th Round":
          return "Octava Ronda";
      case "Club Friendlies":
      case "Club Friendlies 1":
      case "Club Friendlies 2":
      case "Club Friendlies 3":
      case "Club Friendlies 4":
      case "Club Friendlies 5":
        return "Amistoso";
      default:
        return "Sin Especificar";
    }
    } else {
      const [round, number] = roundValue.split(" ");
      switch (round) {
        case "Round":
          return number === 'of' ? "Octavos-Final" : `Jornada ${number}`;
        case "Final":
          return "Final";
        case "Semi-finals":
          return "Semi-Finales";
        case "Quarter-finals":
          return "Cuartos-Final";
        default:
          return `${roundValue}'`;
      }
    }
  }