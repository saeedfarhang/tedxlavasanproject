import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "../elements/Typography";
import emailjs from "emailjs-com";
import Button from "../elements/Button";
import Loading from "../elements/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Container = styled.div`
  transition: all 0.1s ease;
  height: 100vh;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  right: 0;
  z-index: 10000;

  .pop-up-container {
    transition: all 0.3s ease 0.3s;
    border: 1px solid #4646464d;

    z-index: 100;
    position: relative;
    width: 95%;
    max-width: 460px;
    height: ${(props) => (props.open ? props.height : "0")};
    background-color: #000000;
    opacity: 0.98;
    /* @media screen and (max-height: 600px) {
      max-height: 450px;
      overflow-y: scroll;
    } */
    @media screen and (max-width: 485px) {
      height: 90%;
      width: 100vw;
      overflow-y: scroll;
    }
    .close-btn {
      width: 24px;
      height: 24px;
      margin: 20px 20px 0 0;
      top: 0;
      position: absolute;
      @media screen and (max-width: 485px) {
        margin-top: 30px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 36px;
      margin: 36px 80px 160px 80px;
      @media screen and (max-width: 480px) {
        margin: 36px 15% 160px 15%;
      }
      .header-txt {
      }
    }
    .X-logo {
      position: fixed;
      margin: 0 auto;
      bottom: -15%;
      left: 0;
      right: 0;
    }
  }
  .under {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
`;

export default function PopUpDialog(props) {
  const { open, setOpen } = props;
  const [loading, setLoading] = useState({ state: false, after: false });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading({ state: true, after: false, fail: false });
    emailjs
      .sendForm(
        "service_st8zvz8",
        props.email_template,
        e.target,
        "user_Edp0gVXfp0UjIhx7PVazR"
      )
      .then(
        (result) => {
          setLoading({ state: false, after: true, fail: false });
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          setLoading({ state: false, after: true, fail: true });
          console.log(error.text);
        }
      );
  };

  return (
    <Container open={open} height={props.height ? props.height : "561px"}>
      <div className="under" onClick={() => setOpen(false)}></div>

      <div className="pop-up-container">
        <div className="close">
          <img
            className="close-btn"
            src={`${process.env.PUBLIC_URL}/assets/ic-close.svg`}
            alt=""
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="content">
          <Typography variant="h5" fontSize="20px" fontWeight="normal">
            {props.title}
          </Typography>
          <div style={{ marginTop: "40px" }}>
            <form action="" onSubmit={handleSubmit}>
              {props.children}
              <div
                style={{
                  marginTop: "40px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {loading && <Loading loading={loading} />}
                <div className="loading-container"></div>
                <Button type="submit" variant="fill">
                  ثبت درخواست
                </Button>
              </div>
            </form>
          </div>
        </div>
        <LazyLoadImage
          className="X-logo"
          src={`${process.env.PUBLIC_URL}/assets/X-logo.svg`}
          alt=""
        />
      </div>
    </Container>
  );
}
