import { render } from "@testing-library/react";
import React from "react";
import "../pages/Home.css";

function Home() {
  function showSignUp() {}

  return (
    <div>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="vewport" content="width=device-width, initial-scale=1" />
          <title>Atrable</title>
        </head>
        <body>
          <div className="row">
            <div className="column_left">
              <div className="space_h_10"></div>
              <div className="welcome">Built for you</div>
              <div className="space_h_3"></div>
              <div className="welcome">
                <p>
                  Atrable is a platform where you can share your travel stories.
                  You can view each traveler's stories, follow travelers, and
                  share your travel stories
                </p>
              </div>
              <div className="space_h_10"></div>
              <div></div>
            </div>
            <div className="column_right">
              <div className="card">
                <p className="id">ID</p>
                <input></input>
                <p className="pw">Password</p>
                <input type="password"></input>
                <button className="button_2">Log in</button>
                <button className="button_3" onClick={showSignUp}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default Home;
