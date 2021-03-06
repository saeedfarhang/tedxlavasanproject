import React from "react";
import styled from "styled-components";
import ArrowBtn from "../elements/ArrowBtn";
import SocialLink from "../elements/SocialLink";
import Typography from "../elements/Typography";

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
      title={props.title}
      desc={props.desc}
      facebook={props.facebook}
      twitter={props.twitter}
      instagram={props.instagram}
      redxDir={props.redxDir}
      imageUrl={props.imageUrl}
      RedxMarginRight={props.RedxMarginRight}
    >
      <div
        style={{
          width: "100%",
          height: "260px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(1)",
            position: "absolute",
            zIndex: -1,
            border: "solid 1px #B2B2B2",
          }}
          src={props.imageUrl}
          alt=""
        />
        {props.redxDir === "left" ? (
          <img
            src="assets/left-redx.svg"
            alt=""
            style={{
              opacity: 0.8,
              mixBlendMode: "color",
              marginRight: props.RedxMarginRight,
            }}
          />
        ) : (
          <img
            src="assets/right-redx.svg"
            alt=""
            style={{
              opacity: 0.8,
              mixBlendMode: "color",
              marginRight: props.RedxMarginRight,
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
              textAlign="left"
              variant="h3"
              fontSize="28px"
              fontWeight="normal"
            >
              {props.title}
            </Typography>
            <Typography
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
      <Actions>
        <SocialLinks>
          <SocialLink social="instagram" href={props.instagram} />
          <SocialLink social="facebook" href={props.facebook} />
          <SocialLink social="twitter" href={props.twitter} />
        </SocialLinks>
        <ArrowBtn />
      </Actions>
    </CustomSpeakerCard>
  );
}
