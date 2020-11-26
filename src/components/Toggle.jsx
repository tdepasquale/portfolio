import React, { useState } from "react";
import { motion } from "framer-motion";

export const Toggle = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Use the layout property to prevent elements from stretching and animating while inside of an AnimateSharedLayout component.
  return (
    <motion.div
      layout
      className="question"
      onClick={() => setIsOpen((prev) => !prev)}>
      <motion.h4 layout>{title}</motion.h4>
      {isOpen ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};
