import React, { useEffect } from "react";
import styled from "styled-components";
import FooterSection from "../components/home/FooterSection";
import SponsersSection from "../components/home/SponsersSection";
import NavBar from "../components/NavBar";
import Typography from "../elements/Typography";

const Container = styled.div`
  .signup-section {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 850px) {
      flex-direction: column;
      gap: 20px;
    }
    .su-texts {
    }
    .evand-widget-event-registration {
      .evand-panel {
        background-color: #0d0d0d;
      }
      .evand-clear {
        border: 1px solid #0d0d0d;
        color: #fff;
      }
      .powered-by-evand {
        font-size: 10px;
      }
      .evand-panel-body {
        .event-ticket {
          border-bottom: none;
        }
        .event-ticket:first-child {
          border-bottom: solid 1px #e62b1e;
        }
        .event-ticket:nth-child(2) {
          border-bottom: solid 1px #e62b1e;
        }
      }
    }
    .evand-panel-footer {
      float: unset;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      ::after {
        display: none;
      }
      .evand-left {
        .evand-button {
          background-color: transparent !important;
          border: 1px solid #e62b1e !important;
          border-radius: 0 !important;
          padding: 10px 30px !important;
          transition: all 0.2s ease;
          :hover {
            background-color: #e62b1e !important;
          }
        }
      }
    }
  }

  .space {
    height: 200px;
  }
`;

export default function SignUp(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    var t = document.createElement("script");
    t.type = "text/javascript";
    t.async = !0;
    t.src =
      ("https:" === document.location.protocol ? "https://" : "http://") +
      "widgets.evand.com/event-registration.js?load=1";
    t.setAttribute("id", "evand-widget-event-registration");
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e);
  }, []);
  console.log("hello world!");
  return (
    <Container>
      <NavBar />
      <div className="signup-section">
        <div className="su-texts">
          <Typography
            as="h2"
            fontSize="50px"
            textAlign="right"
            fontWeight="bolder"
            lineHeight="93px"
            width="300px"
          >
            خرید بلیط تدکس لواسان
          </Typography>
          <Typography
            color="#b2b2b2"
            as="p"
            fontSize="24px"
            textAlign="right"
            fontWeight="300"
          >
            ٣١ اردیبهشت ١٤٠٠
          </Typography>
        </div>
        <div
          class="evand-widget evand-widget-event-registration"
          data-event-slug="tedxlavasan"
          data-setting=""
        ></div>
      </div>
      <SponsersSection />
      <div className="space"></div>
      <FooterSection />
    </Container>
  );
}
