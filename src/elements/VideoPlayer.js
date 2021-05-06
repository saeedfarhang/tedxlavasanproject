import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 760px;
  width: 30vw;
  height: 100%;
  border: 1px solid #e62b1e;
  margin-top: 40px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  display: flex;
  :hover {
    margin-top: 36px;
    max-width: 780px;
    width: 31vw;
    height: 100%;
  }
  .b-img {
    width: 100%;
    height: 100%;
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
      display: none;
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
      <img
        className="b-img"
        src={
          props.imgUrl ? props.imgUrl : `${process.env.PUBLIC_URL}/assets/.jpg`
        }
        alt=""
      />
      <div className="player">
        <img src={`${process.env.PUBLIC_URL}/assets/Subtraction.svg`} alt="" />
      </div>
    </Container>
  );
}
