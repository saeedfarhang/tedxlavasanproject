import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FooterSection from "../components/home/FooterSection";
import NavBar from "../components/NavBar";
import SponsorCard from "../elements/SponsorCard";
import Typography from "../elements/Typography";

const Container = styled.div`
  .under-nav {
    height: 170px;
  }
  .title {
    margin: 0 0 40px 0;

    @media screen and (max-width: 485px) {
      margin: 0 0 20px 0;
    }
  }
  .sponsors-cards-container {
    margin: 0 9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
  }
`;

export default function Sponsers() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    axios.get("data/sponsers.json").then((res) => setSponsors(res.data));
  });
  return (
    <Container>
      <NavBar activateLink={"sponsers"} />
      <div className="under-nav"></div>
      <Typography
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
        className="title"
      >
        حامیان تدکس لواسان
      </Typography>
      <div className="sponsors-cards-container">
        {sponsors.map((sponsor) => (
          <SponsorCard
            imageUrl={`${process.env.PUBLIC_URL}/${sponsor.imageUrl}`}
            web={sponsor.web}
            selfPage={sponsor.selfPage ? sponsor.selfPage : false}
            key={sponsor.id}
            id={sponsor.id}
          />
        ))}
      </div>
      <FooterSection />
    </Container>
  );
}
