import React from "react";

export default function ReviewCard(props) {
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
    </div>
  );
}
