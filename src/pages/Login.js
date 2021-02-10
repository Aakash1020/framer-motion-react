import { motion } from "framer-motion";
import React from "react";
import LoginComponents from "../components/LoginComponents";

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

const Login = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
    >
      <LoginComponents />
    </motion.div>
  );
};

export default Login;
