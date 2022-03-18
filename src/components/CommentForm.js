import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../store/locations/actions";

export default function CommentForm() {
  const dispatch = useDispatch();
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");
  const { id } = useParams();

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const resetInput = (e) => {
    setInput("");
  };

  async function formSubmitHandler(event, id, description, isButton = false) {
    event.preventDefault();

    if (event.code === "Enter" || isButton) {
      dispatch(createComment(id, description));
      setInput("");

      setTimeout(() => {
        let allComments = document.querySelectorAll(".comment-card");
        let lastComment = allComments[allComments.length - 1];

        if (lastComment) {
          let lastItem = document.getElementById(lastComment.id);
          lastItem.classList.add("is-new");
          lastItem.scrollIntoView();
        }
      }, 250);
    }
  }

  if (document) {
    // let emojiDialog = document.getElementsByClassName("emoji-mart");
    document.addEventListener("keyup", (evt) => {
      if (evt.code === "Escape" && showEmojis) {
        setShowEmojis(false);
      }
    });
  }

  return (
    <form className="CommentForm" onSubmit={(event) => event.preventDefault()}>
      <div className="form-wrap">
        <input
          type="text"
          className="form-control"
          placeholder="Write a comment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(event) => formSubmitHandler(event, id, input)}
        />
        {showEmojis && <Picker id="emoji-picker" onSelect={addEmoji} />}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon emoji-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={(evt) => setShowEmojis(!showEmojis)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <button
          onClick={(event) => formSubmitHandler(event, id, input, true)}
          className="btn btn-primary btn-block mb-4"
        >
          Post
        </button>

        <button
          onClick={resetInput}
          className="btn btn-primary btn-block mb-4"
          id="btn-two"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
