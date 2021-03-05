import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import SelectField from "../../elements/SelectField";
import TextField from "../../elements/TextField";
import Typography from "../../elements/Typography";
import PopUpDialog from "../PopUpDialog";
import VolenteerCard from "../VolenteerCard";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-content: center;
`;

export default function VolenteersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.speaker_name.value);
  };

  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];
  return (
    <Container {...props}>
      <Typography
        margin="0 0 40px 0"
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
      >
        داوطلب های تدکس لواسان
      </Typography>
      <Grid>
        <VolenteerCard
          imageUrl="assets/people.jpg"
          title="سجاد کمال زاده"
          desc="مدیریت بازاریابی تجارت الکترونیک"
        />
        <VolenteerCard
          imageUrl="assets/people.jpg"
          title="سجاد کمال زاده"
          desc="مدیریت بازاریابی تجارت الکترونیک"
        />
        <VolenteerCard
          imageUrl="assets/people.jpg"
          title="سجاد کمال زاده"
          desc="مدیریت بازاریابی تجارت الکترونیک"
        />
        <VolenteerCard
          imageUrl="assets/people.jpg"
          title="سجاد کمال زاده"
          desc="مدیریت بازاریابی تجارت الکترونیک"
        />
        <VolenteerCard
          imageUrl="assets/people.jpg"
          title="سجاد کمال زاده"
          desc="مدیریت بازاریابی تجارت الکترونیک"
        />
      </Grid>
      <div className="miss_volenteer miss-form">
        <Typography textAlign="center" fontSize="16px" fontWeight="300">
          شما هم می‌توانید داوطلب باشید
        </Typography>
        <Button
          onClick={() => setOpenDialog(true)}
          className="btn"
          variant="fill"
        >
          همکاری با تدکس لواسان
        </Button>
      </div>
      <div style={{ height: "80px" }}></div>
      <PopUpDialog height="655px" open={openDialog} setOpen={setOpenDialog}>
        <Typography variant="h5" fontSize="20px" fontWeight="normal">
          همکاری با تدکس لواسان
        </Typography>
        <div style={{ marginTop: "40px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="نام و نام خانوادگی"
              helperText="نام سخنران مورد نظر را وارد نمایید"
              name="speaker_name"
            />
            <TextField
              label="شماره تماس"
              helperText="نام سخنران مورد نظر را وارد نمایید"
              name="speaker_phone"
              style={{ marginTop: "20px" }}
            />
            <SelectField
              lable="فیلد کاری"
              placeholder="در چه زمینه‌ای مایل به همکاری هستید؟"
              name="work_field"
            />

            <div
              style={{
                marginTop: "40px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="fill" type="submit">
                ثبت درخواست
              </Button>
            </div>
          </form>
        </div>
      </PopUpDialog>
    </Container>
  );
}
