import React from "react";
import styled from "styled-components";
import SpeakersSection from "../components/home/SpeakersSection";
import NavBar from "../components/NavBar";

const Container = styled.div`
  padding-bottom: 63px;
  .under-nav {
    height: 170px;
  }
  .chaos {
    display: none;
  }
  .bg {
    top: 0 !important;
  }
`;

export default function Speakers() {
  return (
    <Container>
      <NavBar activateLink={"speakers"} />
      <div className="under-nav"></div>
      <SpeakersSection></SpeakersSection>
    </Container>
  );
}
