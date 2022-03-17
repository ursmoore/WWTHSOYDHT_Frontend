import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";
import { getDetailPost } from "../../store/locations/actions";
import { selectLocations } from "../../store/locations/selectors";

import { selectUser } from "../../store/user/selectors";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = useSelector(selectLocations);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailPost(id));
  }, [dispatch, id]);git status

  console.log("what is locations", location);

  return location.length < 1 ? (
    <p>loading</p>
  ) : (
    <>
      <h1>{user.name}</h1>
      <ReviewCard
        id={location.id}
        name={location.name}
        image={location.image}
        dislike={location.dislike}
        description={location.description}
        latitude={location.latitude}
        longtitude={location.longtitude}
      />
      <hr />
      <div className="create-post-link">
        <NavLink style={{ textDecoration: "none" }} to={"/editPage"}>
          <h4>Edit page</h4>
        </NavLink>
      </div>
    </>
  );
}
