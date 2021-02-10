import React from "react";

function LoginComponents() {
  const logincomponents = {
    display: "grid",
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
    placeItems: "center",
  };
  const welcom__text = {
    display: "grid",
    fontSize: "5rem",
    height: "500px",
    width: "auto",
    placeItems: "center",
    color: "white",
  };

  return (
    <div className="logincomponents" style={logincomponents}>
      <div style={welcom__text}>
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default LoginComponents;
