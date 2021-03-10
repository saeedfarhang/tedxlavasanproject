import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typography from "../../elements/Typography";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import PopUpDialog from "../PopUpDialog";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
  margin-top: 120px;
  width: 100%;
  /* height: 150px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sponsers-container {
    width: 100%;
    position: relative;
    .over {
      z-index: 100;
      pointer-events: none;
      width: 100%;
      position: absolute;
      height: 150px;
      top: 0;
      left: 0;
      .left {
        position: absolute;
        height: 150px;
        width: 250px;
        top: 0;
        left: 0;
        background: transparent
          linear-gradient(
            270deg,
            var(--unnamed-color-00000000) 0%,
            #000000 100%
          )
          0% 0% no-repeat padding-box;
        background: transparent
          linear-gradient(270deg, #00000000 0%, #000000 100%) 0% 0% no-repeat
          padding-box;
        opacity: 0.8;
      }
      .right {
        position: absolute;
        height: 150px;
        width: 250px;
        top: 0;
        right: 0;
        background: transparent
          linear-gradient(90deg, var(--unnamed-color-00000000) 0%, #000000 100%)
          0% 0% no-repeat padding-box;
        background: transparent
          linear-gradient(90deg, #00000000 0%, #000000 100%) 0% 0% no-repeat
          padding-box;
        opacity: 0.8;
      }
    }
    .sponsers {
      width: 90%;
      margin: 0 auto;
      .slick-list {
        direction: ltr;
        ::after {
          direction: ltr;
        }
        ::before {
          direction: ltr;
        }
      }

      .s-logo {
        width: 150px;
        height: 150px;
        /* margin: 70px; */
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5%;
        img {
          width: 90%;
          filter: brightness(0) invert(1);
          opacity: 0.3;
        }
      }
    }
  }
`;

export default function SponsersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const logosRef = useRef(null);
  useEffect(() => {
    logosRef.current.scrollTo(100, 10);
  });
  const click = () => {
    logosRef.current.scrollTo(-100, 0);
  };

  return (
    <Container>
      <Typography
        onClick={click}
        margin="0 0 40px 0"
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
      >
        حامیان تدکس لواسان
      </Typography>

      <div className="sponsers-container">
        <div className="over">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="sponsers" ref={logosRef}>
          <Slider adaptiveHeight arrows={false} infinite slidesToShow={2}>
            <div>
              <div className="s-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/sponser-logo/amirkabir.png`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="s-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/sponser-logo/kaarmaan.png`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="s-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/sponser-logo/amirkabir.png`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="s-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/sponser-logo/kaarmaan.png`}
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="miss_sponser miss-form">
        <Typography textAlign="center" fontSize="16px" fontWeight="300">
          شما هم می‌توانید از تدکس لواسان حمایت کنید
        </Typography>
        <Button
          onClick={() => setOpenDialog(true)}
          className="btn"
          variant="fill"
        >
          اسپانسر شوید
        </Button>
      </div>

      <PopUpDialog open={openDialog} setOpen={setOpenDialog}>
        <Typography variant="h5" fontSize="20px" fontWeight="normal">
          معرفی سخنران
        </Typography>
        <div style={{ marginTop: "40px" }}>
          <TextField
            label="نام و نام خانوادگی"
            helperText="نام و نام خانوادگی خود را وارد نمایید"
          />
          <TextField
            label="شماره تماس"
            type="number"
            helperText="شماره تماس خود را وارد نمایید"
            style={{ marginTop: "20px" }}
          />
          <div
            style={{
              marginTop: "40px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="fill">ثبت درخواست</Button>
          </div>
        </div>
      </PopUpDialog>
    </Container>
  );
}
