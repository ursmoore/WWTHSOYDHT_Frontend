import React from "react";

export default function ReviewCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt="reviewIMG" />
    </div>
  );
}
