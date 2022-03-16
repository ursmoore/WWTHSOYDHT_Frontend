import axios from "axios";

//SET ALL LOCATIONS
export const setLocations = (data) => ({
  type: "SET/locations",
  payload: data,
});

//GET ALL LOCATIONS
export function getLocations() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/locations`);
      console.log("Im getting locations data back", response);
      dispatch(setLocations(response.data));
    } catch (error) {
      console.warn("No data");
    }
  };
}
