import React, { useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import { NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../store/locations/actions";
import { selectLocations } from "../store/locations/selectors";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Reviews() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocations);
  const { id } = useParams;

  useEffect(() => {
    dispatch(getLocations);
  }, [dispatch]);
  console.log("what is", location);

  return (
    <div className="reviews-wrap">
      {location.length === 0 ? (
        <p>no reviews found</p>
      ) : (
        location.map((rev, index) => {
          return <ReviewCard key={index} name={rev.name} image={rev.image} />;
        })
      )}
      <Link className={"detail"} to={`/detail/${id}`}>
        detail
      </Link>
    </div>
  );
}
