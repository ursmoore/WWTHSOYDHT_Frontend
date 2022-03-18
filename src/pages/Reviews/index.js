import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/locations/actions";
import { selectLocations } from "../../store/locations/selectors";
import { Link } from "react-router-dom";

export default function Reviews() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocations);

  useEffect(() => {
    dispatch(getLocations);
  }, [dispatch]);
  console.log("location", location);

  return (
    <div className="review">
      {location?.length < 1
        ? "Loading"
        : location?.map((loc) => {
            return (
              <div key={loc?.id}>
                <h3 className="title">{loc?.name}</h3>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${loc?.image})`,
                  }}
                ></div>
                <Link to={`/details/${loc?.id}`}>
                  <button>Unfortunate Details ಠ__ಠ </button>
                </Link>
                <p>👎-{loc?.dislikes}</p>
                {/*  <button
                  onClick={() => {
                    dispatch(updateDislikes(id, loc.dislikes + 1));
                  }}
                >
                  Dislike
                </button> */}
              </div>
            );
          })}
    </div>
  );
}
