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

//Dislike button set

/* export const dislikeUpdated = (dislikes) => ({
  type: "locations/dislikesUpdated",
  payload: dislikes,
});

export function updateDislikes(id, dislikes) {
  return async function thunk(dispatch, getState) {
    const response = await axios.patch(`${apiUrl}/location/${id}`, {
      dislikes,
    });
    console.log("updateDislikes", response.data);

    dispatch(dislikeUpdated(dislikes));
  };
}
 */
