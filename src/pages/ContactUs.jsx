import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "white" }}>
      <h1>Contact Us</h1>
    </motion.div>
  );
};
