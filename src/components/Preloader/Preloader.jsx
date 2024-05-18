import React from "react";
import { StyledAvatar, StyledArticle, Container, Info } from "./PreloaderStyles";
// import { Table } from "react-bootstrap";
import {
  Article,
  DetailContainer,
  InfoContainer,
  DetailsContainer,
} from "../UserCard/UserCardStyles";


const Preloader = () => {
  const numberOfRepetitions = 20;
  const repetitionsArray = Array.from({ length: numberOfRepetitions }, (_, index) => index);

  return (
    <>
      {repetitionsArray.map((index) => (
        <Article key={index}>
          <InfoContainer >
            <Info title="true" />
            <DetailsContainer>
              <DetailContainer>
                <Info />
              </DetailContainer>
              <DetailContainer>
                <Info />
              </DetailContainer>
              <DetailContainer>
                <Info />
              </DetailContainer>
            </DetailsContainer>
          </InfoContainer>
          <StyledAvatar />
        </Article>
      ))}
    </>
  );
};
export default Preloader;
