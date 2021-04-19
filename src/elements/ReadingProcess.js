import React from "react";
import styled from "styled-components";
import useScrollPercentage from "./useScroll";

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
  .spacing-correction {
    height: 20px;
  }
  .scroll-to-top-container {
    position: fixed;
    width: 100%;
    height: 40px;
    bottom: 0;
    right: 0;

    .scroll-to-top {
      width: 40px;
      height: 40px;
      transform: translateY(40px);
      transition: all 0.2s ease;
      ${(props) => props.scrollPercentage > 50 && "transform: translateY(0);"};
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
        <div className="spacing-correction"></div>
        <div className="scroll-to-top-container">
          {/* <div className="scroll-to-top"></div> */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/ic-top.svg`}
            alt=""
            className="scroll-to-top"
            onClick={() => {
              scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </Container>
  );
}
