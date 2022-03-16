import React from "react";

export default function ReviewCard(props) {
  return (
    <div>
      <p>{props.id}</p>
      <h1>{props.name}</h1>
      <img src={props.image} alt="reviewIMG" />
      <p>{props.dislike}</p>
      <p>{props.description}</p>
      <p>{props.latitude}</p>
      <p>{props.longtitude}</p>
    </div>
  );
}
