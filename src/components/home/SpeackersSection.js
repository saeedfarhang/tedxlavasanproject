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
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

export default function SpeackersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const reff = useRef();
  return (
    <Container ref={reff}>
      <Typography
        margin="0 0 40px 0"
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
      >
        سخنران‌های تدکس لواسان
      </Typography>
      <Grid>
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="left"
          RedxMarginRight="100px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="right"
          RedxMarginRight="20px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="left"
          RedxMarginRight="150px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="left"
          RedxMarginRight="100px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="right"
          RedxMarginRight="20px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="left"
          RedxMarginRight="150px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="left"
          RedxMarginRight="100px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="right"
          RedxMarginRight="20px"
          title=""
          desc=""
          facebook=""
          twitter=""
          instagram=""
        />
        <SpeakerCard
          imageUrl="assets/people.jpg"
          redxDir="left"
          RedxMarginRight="150px"
          title=""
          desc=""
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
          <TextField
            label="نام سخنران"
            helperText="نام سخنران مورد نظر را وارد نمایید"
          />
          <TextField
            label="نام سخنران"
            helperText="نام سخنران مورد نظر را وارد نمایید"
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
