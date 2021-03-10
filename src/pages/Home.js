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
import "./styles.css";

const HomeContainer = styled.div``;

export default function Home() {
  const speakerRef = useRef();

  return (
    <HomeContainer>
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
      <VolenteersSection />
      <AboutLavasanSection />
      <div id="tedandtedx"></div>
      <AboutTEDSection />
      <SponsersSection />
      <FooterSection />
    </HomeContainer>
  );
}
