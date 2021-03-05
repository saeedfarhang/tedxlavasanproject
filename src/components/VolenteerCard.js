import React from "react";
import styled from "styled-components";
import SocialLink from "../elements/SocialLink";
import Typography from "../elements/Typography";

const Container = styled.div`
  width: 98%;
  max-width: 270px;
  height: 309px;
  margin: 10px;
  position: relative;
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
  }
  .red-x {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
  }
  .image-over {
    width: 100%;
    height: 180px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: transparent
      linear-gradient(180deg, #00000000 0%, #000000e3 72%, #000000 100%) 0% 0%
      no-repeat padding-box;
    background: transparent
      linear-gradient(180deg, #00000000 0%, #000000e3 72%, #000000 100%) 0% 0%
      no-repeat padding-box;
    opacity: 1;
    .content {
      margin: 69px 60px 24px 60px;
      display: flex;
      flex-direction: column;
    }
    .social-links {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function VolenteerCard(props) {
  return (
    <Container
      title={props.title}
      desc={props.desc}
      facebook={props.facebook}
      twitter={props.twitter}
      instagram={props.instagram}
      imageUrl={props.imageUrl}
    >
      <img className="card-image" src={props.imageUrl} alt="" />
      <img
        src="assets/redx-color-60.svg"
        alt="redx-color-60"
        className="red-x"
      />
      <div className="image-over">
        <div className="content">
          <Typography
            textAlign="center"
            variant="h6"
            fontSize="18px"
            fontWeight="500"
          >
            {props.title}
          </Typography>
          <Typography
            margin="2px 0"
            variant="hp"
            fontSize="11px"
            fontWeight="300"
          >
            {props.desc}
          </Typography>
        </div>
        <div className="social-links">
          <SocialLink social="facebook" />
          <SocialLink social="twitter" />
          <SocialLink social="instagram" />
        </div>
      </div>
    </Container>
  );
}
