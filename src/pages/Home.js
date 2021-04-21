import React, { useRef } from "react";
import styled from "styled-components";
import AboutLavasanSection from "../components/home/AboutLavasanSection";
import AboutSection from "../components/home/AboutSection";
import AboutTEDSection from "../components/home/AboutTEDSection";
import FooterSection from "../components/home/FooterSection";
import SpeackersSection from "../components/home/SpeakersSection";
import SponsersSection from "../components/home/SponsersSection";
import TopSection from "../components/home/TopSection";
import VolenteersSection from "../components/home/VolenteersSection";
import NavBar from "../components/NavBar";
import "./styles.css";

const HomeContainer = styled.div`
  .space {
    height: 100px;
  }
`;

export default function Home() {
  const speakerRef = useRef();

  return (
    <HomeContainer>
      <NavBar />

      <div>
        <TopSection speakerRef={speakerRef} />
      </div>
      <div
        id="speakers"
        style={{ position: "absolute", marginTop: "-100px" }}
      ></div>
      <div ref={speakerRef}>
        <SpeackersSection />
      </div>
      <div id="about"></div>
      <AboutSection />
      <div id="volenteers"></div>
      <SponsersSection />
      <div className="space"></div>
      <AboutLavasanSection />
      <div id="tedandtedx"></div>
      <AboutTEDSection />
      <VolenteersSection />
      <FooterSection />
    </HomeContainer>
  );
}
