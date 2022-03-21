export const selectLocations = (reduxState) => reduxState.locations.location;

export const selectLocationDetails = (reduxState) =>
  reduxState.locations.locationDetails;

export const selectOnClickMarker = (reduxState) =>
  reduxState.locations.onClickMarker;
