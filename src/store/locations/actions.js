import { apiUrl } from "../../config/constants";
import axios from "axios";

//SET ALL LOCATIONS
export const setLocations = (data) => ({
  type: "SET/locations",
  payload: data,
});

/* //SET ONE LOCATION
export const setLocation = (data) => ({
  type: "SET/location",
  payload: data,
}); */

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
/* 
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
 */
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

// CREATE NEW BAD EXPERIENCE
export function postNewExperience(data) {
  return {
    type: "location/postNewExperience",
    payload: data,
  };
}

export function newExperiencePosted(
  name,
  image,
  description,
  latitude,
  longtitude,
  experience
) {
  return async function thunk(dispatch, getstate) {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${apiUrl}/locations`,
        {
          name,
          image,
          description,
          latitude,
          longtitude,
          experience,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("what is response", response.data);
      dispatch(postNewExperience(response.data));
    } catch (e) {
      console.log(e);
    }
  };
}

// //GET ONCLICK
export function onClickMarker(latlng) {
  return {
    type: "location/makeOnClickMarker",
    payload: { latlng },
  };
}
