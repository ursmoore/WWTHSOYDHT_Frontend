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

    default: {
      return state;
    }
  }
}
