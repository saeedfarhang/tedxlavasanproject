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
  @media screen and (max-width: 485px) {
    margin-top: 50px;
  }
  .title {
    margin: 0 0 40px 0;

    @media screen and (max-width: 485px) {
      margin: 0 0 20px 0;
    }
  }
  .grid-container {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 485px) {
      width: 100%;
      overflow-x: scroll;
      justify-content: flex-start;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 485px) {
    flex-wrap: nowrap;
    width: max-content;
  }
`;

export default function VolenteersSection(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.speaker_name.value);
  };

  return (
    <Container {...props}>
      <Typography
        margin="0 0 30px"
        variant="h3"
        fontSize="20px"
        className="title"
        fontWeight="normal"
      >
        اعضای تیم برگزاری
      </Typography>
      <div className="grid-container">
        <Grid>
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/forooooozan.jpeg`}
            title="جواد فروزان"
            desc="سرپرست تیم"
            instagram="https://www.instagram.com/forooooozan/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/sarah_helmzadeh.jfif`}
            title="سارا حلم زاده"
            desc=""
            instagram="https://www.instagram.com/sarah_helmzadeh/"
            web="http://www.Sarahelmzadeh.me/"
            twitter="https://www.twitter.com/flirticia/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/aliahmadi.jfif`}
            title="علی احمدی"
            desc="مربی سخنران"
            instagram="https://www.instagram.com/aliahmadi.__/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/zeynabshahedi.jpeg`}
            title="زینب شاهدی"
            desc="مربی سخنران"
            instagram="https://www.instagram.com/zeynab.shahedi/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/mansourehzeinaly.jpeg`}
            title="منصوره زینلی"
            desc="مربی سخنران"
            instagram="https://www.instagram.com/mansoureh.zeinaly/"
          />

          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/shahriar.jpeg`}
            title="شهریار حبیبیان"
            desc="مربی سخنران"
            instagram="https://www.instagram.com/sahriar/"
            likedin="https://www.likedin.com/shahriar-habibian/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/sodagar.jpg`}
            title="پرند سوداگر"
            desc="مربی سخنران"
            instagram="https://www.instagram.com/parandii/"
          />

          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/SiavashGhanbari.jpg`}
            title="سیاوش قنبری"
            desc=""
            instagram="https://www.instagram.com/siavashghanbari"
            twitter="https://www.twitter.com/SiavashGhambari"
            linkedin="https://www.linkedin.com/in/siavashghanbari/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/alaakbarian.jpg`}
            title="آلا اکبریان"
            desc=""
            twitter="https://twitter.com/AlaAkbarian"
            linkedin="https://www.linkedin.com/in/alaakbarian"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/amir_abbas_azizi.jpeg`}
            title="امیر عباس عزیزی"
            desc=""
            instagram="http://instagram.com/amir_abbas_azizi"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/mohoansari.jpg`}
            title="محمدحسین انصاری"
            desc=""
            web="http://mohoansari.com/"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/bita-jafari.jpg`}
            title="بیتا جعفری"
            desc=""
            instagram="http://instagram.com/_bita_jafari"
          />
          <VolenteerCard
            imageUrl={`${process.env.PUBLIC_URL}/assets/volenteer-img/s.jpg`}
            title="سعید فرهنگ"
            desc=""
            twitter="http://twitter.com/_saeedfarhang_"
            linkedin="https://www.linkedin.com/in/saeedfarhang/"
          />
        </Grid>
      </div>
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
      <PopUpDialog
        height="655px"
        open={openDialog}
        setOpen={setOpenDialog}
        title="همکاری با تدکس لواسان"
        email_template="template_w9winaf"
      >
        <input type="hidden" name="form_for" value="volenteer" />
        <TextField
          label="نام و نام خانوادگی"
          helperText="نام و نام خانوادگی را وارد نمایید"
          name="name"
        />
        <TextField
          label="شماره تماس"
          type="number"
          helperText="شماره تماس خود را وارد نمایید"
          name="phone"
          style={{ marginTop: "20px" }}
        />
        <SelectField
          lable="فیلد کاری"
          placeholder="در چه زمینه‌ای مایل به همکاری هستید؟"
          name="work_field"
        />
      </PopUpDialog>
    </Container>
  );
}
