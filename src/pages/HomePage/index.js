import React from "react";

export default function HomePage() {
  return (
    <div className="homepage-wrap">
      <h1> We went through hell so you don't have to!</h1>
      <div className="homepage-child">
        <img
          className="main-image"
          src="https://images.unsplash.com/photo-1642273587197-436b8d4f3c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
          alt="windows"
          style={{ height: "700px" }}
        />
        <p className="description">
          {" "}
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum
        </p>
      </div>
    </div>
  );
}
