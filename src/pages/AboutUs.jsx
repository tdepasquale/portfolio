import React from "react";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { ServicesSection } from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const StyledAboutUs = styled(motion.div)`
  overflow: hidden;
`;

export const AboutUs = () => {
  return (
    <StyledAboutUs
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </StyledAboutUs>
  );
};
