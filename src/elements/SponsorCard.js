import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  /* outline: "none"; */
  width: 150px;
  height: 150px;
  padding: 10px;
  background-color: #0d0d0d;
  .s-logo {
    position: relative;
    background-color: #fff;
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 110px;
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
    <Container>
      <div className="s-logo">
        <Link to={`/sponsors/${props.id}`}>
          <img style={{ height: "100%" }} src={props.imageUrl} alt="" />
        </Link>
      </div>
      <div className="s-title">
        <Typography as="p" fontSize="13px" fontWeight="100">
          اسپانسر مالی
        </Typography>
      </div>
    </Container>
  );
}
