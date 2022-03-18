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

    case "locations/dislikesUpdated": {
      return {
        ...state,
        locationDetails: {
          ...state.locationDetails,
          dislikes: action.payload,
        },
      };
    }

    case "location/getLocationById": {
      return {
        ...state,
        locationDetails: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
