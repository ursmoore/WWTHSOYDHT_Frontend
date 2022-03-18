import React from "react";

export default function CommentCard(props) {
  let dateOptions = { dateStyle: "full", timeStyle: "short" };
  let dateFormatted = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(props.createdAt)
  );
  return (
    <div className="comment-card" id={"commentid-" + props.id}>
      <span className="user">{props.userName}</span>
      <span className="message">{props.text}</span>
      <div className="timestamp">{dateFormatted}</div>
    </div>
  );
}
