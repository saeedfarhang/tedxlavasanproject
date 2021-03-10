import React, { useEffect } from "react";
import styled from "styled-components";
import Typography from "../elements/Typography";
import ReadingProcess from "../elements/ReadingProcess";

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.open ? "90%" : "0")};
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #000;
  z-index: 1000;
  transition: all 0.5s ease;
  .pop-content {
    overflow-y: scroll;
    position: absolute;
    z-index: 1000;
    height: 100%;
    .header-img {
      width: 100%;
      min-height: 160px;
    }
    .close-btn {
      position: absolute;
      top: 40px;
      right: 20px;
      z-index: 1001;
    }
    .text {
      position: absolute;
      top: 40px;

      .about-tl-text {
        margin: 20px;
        line-height: 36px;
        text-align: right;
      }
    }
  }
`;

export default function ReadMorePop(props) {
  const { open, setOpen } = props;
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <Container open={open}>
      <ReadingProcess>
        <div className="header-img">
          <img
            style={{ height: "100%", width: "100%", opacity: 0.5 }}
            src={props.headerImg}
            alt=""
          />
        </div>
        <img
          className="close-btn"
          src={`${process.env.PUBLIC_URL}/assets/ic-close-w.svg`}
          alt=""
          onClick={() => setOpen(false)}
        />
        <div className="text">
          <Typography
            className="title-text"
            variant="h4"
            fontSize="20px"
            fontWeight="normal"
          >
            {props.title}
          </Typography>
          <Typography
            variant="p"
            fontSize="16px"
            fontWeight="300"
            color="#B2B2B2"
            className="about-tl-text"
          >
            {props.children}
          </Typography>
          <div style={{ height: "40px" }}></div>
        </div>
      </ReadingProcess>
    </Container>
  );
}
