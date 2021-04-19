import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 760px;
  width: 90vw;
  height: 427px;
  border: 1px solid #e62b1e;
  margin-top: 40px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  :hover {
    margin-top: 36px;
    max-width: 780px;
    width: 92vw;
    height: 438px;
  }
  .player {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transition: all 0.3s ease-out;
      width: ${(props) => (props.hover ? "120px" : "100px")};
      height: ${(props) => (props.hover ? "120px" : "100px")};
    }
  }
`;

export default function VideoPlayer(props) {
  const [hover, setHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <img className="b-img" src="" alt="" />
      <div className="player">
        <img src={`${process.env.PUBLIC_URL}/assets/Subtraction.svg`} alt="" />
      </div>
    </Container>
  );
}
