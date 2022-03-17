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
    <div>
      {location?.length < 1
        ? "Loading"
        : location?.map((loc) => {
            return (
              <div key={loc?.id}>
                <h3>{loc?.name}</h3>
                <img src={loc?.image} alt={loc?.name} width={500} />

                <Link to={`/details/${loc?.id}`}>
                  <button>Viev Details</button>
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
