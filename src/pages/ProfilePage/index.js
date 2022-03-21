import React, { useEffect } from "react";
/* import ReviewCard from "../../components/ReviewCard"; */
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getLocations } from "../../store/locations/actions";
import { selectLocations } from "../../store/locations/selectors";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import ReviewCard from "../../components/ReviewCard";

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
    <div className="review">
      {myLocation.length < 1
        ? "No images"
        : myLocation.map((loc) => {
            return (
              <div key={loc.locationId}>
                <h3 className="title">{loc.name}</h3>
                <img
                  className="image"
                  src={loc.image}
                  alt={loc.name}
                  width={500}
                />
                <ReviewCard locationId={loc.id} />

                <Link to={`/details/${loc.locationId}`}>
                  <button>Unfortunate Details ಠ__ಠ </button>
                </Link>
                <p>👎-{loc.dislikes}</p>
              </div>
            );
          })}
    </div>
  );
}
