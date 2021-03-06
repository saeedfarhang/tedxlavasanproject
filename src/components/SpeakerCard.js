import React from "react";
import styled from "styled-components";
import ArrowBtn from "../elements/ArrowBtn";
import SocialLink from "../elements/SocialLink";
import Typography from "../elements/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CustomSpeakerCard = styled.div`
  width: 98%;
  max-width: 360px;
  min-height: 300px;
  height: auto;
  margin: 15px;
`;

const SpeakerDetail = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  text-align: left;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  width: fit-content;
`;

export default function SpeakerCard(props) {
  return (
    <CustomSpeakerCard
      id={props.id}
      title={props.title}
      desc={props.desc}
      facebook={props.facebook}
      twitter={props.twitter}
      instagram={props.instagram}
      linkedin={props.linkedin}
      web={props.web}
      telegram={props.telegram}
      redxDir={props.redxDir}
      imageUrl={props.imageUrl}
      RedxMarginRight={props.RedxMarginRight}
    >
      {/* <Link to={`/speakers/${props.id}`}> */}
      <div
        style={{
          width: "100%",
          height: "260px",
          position: "relative",
          overflow: "hidden",
          willChange: "opacity",
        }}
      >
        <LazyLoadImage
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(1)",
            position: "absolute",
            zIndex: "-1",
            border: "solid 1px #B2B2B220",
          }}
          src={props.imageUrl}
          alt=""
        />
        {props.redxDir === "left" ? (
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/assets/left-redx.svg`}
            alt=""
            style={{
              opacity: 0.8,
              marginRight: props.RedxMarginRight,
              mixBlendMode: "color",
            }}
          />
        ) : (
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/assets/right-redx.svg`}
            alt=""
            style={{
              opacity: 0.8,
              marginRight: props.RedxMarginRight,
              mixBlendMode: "color",
            }}
          />
        )}
        <div
          style={{
            width: "100%",
            height: "50%",
            position: "absolute",
            bottom: 0,
            background: "linear-gradient(180deg, transparent, #000)",
          }}
        >
          <SpeakerDetail>
            <Typography
              reduce="0px"
              textAlign="left"
              variant="h3"
              fontSize="28px"
              fontWeight="normal"
            >
              {props.title}
            </Typography>
            <Typography
              reduce="0px"
              color="#B2B2B2"
              textAlign="left"
              variant="p"
              fontSize="13px"
              fontWeight="300"
            >
              {props.desc}
            </Typography>
          </SpeakerDetail>
        </div>
      </div>
      {/* </Link> */}
      <Actions>
        <SocialLinks>
          <SocialLink social="instagram" href={props.instagram} />
          <SocialLink social="facebook" href={props.facebook} />
          <SocialLink social="twitter" href={props.twitter} />
          <SocialLink social="telegram" href={props.telegram} />
          <SocialLink social="linkedin" href={props.linkedin} />
          <SocialLink social="web" href={props.web} />
        </SocialLinks>
        <Link to={`/speakers/${props.id}`}>
          <ArrowBtn title="?????????? ????????????" />
        </Link>
      </Actions>
    </CustomSpeakerCard>
  );
}
