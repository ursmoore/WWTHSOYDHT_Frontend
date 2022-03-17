const initialState = {
  location: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET/locations": {
      return {
        ...state,
        location: action.payload,
      };
    }

    /*     case "locations/dislikesUpdated": {
      return {
        ...state,
        location: {
          ...state.location,
          dislikes: action.payload,
        },
      };
    }
 */
    default: {
      return state;
    }
  }
}
