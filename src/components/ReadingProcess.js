import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import useScrollPercentage from "../elements/useScroll";

const Container = styled.div`
  .processbar {
    width: 100%;
    height: 10px;
    background-color: #0d0d0d;
    position: fixed;
    z-index: 200;
    .process {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: ${(props) => props.scrollPercentage}%;
      background-color: #e62b1e;
    }
  }
`;

export default function ReadingProcess(props) {
  const [scrollRef, scrollPercentage] = useScrollPercentage();

  return (
    <Container scrollPercentage={scrollPercentage}>
      <div ref={scrollRef} className="pop-content">
        <div className="processbar">
          <div className="process" />
        </div>
        {props.children}
      </div>
    </Container>
  );
}
