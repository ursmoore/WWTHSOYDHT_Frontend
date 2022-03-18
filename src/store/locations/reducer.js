const initialState = {
  locations: [],
  locationDetails: null,
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

    case "location/getLocationById": {
      return {
        ...state,
        locationDetails: action.payload,
      };
    }

    case "location/postNewExperience": {
      console.log("what is payload", action.payload);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
