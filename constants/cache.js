let objectMatches = null;
let objectLeague = null;

const matches = {
  get value() {
    return objectMatches; 
  },
  set value(val) {
    objectMatches = val; 
  }
};
const leagueCache = {
  get value() {
    return objectLeague; 
  },
  set value(val) {
    objectLeague = val; 
  }
};

export {matches,leagueCache};

