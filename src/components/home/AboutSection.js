import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Typography from "../../elements/Typography";
import ArrowBtn from "../../elements/ArrowBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .head-img {
    width: 100%;
    min-width: 400px;
    z-index: -1;
  }
  .content {
    margin-top: -10vw;
    width: 100%;
    .title {
      display: flex;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      .title-text {
        @media screen and (max-width: 485px) {
          margin-right: 20px;
        }
      }
      .chaos-v {
        width: 300px;
        height: 6px;
        margin-left: 30px;
        margin-right: -150px;
        @media screen and (max-width: 485px) {
          display: none;
        }
      }
    }
    .about-tl-text {
      margin: 20px 14vw;
      line-height: 40px;
      text-align: right;

      @media screen and (max-width: 700px) {
        margin: 10px 5vw;
      }
    }
  }
`;

export default function AboutSection() {
  const isMobile = useMediaQuery({ maxWidth: 485 });
  return (
    <Container>
      <img
        className="head-img"
        src={`${process.env.PUBLIC_URL}/assets/bg-teh-lav.png`}
        alt=""
      />
      <div className="content">
        <div className="title">
          <img
            className="chaos-v"
            src={`${process.env.PUBLIC_URL}/assets/chaos-v.svg`}
            alt=""
          />
          <Typography
            className="title-text"
            variant="h4"
            fontSize="24px"
            fontWeight="500"
          >
            درباره تدکس لواسان
          </Typography>
        </div>

        {isMobile ? (
          <>
            <Typography
              variant="p"
              fontSize="16px"
              fontWeight="300"
              color="#B2B2B2"
              className="about-tl-text"
            >
              کمـی کـه از تهـران - ایـن پایتخـت سرســام آور و پرآشــوب - دور می
              شـویم و پیچ و خـم جـاده را طـی می کنیــم، بــه لواســان می رســیم.
              پشـت هـر پیـچ ایـن جاده، بخشـی از آشــوب ذهنــی مــا جــا می
              مانــد و هــر فــراز و فــرودی، اندکــی از آشــفتگی روح مــا می
              کاهــد. بــه لواســان کــه می رســیم، از سرســام پایتخــت خبــری
              نیســت.
            </Typography>
            <ArrowBtn margin="20px" width="auto" noHover />
          </>
        ) : (
          <>
            <Typography
              variant="p"
              fontSize="16px"
              fontWeight="300"
              color="#B2B2B2"
              className="about-tl-text"
            >
              کمـی کـه از تهـران - ایـن پایتخـت سرســام آور و پرآشــوب - دور می
              شـویم و پیچ و خـم جـاده را طـی می کنیــم، بــه لواســان می رســیم.
              پشـت هـر پیـچ ایـن جاده، بخشـی از آشــوب ذهنــی مــا جــا می
              مانــد و هــر فــراز و فــرودی، اندکــی از آشــفتگی روح مــا می
              کاهــد. بــه لواســان کــه می رســیم، از سرســام پایتخــت خبــری
              نیســت، و جســم و ذهــن و روان مــا آرام آرام قــرار می یابــد.
              لواســان، بــرای مــا کــه در تهــران زندگــی و کار مــی کنیــم،
              چیــزی را بــا خــود دارد کــه خانــه بایـد داشـته باشـد: آرامـش.
              جایـی بــرای آســودن بــدون فرســودن و اندیشیدن بدون اضطراب.
              تدکــس لواســان، جایــی بــرای همیـن قـرار اسـت؛ راه فـراری بـرای
              ذهن هــا و روان هایــی کــه زیــر آوار ویرانگــر حــوادث روزمــره،
              فرصتــی بــرای آســایش و نفــس کشــیدن ندارنــد. مــا اندکــی از
              پایتخــت دور می شــویم، تــا اندکــی بــه خودمـان نزدیکتـر شـویم و
              بخـت عمیقتــر اندیشــیدن و قــرار گرفتــن در مســیر ایده هــای
              بــزرگ را بــه دست آوریم. مــا در تدکــس لواســان، چنــد قــدم از
              سراســیمگی شــهر دورتــر، و چنــد قــدم بــه بکــر بــودن طبیعــت
              نزدیکتریــم؛ و بــاور داریــم کــه همیــن چنــد قــدم، بــه مــا
              آزادی آفرینـش بیشـتر و تبدیـل شـدن بـه آدم هایــی بهتــر را عطــا
              می کنــد.
            </Typography>
          </>
        )}
      </div>
    </Container>
  );
}
