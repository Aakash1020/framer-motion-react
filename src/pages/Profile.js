import { motion } from "framer-motion";
import React from "react";
import ProfileComponent from "../components/ProfileComponent";

const Profile = () => {
  const profileSlide = {
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
  const profileTransition = {
    type: "tween",
    duration: 0.3,
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={profileSlide}
      transition={profileTransition}
    >
      <ProfileComponent />
    </motion.div>
  );
};

export default Profile;
