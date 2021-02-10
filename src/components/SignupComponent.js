import { motion } from "framer-motion";
import React from "react";

function SignupComponent() {
  const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };
  const signupcomponents = {
    display: "grid",
    height: "100vh",
    width: "100%",
    placeItems: "center",
    backgroundColor: "black",
  };
  const centered = {
    display: "grid",
    height: "500px",
    width: "auto",
    placeItems: "center",
  };

  const elements = {
    fontSize: "4rem",
    color: "white",
  };

  return (
    <div className="signupcomponents" style={signupcomponents}>
      <div style={centered}>
        <div style={elements} className="model">
          <h1>Aakash Rathod</h1>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
