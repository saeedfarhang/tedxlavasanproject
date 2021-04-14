import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  min-height: 85px;
  margin: 30px 15vw;
  padding: 30px;
  border: solid 1px ${(props) => (props.open ? "#e62b1e" : "#464646")};
  cursor: pointer;
  transition: all 0.3s ease-out;
  :hover {
    border: solid 1px #e62b1e;
    min-height: ${(props) => (props.open ? "85px" : "95px")};
    margin: ${(props) => (props.open ? "30px 15vw" : "25px 14.5vw")};
    padding: ${(props) => (props.open ? "30px" : "32px")};
  }

  .close-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      transform: rotate(${(props) => (props.open ? "180deg" : "0")});
      transition: all 0.3s ease-out;
    }
  }
  .on-open {
    display: ${(props) => (props.open ? "block" : "none")};
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;

export default function Expand(props) {
  const [open, setOpen] = useState(false);

  return (
    <Container onClick={() => setOpen((state) => !state)} open={open}>
      <div className="close-content">
        <Typography textAlign="right" fontSize="16px" fontWeight="normal">
          {props.title}
        </Typography>
        <img src={`${process.env.PUBLIC_URL}/assets/ic-arrow-down.svg`} />
      </div>
      <div className="on-open">{props.children}</div>
    </Container>
  );
}
