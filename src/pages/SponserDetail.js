import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "../components/NavBar";
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
    @media screen and (max-width: 600px) {
      height: 150px;
    }
  }
  .sponser {
    padding: 170px 150px 50px 0;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width: 600px) {
      padding: 110px 20px 30px 0;
    }
    .image {
      width: 200px;
      height: 253px;
      margin-left: 30px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 600px) {
        width: 120px;
        height: 150px;
      }
      img {
        width: 90%;
        height: 90%;
        object-fit: contain;
      }
    }
    .detail {
      display: flex;
      flex-direction: column;
    }
  }
  .sponser-bag {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31px;
    background-color: #e62b1e20;
  }
  .texts {
    width: 100%;
    padding: 0 10vw;
    margin-bottom: 100px;
<<<<<<< HEAD
    @media screen and (max-width: 600px) {
      padding: 0 5vw;
    }
=======
>>>>>>> 04e3095e011f579071f44df852d6b627906cd497
  }
`;
const SocialLinks = styled.div`
  display: flex;
  width: fit-content;
  margin: 20px -12px -10px 0;
`;
export default function SponserDetail(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { id } = useParams();
  const [sponser, setSponser] = useState({ text: [] });
  useEffect(() => {
    // setSpeaker(speakersData.find((speaker) => speaker.id == id));
    axios
      .get("data/sponsers.json")
      .then((res) => setSponser(res.data.find((sponser) => sponser.id == id)));
  }, []);
  return (
    <Container>
      <NavBar activateLink={"sponsers"} />
      <div className="header"></div>
      <div className="sponser">
        <div className="image">
          <img src={sponser.imageUrl} alt="" />
        </div>
        <div className="detail">
          <Typography as="h3" fontSize="28px" fontWeight="normal">
            {sponser.title}
          </Typography>
          <div className="sponser-bag">
            <Typography
              width="fit-content"
              as="p"
              fontSize="13px"
              fontWeight="100"
              color="#ffffff"
            >
              اسپانسر مالی
            </Typography>
          </div>
          <SocialLinks>
            <SocialLink social="instagram" href={sponser.instagram} />
            <SocialLink social="facebook" href={sponser.facebook} />
            <SocialLink social="twitter" href={sponser.twitter} />
            <SocialLink social="telegram" href={sponser.telegram} />
            <SocialLink social="linkedin" href={sponser.linkedin} />
            <SocialLink social="web" href={sponser.web} />
          </SocialLinks>
        </div>
      </div>
      <div className="texts">
<<<<<<< HEAD
        <Typography
          as="p"
          textAlign="right"
          fontWeight="100"
          fontSize="16px"
          lineHeight="40px"
        >
          {sponser.text && sponser.text.map((line) => <p>{line}</p>)}
        </Typography>
=======
        {sponser.text &&
          sponser.text.map((paragh) => (
            <Typography
              as="p"
              textAlign="right"
              fontSize="16px"
              fontWeight="100"
            >
              {paragh}
            </Typography>
          ))}
>>>>>>> 04e3095e011f579071f44df852d6b627906cd497
      </div>
    </Container>
  );
}
