import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "white" }}>
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <StyledHide>
        <StyledSocial variants={titleAnimation}>
          <StyledCircle />
          <h2>Send Us A Message</h2>
        </StyledSocial>
      </StyledHide>
      <StyledHide>
        <StyledSocial variants={titleAnimation}>
          <StyledCircle />
          <h2>Write Us An Email</h2>
        </StyledSocial>
      </StyledHide>
      <StyledHide>
        <StyledSocial variants={titleAnimation}>
          <StyledCircle />
          <h2>Check Out Our Social Media</h2>
        </StyledSocial>
      </StyledHide>
    </StyledContact>
  );
};
