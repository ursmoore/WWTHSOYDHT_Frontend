import { apiUrl } from "../../config/constants";
import axios from "axios";

//SET ALL LOCATIONS
export const setLocations = (data) => ({
  type: "SET/locations",
  payload: data,
});

//GET ALL LOCATIONS
export async function getLocations(dispatch, getState) {
  const response = await axios.get(`${apiUrl}/locations`);
  console.log("Im getting locations data back", response);
  dispatch(setLocations(response.data));
}

//GOT ONE LOCATION BY ID
export function locationByIdFetched(data) {
  return {
    type: "location/getLocationById",
    payload: data,
  };
}

//GET LOCATION BY ID
export function fetchLocationById(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/location/${id}`);

      console.log("fetch location by id response", response.data);
      dispatch(locationByIdFetched(response.data));
    } catch (e) {
      console.log(e);
    }
  };
}
