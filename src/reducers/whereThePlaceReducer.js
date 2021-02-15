export default function place(state=[], action) {
  switch (action.type) {
      case 'SOME_PLACES': {
         const somePlace = state.map((place) => {
         if (place.id === action.payload) {
					return {
						...place,
						// isFavorited: !song.isFavorited,
					};
				}
				return place;
  });
      return somePlace;
  }

  default :
    return state

  }

}



