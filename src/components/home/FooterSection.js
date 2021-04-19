import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import SelectField from "../../elements/SelectField";
import SocialLink from "../../elements/SocialLink";
import TextField from "../../elements/TextField";
import Typography from "../../elements/Typography";
import PopUpDialog from "../PopUpDialog";

const Container = styled.div`
  width: 100%;
  height: 396px;
  margin-top: 120px;
  margin-bottom: 30px;
  .footer-f {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .X-logo-f {
    min-width: 270px;
    overflow: hidden;
  }
  .footer-bg {
    width: 100%;
    height: 192px;
    margin-top: -145px;
    background-color: #e62b1e;
    .social-links {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .btns {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 485px) {
      flex-direction: column;
      align-items: center;
      button {
        width: 95%;
        margin-right: 0 !important;
        margin-left: 0 !important;
        margin-bottom: 20px;
      }
    }
  }
`;

export default function FooterSection(props) {
  const [openVolenteerDialog, setOpenVolenteerDialog] = useState(false);
  const [openSponsorDialog, setOpenSponsorDialog] = useState(false);
  const [openSpeakerDialog, setOpenSpeakerDialog] = useState(false);

  return (
    <Container>
      <div className="footer-f">
        <img
          className="X-logo-f"
          src={`${process.env.PUBLIC_URL}/assets/X-logo-f.svg`}
          alt="X-logo"
        />
        <div className="footer-bg">
          <Typography
            variant="h2"
            fontSize="16px"
            fontWeight="500"
            margin="40px 0 5px 0"
          >
            آدرس تدکس لواسان
          </Typography>

          <Typography
            variant="p"
            fontSize="14px"
            fontWeight="lighter"
            margin="0 0 40px 0"
          >
            لواسان، بلوار امام خمینی، خیابان اتحاد، خیابان گل‌های پنجم، پلاک ۵،
            دفتر کارمان
          </Typography>
          <div className="social-links">
            <SocialLink
              hoverBlack
              social="email"
              href="mailto: infotedxlavasan@gmail.com"
            />
            <SocialLink
              hoverBlack
              social="twitter"
              href="https://www.twitter.com/tedxlavasan/"
            />
            <SocialLink
              hoverBlack
              social="instagram"
              href="https://www.instagram.com/tedxlavasan/"
            />
          </div>
        </div>
        <div className="btns">
          <Button
            onClick={() => setOpenVolenteerDialog(true)}
            style={{ marginLeft: 20 }}
            variant="fill"
          >
            همکاری با تدکس لواسان
          </Button>
          <Button onClick={() => setOpenSponsorDialog(true)} variant="fill">
            حامی شوید
          </Button>
          <Button
            onClick={() => setOpenSpeakerDialog(true)}
            style={{ marginRight: 20 }}
            variant="fill"
          >
            معرفی سخنران
          </Button>
        </div>
      </div>
      <PopUpDialog
        height="655px"
        open={openVolenteerDialog}
        setOpen={setOpenVolenteerDialog}
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
      <PopUpDialog
        open={openSponsorDialog}
        setOpen={setOpenSponsorDialog}
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
      <PopUpDialog
        open={openSpeakerDialog}
        setOpen={setOpenSpeakerDialog}
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
