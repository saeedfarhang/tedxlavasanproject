import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Typography from "../../elements/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url("assets/bg-lav-map");
  background-size: cover;
  .bg-teh-lav {
    width: 100%;
    min-width: 400px;
  }
  .content {
    background: transparent url("assets/bg-lav-map.png") 0% 0% no-repeat
      padding-box;
    padding: 70px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (min-width: 920px) {
      padding: 70px 30px;
      flex-direction: row;
      justify-content: space-around;
    }
    @media screen and (max-width: 485px) {
      padding: 30px 30px 0 30px;
    }
    div.text {
      line-height: 35px;
      max-width: 540px;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 485px) {
        line-height: 40px;
      }
    }
    div.image-container {
      margin-right: 200px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 30px;
      position: relative;
      max-width: 350px;
      @media screen and (max-width: 930px) {
        margin-right: 0px;
      }
      @media screen and (max-width: 485px) {
        margin-right: 0;
      }
      div.image {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        position: relative;
        max-width: 350px;
        .lav-photo {
          /* position: relative; */
          width: 90%;
          min-width: 200px;
          height: 100%;
        }
        .lav-photo-under {
          margin-top: 15px;
          margin-bottom: -15px;
          margin-right: -94%;
          width: 90%;
          height: auto;
          min-width: 200px;
          border: solid 1px #e62b1e;
          z-index: -1;
        }
        .dots-white-4 {
          position: absolute;
          top: 20px;
          left: -20px;
          @media screen and (max-width: 485px) {
            display: none;
          }
        }
      }
      .image-owner {
        margin-top: 20px;
        margin-left: 6%;
        opacity: 0.5;
      }
    }
  }
`;

export default function AboutLavasanSection(props) {
  const isMobile = useMediaQuery({ maxWidth: 485 });
  return (
    <Container>
      {isMobile ? (
        <img src="assets/bg-teh-to-lav-mob.png" alt="" className="bg-teh-lav" />
      ) : (
        <img src="assets/bg-teh-to-lav.png" alt="" className="bg-teh-lav" />
      )}
      <div className="content">
        <div className="text">
          <Typography
            color="#e62b1e"
            variant="h3"
            fontSize="20px"
            fontWeight="300"
            textAlign="right"
            margin="0 0 20px 0"
          >
            درباره لواسان
          </Typography>
          <Typography
            variant="p"
            fontSize="16px"
            fontWeight="300"
            textAlign="right"
            color="#b2b2b2"
          >
            لَواسان یکی از شهرهای شهرستان شمیرانات در استان تهران و مرکز بخش
            لواسانات است. در اصطلاح عامیانه به این شهر لواسون می‌گویند. لواسان
            درّه‌ای است ییلاقی و خوش آب و هوا در دامنه‌های جنوبی کوه‌های البرز
            که به خاطر داشتن چشم‌اندازهای بکر و زیبا از رودخانه جاجرود و دریاچهٔ
            زیبای سد لتیان شهرت یافته‌است. طبیعت سرسبز لواسان از دامنه‌های شمالی
            این شهر آغاز می‌شود و تا ساحل دریاچه سد لتیان ادامه دارد. در
            چشم‌اندازهای این منطقه می‌توان طبیعت را در چهار فصل سال به زیبایی
            هرچه بیشتر تماشا کرد. شهر لواسان در ۱۱ کیلومتری شمال شرق تهران قرار
            دارد و به عنوان نزدیک‌ترین منطقهٔ خوش آب و هوا و ییلاقی شهر تهران
            به‌شمار می‌آید. فاصله لواسان تا اتوبان بابایی تهران حدود ۷ کیلومتر
            می‌باشد که در کمتر از ۱۵ دقیقه می‌توان به آن دسترسی داشت. همچنین این
            باغشهر از طریق جاده لشگرک، به آسانی به اتوبان ارتش و شمیران دسترسی
            دارد.
          </Typography>
        </div>
        <div className="image-container">
          <div className="image">
            <img
              src="assets/dots-white-4.svg"
              alt=""
              className="dots-white-4"
            />
            <img src="assets/lav-photo.png" alt="" className="lav-photo" />
            <div className="lav-photo-under"></div>
          </div>
          <div className="image-owner">
            <Typography
              variant="p"
              fontSize="10px"
              color="#b2b2b2"
              textAlign="left"
            >
              Photo Mitra Mehr
            </Typography>
          </div>
        </div>
      </div>
      <div>
        {isMobile ? (
          <img
            className="chaos"
            style={{
              margin: "30px 0",
            }}
            src="assets/chaos-h.svg"
            alt=""
          />
        ) : (
          <img
            className="chaos"
            style={{
              margin: "80px 0 60px 0",
            }}
            src="assets/chaos-h.svg"
            alt=""
          />
        )}
      </div>
    </Container>
  );
}
