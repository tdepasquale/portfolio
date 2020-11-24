import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const StyledDetails = styled.div`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    console.log(url);
    const movie = movies.find((movie) => movie.url === url);
    setCurrentMovie(movie);
  }, [movies, url]);

  if (!currentMovie) return <p>Loading...</p>;

  return (
    <StyledDetails>
      <StyledHeadline>
        <h2>{currentMovie.title}</h2>
        <img src={currentMovie.mainImg} alt="movie" />
      </StyledHeadline>
      <StyledAwards>
        {currentMovie.awards.map((award) => (
          <Award
            title={award.title}
            description={award.description}
            key={award.title}
          />
        ))}
      </StyledAwards>
      <StyledImageDisplay>
        <img src={currentMovie.secondaryImg} alt="" />
      </StyledImageDisplay>
    </StyledDetails>
  );
};
