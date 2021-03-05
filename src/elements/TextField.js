import React, { useState } from "react";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  max-width: 300px;
  width: 100%;
  height: 74px;
  position: relative;
  transition: all 0.1s ease;
`;

const Input = styled.div`
  transition: all 0.1s ease;
  position: relative;
  input {
    transition: all 0.1s ease;
    width: 100%;
    height: 42px;
    border: solid 1px #b2b2b2;
    background-color: transparent;
    border-radius: 0;
    opacity: ${(props) => (props.typing ? 1 : 0.2)};
    outline: none;
    color: #fff;
    padding: 10px;
    font-size: 14px;
    caret-color: #e62b1e;
    font-weight: 300;
    :hover {
      opacity: ${(props) => (props.typing ? 1 : 0.5)};
    }
    :focus {
      opacity: 1;
      border: solid 1px #e62b1e;
    }
  }
  .placeholder {
    position: absolute;
    top: 0;
    right: 0;
    color: #464646;
    margin: 10px;
    z-index: 0;
    pointer-events: none;
    display: ${(props) => (props.typing ? "none" : "block")};
  }
`;

export default function TextField(props) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [typing, setTyping] = useState(false);

  const handleChange = (e) => {
    if (e.target.value) {
      setTyping(true);
    } else {
      setTyping(false);
    }
    console.log(typing);
  };

  return (
    <Container style={props.style}>
      <Typography
        margin={"0 0 10px 0"}
        textAlign="right"
        variant="h6"
        fontSize="14px"
        fontWeight="300"
        color="#b2b2b2"
      >
        {props.label}
      </Typography>
      <Input typing={typing}>
        <input
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onChange={handleChange}
          type="text"
          name={props.name}
        />
        <Typography
          className="placeholder"
          variant="p"
          fontSize="14px"
          fontWeight="300"
        >
          {props.helperText}
        </Typography>
      </Input>
    </Container>
  );
}
