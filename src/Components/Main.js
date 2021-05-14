import React from "react";
import styled from "styled-components";
import ImageTransition from "./ImageTransition";
import image from "../assets/image.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: gold;
`;

const Main = () => {
  return (
    <>
      <Container>
        <ImageTransition image={image}></ImageTransition>
      </Container>
    </>
  );
};

export default Main;
