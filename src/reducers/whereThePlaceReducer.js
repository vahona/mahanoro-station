export function placesStation(state=[], action) {
  switch (action.type) {
      case 'SOME_PLACES': {
          const existplace = state.map((place) => {
           return [...place, action.payload] 
          })

          return existplace
      }
  
      default:
          return state;
  }
}

