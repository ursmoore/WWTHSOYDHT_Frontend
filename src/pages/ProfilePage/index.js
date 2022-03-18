import React, { useEffect } from "react";
/* import ReviewCard from "../../components/ReviewCard"; */
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/locations/actions";
import { selectLocations } from "../../store/locations/selectors";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";

export default function Reviews() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocations);
  const user = useSelector(selectUser);

  const myLocation = location
    ? location.filter((loc) => loc.user.email === user.email)
    : [];

  useEffect(() => {
    dispatch(getLocations);
  }, [dispatch]);
  console.log("location", location);

  return (
    <div>
      {myLocation.length < 1
        ? "Loading"
        : myLocation.map((loc) => {
            return (
              <div key={loc.id}>
                <h3>{loc.name}</h3>
                <img src={loc.image} alt={loc.name} width={500} />

                <Link to={`/details/${loc.id}`}>
                  <button>Unfortunate Details ಠ__ಠ </button>
                </Link>
                <p>👎-{loc.dislikes}</p>
              </div>
            );
          })}
    </div>
  );
}
