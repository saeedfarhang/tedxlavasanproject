import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  /* outline: "none"; */
  width: ${(props) => (props.bigSize ? "240px" : "150px")};
  height: ${(props) => (props.bigSize ? "240px" : "150px")};
  @media screen and (max-width: 490px) {
    width: ${(props) => (props.bigSize ? "40vw" : "26vw")};
    height: ${(props) => (props.bigSize ? "40vw" : "26vw")};
  }
  padding: 10px;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  .s-logo {
    position: relative;
    background-color: #fff;
    width: ${(props) => (props.bigSize ? "204px" : "130px")};
    height: ${(props) => (props.bigSize ? "204px" : "130px")};
    @media screen and (max-width: 490px) {
      width: ${(props) => (props.bigSize ? "100%" : "96%")};
      height: ${(props) => (props.bigSize ? "100%" : "96%")};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
      outline: none;
    }
  }
  .s-title {
    position: absolute;
    bottom: -10px;
    display: none;
  }
`;

export default function SponsorCard(props) {
  return (
    <Container bigSize={props.bigSize}>
      <div className="s-logo">
        {props.selfPage === true ? (
          <Link
            to={`/sponsors/${props.id}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ height: "100%" }} src={props.imageUrl} alt="" />
          </Link>
        ) : (
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href={props.web}
            target="_blank"
          >
            <img style={{ height: "100%" }} src={props.imageUrl} alt="dsfasd" />
          </a>
        )}
      </div>
      <div className="s-title">
        <Typography as="p" fontSize="13px" fontWeight="100">
          اسپانسر مالی
        </Typography>
      </div>
    </Container>
  );
}
