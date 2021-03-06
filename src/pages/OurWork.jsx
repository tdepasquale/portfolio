import React from "react";
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeAnimation,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  twirlAnimation,
  twirlContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;
const StyledFrame2 = styled(StyledFrame1)`
  background-color: #ff8efb;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background-color: #8ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background-color: #8effa0;
`;

export const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "white" }}>
      <motion.div variants={twirlContainer}>
        <StyledFrame1 variants={twirlAnimation}></StyledFrame1>
        <StyledFrame2 variants={twirlAnimation}></StyledFrame2>
        <StyledFrame3 variants={twirlAnimation}></StyledFrame3>
        <StyledFrame4 variants={twirlAnimation}></StyledFrame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img
              style={{ objectPosition: "left center" }}
              variants={photoAnimation}
              src={athlete}
              alt="athlete"
            />
          </StyledHide>
        </Link>
      </StyledMovie>

      <StyledMovie
        ref={element1}
        variants={fadeAnimation}
        animate={controls1}
        initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img
            style={{ objectPosition: "center top" }}
            src={theRacer}
            alt="the racer"
          />
        </Link>
      </StyledMovie>

      <StyledMovie
        ref={element2}
        variants={fadeAnimation}
        animate={controls2}
        initial="hidden">
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img
            style={{ objectPosition: "center bottom" }}
            src={goodTimes}
            alt="good times"
          />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};
