import React, { useState } from "react";
import styled from "styled-components";
import Typography from "./Typography";

const CustomButton = styled.div`
  z-index: 1;
  overflow: hidden;
  position: relative;
  /* transition: 0.5s ease-out; */
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: 10px 30px
    ${(props) =>
      props.padding ? props.padding : props.variant === "fill" ? "10px" : "0px"}
    30px;
  border: ${(props) =>
    props.disable
      ? "1px solid #46464630"
      : props.variant === "fill"
      ? "1px solid #e62b1e"
      : "none"};
  color: ${(props) =>
    props.disable
      ? "#464646"
      : props.active
      ? props.variant === "clear"
        ? "#e62b1e"
        : "#fff"
      : "#fff"};
`;

const OutLineHolder = styled.div`
  transition: all 0.5s ease;
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #e62b1e;
  transform: translateX(101%);
  ${(props) => (props.hover ? "transform: translateX(0);" : "")}
  ${(props) => (props.active ? "height: 2px;" : "")}
`;
const FillBack = styled.div`
  position: absolute;
  transition: all 0.3s ease;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => (props.disable ? "transparent" : "#e62b1e")};
  transform: translateX(-100%);
  ${(props) =>
    props.disable
      ? ``
      : `
    ${props.hover ? "transform: translateX(0);" : ""}
    ${props.active ? "background-color: #e62b1e60;" : ""}
  `}/* ${(props) => (props.hover ? "transform: translateX(0);" : "")}
  ${(props) => (props.active ? "background-color: #e62b1e60;" : "")} */
`;

export default function Button(props) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <CustomButton
      as="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      variant={props.variant}
      active={active}
      override={props.override}
      margin={props.margin}
      {...props}
    >
      {props.override ? (
        props.children
      ) : props.variant === "fill" ? (
        <>
          <Typography
            variant="h6"
            fontWeight="300"
            fontSize={props.fontSize ? props.fontSize : "14px"}
            reduce="0px"
          >
            {props.children}
          </Typography>
          <FillBack disable={props.disable} hover={hover} active={active} />
        </>
      ) : (
        <div style={{ overflow: "hidden" }}>
          <Typography
            variant="h6"
            fontWeight="normal"
            fontSize={props.fontSize ? props.fontSize : "14px"}
            reduce="0px"
          >
            {props.children}
          </Typography>
          <OutLineHolder hover={hover} active={active} />
        </div>
      )}
    </CustomButton>
  );
}

// variant = 'clear', 'fill'
