import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import Typography from "../../elements/Typography";
import PopUpDialog from "../PopUpDialog";
import SpeakerCard from "../SpeakerCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
//

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
  .title {
    margin: 0 0 40px 0;

    @media screen and (max-width: 485px) {
      margin: 0 0 20px 0;
    }
  }
  .chaos {
    margin: 80px 0 60px 0;
    @media screen and (max-width: 485px) {
      opacity: 0;
      height: 70px;
      margin: 0;
    }
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
  .x-teh-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 326px;
    z-index: -1;
  }
`;

export default function SpeackersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const reff = useRef();

  return (
    <Container ref={reff}>
      <div className="bg">
        <LazyLoadImage
          src={`${process.env.PUBLIC_URL}/assets/x-lav-bg.svg`}
          alt=""
        />
      </div>

      <Typography
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
        className="title"
      >
        سخنران‌های تدکس لواسان
      </Typography>
      <Grid>
        <div className="x-teh-bg">
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/assets/x-teh-bg.svg`}
            alt="x-teh-bg"
          />
        </div>
        <div className="dots">
          <LazyLoadImage
            src={`${process.env.PUBLIC_URL}/assets/dots-1.svg`}
            alt=""
          />
        </div>
        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/zomorodian.jpg`}
          redxDir="left"
          RedxMarginRight="70px"
          title="لیلی زمردیان"
          desc="سخنران"
          telegram="https://www.telegram.me/mamacenter/"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/leilyzomorodian"
        />
        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/jafarizade.jpg`}
          redxDir="right"
          RedxMarginRight="100px"
          title="ریحان جعفری زاده"
          desc="سخنران"
          telegram="https://www.telegram.me/reyhan_jafarizadeh"
          linkedin="https://www.linkedin.com/in/jafarizadeh-psychology"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/rayhan.jafarizadeh/"
        />
        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/javanmardi.jpg`}
          redxDir="left"
          RedxMarginRight="95px"
          title="شهاب جوانمردی"
          desc="سخنران"
          linkedin="https://linkedin.com/in/shahabjavanmardy"
          web="https://www.javanmardi.info"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/fanapceo/"
        />
        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/moradi.jpeg`}
          redxDir="right"
          RedxMarginRight="120px"
          title="کیومرث مرادی"
          desc="سخنران"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/kiomarsmoradi/"
        />
        {/* <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/poornejati.jpeg`}
          redxDir="left"
          RedxMarginRight="80px"
          title="مصطفی پور نجاتی"
          desc="سخنران"
          web="https://www.nevisandegikhallagh.ir"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/mostafa.pournejati/"
        /> */}

        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`}
          redxDir="left"
          RedxMarginRight="120px"
          title="نگار علیزاده"
          web="www.negarinfood.com"
          telegram="https://www.telegram.me/negarinfood"
          desc=""
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/_negaralizadeh_/"
        />

        <SpeakerCard
          // imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`}
          redxDir="left"
          RedxMarginRight="120px"
          title="هدیه مولایی"
          desc="سخنران"
          telegram="https://www.telegram.me/lifestyle_travel/"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/hediye_molaei/"
        />

        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/sadeqian.jpg`}
          redxDir="left"
          RedxMarginRight="160px"
          title="آرمینا صادقیان"
          desc="سخنران"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/arminasadeghian_/"
        />

        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/elnazrekabi.jpeg`}
          redxDir="left"
          RedxMarginRight="120px"
          title="الناز رکابی"
          desc="سخنران"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/elnaz.rekabi/"
        />

        {/* <SpeakerCard
          // imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`}
          redxDir="left"
          RedxMarginRight="120px"
          title="مهرداد اسکویی"
          desc="سخنران"
          facebook=""
          twitter=""
          instagram="https://www.instagram.com/mehrdad.oskouei_official/"
        /> */}

        <SpeakerCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/alirezaemtiaz.jpg`}
          redxDir="left"
          RedxMarginRight="20px"
          title="علیرضا امتیاز"
          desc="سخنران"
          facebook=""
          twitter=""
          instagram=""
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
        <LazyLoadImage
          className="chaos"
          src={`${process.env.PUBLIC_URL}/assets/chaos-h.svg`}
          alt=""
        />
      </div>
      <PopUpDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title="معرفی سخنران"
        email_template="template_w9winaf"
      >
        <input type="hidden" value="speaker" name="form_for" />
        <TextField
          name="name"
          label="نام سخنران"
          helperText="نام سخنران مورد نظر را وارد نمایید"
        />
        <TextField
          name="phone"
          label="شماره تماس"
          type="number"
          helperText="شماره تلفن سخنران را وارد نمایید"
          style={{ marginTop: "20px" }}
        />
      </PopUpDialog>
    </Container>
  );
}
