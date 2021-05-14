import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 300px;
  height: 500px;
  background-color: #0d0d0d;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
  }
`;

const AbsoluteContainer = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  border: none;
`;

const HorizontalContainer = styled.div`
  width: 100%;
  height: 20%;
`;

const Circle = styled.div`
  width: 33.33%;
  height: 100%;
  display: inline-block;

  background-color: #0d0d0d;
`;

const colors = ["#fb3640", "#542e71", "#fdca40", "#a799b7"];

const ImageTransition = ({ image }) => {
  const ref = useRef(null);
  let numberOfDivs = 5;
  let array = [];
  for (let i = 0; i < numberOfDivs; i++) {
    array.push(i);
  }

  //animation

  const animation = () => {
    const targetArray = [
      ref.current.childNodes[0].children,
      ref.current.childNodes[1].children,
      ref.current.childNodes[2].children,
      ref.current.childNodes[3].children,
      ref.current.childNodes[4].children,
    ];
    const tl = gsap.timeline();
    tl.to(
      targetArray,

      { borderRadius: "50%", delay: 1, duration: 1 }
    )
      .to(targetArray, { borderRadius: 0 })
      .to(targetArray, {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        stagger: 0.15,
      })
      .to(targetArray, {
        backgroundColor: "transparent",

        duration: 3,
      });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <Container>
        <img src={image} alt=''></img>
        <AbsoluteContainer ref={ref}>
          {array.map(() => {
            return (
              <HorizontalContainer>
                <Circle />
                <Circle />
                <Circle />
              </HorizontalContainer>
            );
          })}
        </AbsoluteContainer>
      </Container>
    </>
  );
};

export default ImageTransition;
