import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/locations/actions";
import { selectUser } from "../store/user/selectors";

export default function ReviewCard(props) {
  const dispatch = useDispatch(deletePost);
  const user = useSelector(selectUser);

  function cancelHandler(locationId) {
    let awnser = window.confirm("Are you sure you wish you delete the post?");
    if (!awnser) return;
    dispatch(deletePost(locationId));
  }

  return (
    <div className="review-card">
      <p>{props.id}</p>
      <h1 className="title">{props.name}</h1>
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <p>{props.dislike}</p>
      <p>{props.description}</p>
      <p>{props.latitude}</p>
      <p>{props.longtitude}</p>
      <button id="delete" onClick={() => cancelHandler(props.locationId)}>
        ADMIN DELETE
      </button>
    </div>
  );
}
