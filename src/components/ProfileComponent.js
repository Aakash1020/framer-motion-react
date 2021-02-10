import React from "react";
import Typing from "react-typing-animation";
import "../pages/styles/ProfileComponent.css";

function ProfileComponent() {
  const profilecomponents = {
    display: "grid",
    height: "100vh",
    width: "100%",
    placeItems: "center",
    backgroundColor: "black",
  };
  const profile__centered = {
    display: "grid",
    height: "500px",
    width: "auto",
    placeItems: "center",
    color: "white",
  };

  const profile__elements = {
    fontSize: "6rem",

    padding: "30px",
  };

  const span__profile = {
    fontSize: "10rem",
    marginLeft: "10px",
  };

  return (
    <div className="profilecomponents" style={profilecomponents}>
      <div style={profile__centered}>
        <div style={profile__elements} className="model">
          <h1>Created using</h1>

          <Typing>
            <Typing.Speed ms={80} />
            <h1 style={span__profile}>
              Framer <span className="gradient">Motion</span>
            </h1>
          </Typing>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
