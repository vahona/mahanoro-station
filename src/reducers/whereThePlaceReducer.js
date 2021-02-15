export default function place(state=[], action) {
  switch (action.type) {
      case 'SOME_PLACES': {
         const somePlace = state.map((place) => {
          return {
            ...place,
          }
      });
          return somePlace;
      }
      default :
        return state

      }

}


