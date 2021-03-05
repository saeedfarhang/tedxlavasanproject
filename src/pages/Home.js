import React, { forwardRef, useEffect, useRef } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import AboutLavasanSection from "../components/home/AboutLavasanSection";
import AboutSection from "../components/home/AboutSection";
import AboutTEDSection from "../components/home/AboutTEDSection";
import FooterSection from "../components/home/FooterSection";
import SpeackersSection from "../components/home/SpeackersSection";
import SponsersSection from "../components/home/SponsersSection";
import TopSection from "../components/home/TopSection";
import VolenteersSection from "../components/home/VolenteersSection";
import "./styles.css";

const HomeContainer = styled.div``;

export default function Home() {
  const speakerRef = forwardRef();

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
