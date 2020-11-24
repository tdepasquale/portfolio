import React from "react";
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const OurWork = () => {
  return (
    <StyledWork>
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </StyledMovie>

      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theRacer} alt="the racer" />
        </Link>
      </StyledMovie>

      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodTimes} alt="good times" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};
