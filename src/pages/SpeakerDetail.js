import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { speakersData } from "../data/speakers";
import SocialLink from "../elements/SocialLink";
import Typography from "../elements/Typography";

const Container = styled.div`
  .header {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    height: 300px;
    width: 100%;
    z-index: -1;
  }
  .speaker {
    padding: 170px 150px 50px 0;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .image {
      width: 200px;
      height: 253px;
      margin-left: 30px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .detail {
      display: flex;
      flex-direction: column;
    }
  }
`;
const SocialLinks = styled.div`
  display: flex;
  width: fit-content;
  margin: 20px -12px -10px 0;
`;
export default function SpeakerDetail(props) {
  let { id } = useParams();
  const [speaker, setSpeaker] = useState({});
  useEffect(() => {
    setSpeaker(speakersData.find((speaker) => speaker.id == id));
  }, []);
  return (
    <Container>
      <NavBar activateLink={"speakers"} />
      <div className="header"></div>
      <div className="speaker">
        <div className="image">
          <img src={speaker.imageUrl} alt="" />
        </div>
        <div className="detail">
          <Typography as="h3" fontSize="28px" fontWeight="normal">
            {speaker.title}
          </Typography>
          <Typography
            width="fit-content"
            as="p"
            fontSize="13px"
            fontWeight="100"
            color="#B2B2B2"
          >
            {speaker.desc}
          </Typography>
          <SocialLinks>
            <SocialLink social="instagram" href={speaker.instagram} />
            <SocialLink social="facebook" href={speaker.facebook} />
            <SocialLink social="twitter" href={speaker.twitter} />
            <SocialLink social="telegram" href={speaker.telegram} />
            <SocialLink social="linkedin" href={speaker.linkedin} />
            <SocialLink social="web" href={speaker.web} />
          </SocialLinks>
        </div>
      </div>
      <div className="texts"></div>
    </Container>
  );
}
