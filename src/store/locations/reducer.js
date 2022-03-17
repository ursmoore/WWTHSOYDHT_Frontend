const initialState = {
  location: [],
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

    case "location/getLocationById": {
      return {
        ...state,
        locationDetails: { ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
}
