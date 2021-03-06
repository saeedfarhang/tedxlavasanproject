import React from "react";
import styled from "styled-components";
import Typography from "../../elements/Typography";

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
      /* justify-content: center; */
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      .chaos-v {
        width: 30%;
        max-width: 150px;
        height: 100%;
        margin-left: 30px;
      }
    }
    .about-tl-text {
      margin: 20px 14vw;
      line-height: 40px;
      text-align: justify;
      @media screen and (max-width: 900px) {
        height: 300px;
        overflow-y: scroll;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <Container>
      <img className="head-img" src="assets/bg-teh-lav.png" alt="" />
      <div className="content">
        <div className="title">
          <img className="chaos-v" src="assets/chaos-v.svg" alt="" />
          <Typography variant="h4" fontSize="24px" fontWeight="500">
            درباره تدکس لواسان
          </Typography>
        </div>
        <Typography
          variant="p"
          fontSize="16px"
          fontWeight="300"
          className="about-tl-text"
        >
          کمـی کـه از تهـران - ایـن پایتخـت سرســام آور و پرآشــوب - دور می
          شـویم و پیچ و خـم جـاده را طـی می کنیــم، بــه لواســان می رســیم.
          پشـت هـر پیـچ ایـن جاده، بخشـی از آشــوب ذهنــی مــا جــا می مانــد و
          هــر فــراز و فــرودی، اندکــی از آشــفتگی روح مــا می کاهــد. بــه
          لواســان کــه می رســیم، از سرســام پایتخــت خبــری نیســت، و جســم و
          ذهــن و روان مــا آرام آرام قــرار می یابــد. لواســان، بــرای مــا
          کــه در تهــران زندگــی و کار مــی کنیــم، چیــزی را بــا خــود دارد
          کــه خانــه بایـد داشـته باشـد: آرامـش. جایـی بــرای آســودن بــدون
          فرســودن و اندیشیدن بدون اضطراب. تدکــس لواســان، جایــی بــرای همیـن
          قـرار اسـت؛ راه فـراری بـرای ذهن هــا و روان هایــی کــه زیــر آوار
          ویرانگــر حــوادث روزمــره، فرصتــی بــرای آســایش و نفــس کشــیدن
          ندارنــد. مــا اندکــی از پایتخــت دور می شــویم، تــا اندکــی بــه
          خودمـان نزدیکتـر شـویم و بخـت عمیقتــر اندیشــیدن و قــرار گرفتــن در
          مســیر ایده هــای بــزرگ را بــه دست آوریم. مــا در تدکــس لواســان،
          چنــد قــدم از سراســیمگی شــهر دورتــر، و چنــد قــدم بــه بکــر
          بــودن طبیعــت نزدیکتریــم؛ و بــاور داریــم کــه همیــن چنــد قــدم،
          بــه مــا آزادی آفرینـش بیشـتر و تبدیـل شـدن بـه آدم هایــی بهتــر را
          عطــا می کنــد.
        </Typography>
      </div>
    </Container>
  );
}
