import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import {
  StyledSectionContainer,
  StyledDescription,
  StyledImageContainer,
} from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollRevealAnimation } from "../animation";

const StyledServicesContainer = styled(StyledSectionContainer)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServicesContainer
      ref={element}
      variants={scrollRevealAnimation}
      animate={controls}
      initial="hidden">
      <StyledDescription>
        <h2>
          High <span>quality</span> service.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>

      <StyledImageContainer>
        <img src={home2} alt="home 2" />
      </StyledImageContainer>
    </StyledServicesContainer>
  );
};
