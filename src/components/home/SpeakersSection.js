import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import Typography from "../../elements/Typography";
import PopUpDialog from "../PopUpDialog";
import SpeakerCard from "../SpeakerCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
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
  const [speakers, setSpeakers] = useState([]);
  const reff = useRef();

  useEffect(() => {
    // setSpeakers(speakersData);
    axios.get("data/speakers.json").then((res) => setSpeakers(res.data));
  }, []);

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
        {/* ___________________ */}
        {speakers.length > 0 &&
          speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              id={speaker.id}
              imageUrl={`${process.env.PUBLIC_URL}/${speaker.imageUrl}`}
              redxDir={speaker.redxDir}
              RedxMarginRight={speaker.RedxMarginRight}
              title={speaker.title}
              desc={speaker.desc}
              facebook={speaker.facebook}
              twitter={speaker.twitter}
              instagram={speaker.instagram}
              telegram={speaker.telegram}
              linkedin={speaker.linkedin}
              web={speaker.web}
            />
          ))}
        {/* ___________________ */}
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
