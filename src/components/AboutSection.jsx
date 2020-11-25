import React from "react";
import home1 from "../img/home1.png";
import {
  StyledSectionContainer,
  StyledDescription,
  StyledImageContainer,
  StyledHide,
} from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";
import { Wave } from "./Wave";

export const AboutSection = () => {
  return (
    <StyledSectionContainer>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </StyledDescription>

      <StyledImageContainer>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </StyledImageContainer>
      <Wave />
    </StyledSectionContainer>
  );
};
