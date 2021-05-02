import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typography from "../../elements/Typography";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import SponsorCard from "../../elements/SponsorCard";
import PopUpDialog from "../PopUpDialog";
import Slider from "react-slick";
import axios from "axios";

const Container = styled.div`
  margin-top: 120px;
  width: 100%;
  /* height: 150px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sponsor-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  .sponsers-container {
    width: 100%;
    position: relative;
    /* .over {
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
      } */

    .sponsers {
      width: fit-content;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      @media screen and (max-width: 620px) {
        grid-template-columns: repeat(3, 1fr);
      }
      justify-items: center;
      .slick-list {
        outline: none;
        direction: ltr;
        ::after {
          outline: none;
          direction: ltr;
        }
        ::before {
          outline: none;
          direction: ltr;
        }
      }
      .slick-slide {
        outline: none;
      }
    }
  }
`;

export default function SponsersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [sponsers, setSponsers] = useState([]);
  const responsive = [
    { breakpoint: 350, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 2 } },
    { breakpoint: 800, settings: { slidesToShow: 3 } },
    { breakpoint: 1800, settings: { slidesToShow: 4 } },
  ];

  const logosRef = useRef(null);
  useEffect(() => {
    logosRef.current.scrollTo(100, 10);
  });
  const click = () => {
    logosRef.current.scrollTo(-100, 0);
  };

  useEffect(() => {
    axios.get("data/sponsers.json").then((res) => setSponsers(res.data));
  }, []);

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
      <div className="sponsor-grid">
        <SponsorCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/sponser-logo/irancell.png`}
          web={"https://irancell.ir/"}
          selfPage
          key={4}
          id={4}
          bigSize
        />
        <div className="space-sponsors-big" style={{ width: "3%" }}></div>
        <SponsorCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/sponser-logo/digikala.png`}
          web={"https://digikala.com/"}
          selfPage
          key={7}
          id={7}
          bigSize
        />
      </div>
      <div className="sponsers-container">
        {/* <div className="over">
          <div className="left"></div>
          <div className="right"></div>
        </div> */}

        <div className="sponsers" ref={logosRef}>
          {sponsers.map(
            (sponser) =>
              !sponser.bigSize && (
                <SponsorCard
                  imageUrl={`${process.env.PUBLIC_URL}/${sponser.imageUrl}`}
                  web={sponser.web}
                  selfPage={sponser.selfPage ? sponser.selfPage : false}
                  key={sponser.id}
                  id={sponser.id}
                />
              )
          )}
          {/* <Slider
            responsive={responsive}
            adaptiveHeight
            arrows={false}
            infinite
            autoplay={true}
            autoplaySpeed={1000}
            pauseOnHover={true}
          >
            {sponsers.map((sponser) => (
              <SponsorCard
                imageUrl={`${process.env.PUBLIC_URL}/${sponser.imageUrl}`}
                web={sponser.web}
                selfPage={sponser.selfPage ? sponser.selfPage : false}
                key={sponser.id}
                id={sponser.id}
              />
            ))}
          </Slider> */}
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

      <PopUpDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title="اسپانسر شوید"
        email_template="template_w9winaf"
      >
        <input type="hidden" value="sponsor" name="form_for" />
        <TextField
          name="name"
          label="نام و نام خانوادگی"
          helperText="نام و نام خانوادگی خود را وارد نمایید"
        />
        <TextField
          name="phone"
          label="شماره تماس"
          type="number"
          helperText="شماره تماس خود را وارد نمایید"
          style={{ marginTop: "20px" }}
        />
      </PopUpDialog>
    </Container>
  );
}
