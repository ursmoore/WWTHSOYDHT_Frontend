import { apiUrl } from "../../config/constants";
import axios from "axios";

//SET ALL LOCATIONS
export const setLocations = (data) => ({
  type: "SET/locations",
  payload: data,
});

//SET ONE LOCATION
export const setLocation = (data) => ({
  type: "SET/location",
  payload: data,
});

//GET ALL LOCATIONS
export async function getLocations(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/locations`);
    console.log("Im getting locations data back", response);
    dispatch(setLocations(response.data));
  } catch (error) {
    console.log("No locations found");
  }
}

//GET DETAILED LOCATION
export function getDetailPost(id) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}/location/${id}`);
      dispatch(setLocation(response.data));
    } catch (error) {
      console.log("No data found");
    }
  };
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
