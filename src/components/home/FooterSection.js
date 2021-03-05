import React from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import SocialLink from "../../elements/SocialLink";
import Typography from "../../elements/Typography";

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
  }
`;

export default function FooterSection(props) {
  return (
    <Container>
      <div className="footer-f">
        <img className="X-logo-f" src="assets/X-logo-f.svg" alt="X-logo" />
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
            لواسان، دانشگاه بزرگ لواسان
          </Typography>
          <div className="social-links">
            <SocialLink hoverBlack social="facebook" />
            <SocialLink hoverBlack social="twitter" />
            <SocialLink hoverBlack social="instagram" />
          </div>
        </div>
        <div className="btns">
          <Button style={{ marginLeft: 20 }} variant="fill">
            داوطلب شوید
          </Button>
          <Button variant="fill">حامی شوید</Button>
          <Button style={{ marginRight: 20 }} variant="fill">
            معرفی سخنران
          </Button>
        </div>
      </div>
    </Container>
  );
}
