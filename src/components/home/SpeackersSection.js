import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import Typography from "../../elements/Typography";
import PopUpDialog from "../PopUpDialog";
import SpeakerCard from "../SpeakerCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .bg {
    z-index: -1;
    position: absolute;
    top: 635px;
    right: 0;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-content: center;
  position: relative;
  .dots {
    position: absolute;
    top: -20px;
    right: 126px;
    display: none;
  }
`;

export default function SpeackersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const reff = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_st8zvz8",
        "template_0aqqpxc",
        e.target,
        "user_Edp0gVXfp0UjIhx7PVazR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container ref={reff}>
      <div className="bg">
        <img src="assets/x-lav-bg.svg" alt="" />
      </div>

      <Typography
        margin="0 0 40px 0"
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
      >
        سخنران‌های تدکس لواسان
      </Typography>
      <Grid>
        <div className="dots">
          <img src="assets/dots-1.svg" alt="" />
        </div>
        <SpeakerCard
          imageUrl="assets/speakers-img/alirezaemtiaz.jpg"
          redxDir="left"
          RedxMarginRight="100px"
          title="علیرضا امتیاز"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/alirezaemtiaz/"
        />
        <SpeakerCard
          imageUrl="assets/speakers-img/rayhanjafarizadeh.jfif"
          redxDir="right"
          RedxMarginRight="20px"
          title="ریحان جعفری زاده"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/rayhan.jafarizadeh/"
        />
        <SpeakerCard
          imageUrl="assets/speakers-img/thanksgodeverytime.jpg"
          redxDir="left"
          RedxMarginRight="150px"
          title="شهاب جوانمردی"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/thanksgodeverytime/"
        />
        <SpeakerCard
          imageUrl="assets/speakers-img/kiomarsmoradi.jpg"
          redxDir="left"
          RedxMarginRight="100px"
          title="کیومرث مرادی"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/kiomarsmoradi/"
        />
        <SpeakerCard
          imageUrl="assets/speakers-img/leilyzomorodian.jpg"
          redxDir="right"
          RedxMarginRight="20px"
          title="لیلی زمردیان"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/leilyzomorodian/"
        />
        <SpeakerCard
          imageUrl="assets/speakers-img/negaralizadeh.jfif"
          redxDir="left"
          RedxMarginRight="150px"
          title="نگار علیزاده"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/_negaralizadeh_/"
        />
        <SpeakerCard
          imageUrl="assets/speakers-img/jalaeipour.jfif"
          redxDir="left"
          RedxMarginRight="100px"
          title="محمدرضا جلائی پور"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/m.jalaeipour/"
        />
      </Grid>
      <div className="miss_speaker miss-form">
        <Typography textAlign="center" fontSize="16px" fontWeight="300">
          جای کسی در سخنرانان خالی بود؟
        </Typography>
        <Button
          onClick={() => setOpenDialog(true)}
          className="btn"
          variant="fill"
        >
          معرفی سخنران
        </Button>
      </div>
      <div>
        <img
          className="chaos"
          style={{
            margin: "80px 0 60px 0",
          }}
          src="assets/chaos-h.svg"
          alt=""
        />
      </div>
      <PopUpDialog open={openDialog} setOpen={setOpenDialog}>
        <Typography variant="h5" fontSize="20px" fontWeight="normal">
          معرفی سخنران
        </Typography>
        <div style={{ marginTop: "40px" }}>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              name="speaker_name"
              label="نام سخنران"
              helperText="نام سخنران مورد نظر را وارد نمایید"
            />
            <TextField
              name="speaker_phone"
              label="شماره تماس"
              helperText="شماره تلفن سخنران را وارد نمایید"
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
              <Button type="submit" variant="fill">
                ثبت درخواست
              </Button>
            </div>
          </form>
        </div>
      </PopUpDialog>
    </Container>
  );
}
