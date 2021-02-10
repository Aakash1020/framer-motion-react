import { motion } from "framer-motion";
import React from "react";
import SignupComponent from "../components/SignupComponent";

const Signup = () => {
  const login__style = {
    height: "100%",
    backgroundColor: "black",
    width: "auto",
    color: "white",
  };
  const pageSlide = {
    initial: {
      opacity: 0,
      y: "-1rem",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "1rem",
    },
  };
  const pageTransition = {
    type: "tween",
    duration: 0.3,
  };
  return (
    <div className="signup">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageSlide}
        transition={pageTransition}
      >
        <SignupComponent />
      </motion.div>
    </div>
  );
};

export default Signup;
