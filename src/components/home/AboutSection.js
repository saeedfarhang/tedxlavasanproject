import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Typography from "../../elements/Typography";
import ArrowBtn from "../../elements/ArrowBtn";
import ReadMorePop from "../ReadMorePop";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
      margin: 20px 180px;
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
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <LazyLoadImage
        className="head-img"
        src={`${process.env.PUBLIC_URL}/assets/bg-teh-lav.png`}
        alt=""
      />
      <div className="content">
        <div className="title">
          <LazyLoadImage
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
              کمی که از تهران - این پایتخت سرسام آور و پرآشوب - دور می شویم و
              پیچ و خم جاده را طـی می‌کنیم، به لواسان می‌رسیم. پشت هر پیچ این
              جاده، بخشـی از آشوب ذهنی ما جا می‌ماند و پشت سرگذاشتن هر فراز و
              فرودی، اندکی از آشفتگی روح ما می‌کاهد. به لواسان که می رسیم،
            </Typography>
            <ArrowBtn
              title="مطالعه بیشتر"
              margin="20px"
              width="auto"
              noHover
              onClick={() => setOpen(true)}
            />
            <ReadMorePop
              open={open}
              setOpen={setOpen}
              headerImg={`${process.env.PUBLIC_URL}/assets/bg-teh-lav.png`}
              title="درباره تدکس لواسان"
            >
              کمی که از تهران - این پایتخت سرسام آور و پرآشوب - دور می شویم و
              پیچ و خم جاده را طـی می‌کنیم، به لواسان می‌رسیم. پشت هر پیچ این
              جاده، بخشـی از آشوب ذهنی ما جا می‌ماند و پشت سرگذاشتن هر فراز و
              فرودی، اندکی از آشفتگی روح ما می‌کاهد. به لواسان که می رسیم، از
              سرسام پایتخت خبری نیست، و جسم و ذهن و روان ما آرام آرام قرار
              می‌یابد. لواسان، برای ما که زندگی و شغل‌مان در تهران است، چیزی که
              «خانه» باید با خود داشته باشد را با خود دارد: «آرامش». جایی برای
              آسودن بدون فرسودن، و اندیشیدن بدون اضطراب. تدکس لواسان، جایی برای
              همین «قرار» اسـت؛ راه فراری برای ذهن‌ها و روان‌هایی که زیر آوار
              ویرانگر حوادث و رخدادها و روزمرگی‌ها، فرصتی برای آسودن و نفس‌کشیدن
              ندارند. ما اندکی از پایتخت دور می شویم، تا کمی‌ بیشتر به خودمان
              نزدیک شویم و بخت عمیق‌تر اندیشیدن و آرام و قرار گرفتن از رهگذر
              ایده‌های بزرگ را پیدا کنیم. ما در تدکس لواسان، چند قدم از سراسیمگی
              شهر دورتر، و چند قدم به سکوت و طمانینه‌ی طبیعت نزدیک‌تریم؛ و باور
              داریم که همین چند قدم، به ما آزادی آفرینش بیشتر و تبدیل شدن بـه
              آدم‌هایی بهتر را عطا می‌کند.
            </ReadMorePop>
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
              کمی که از تهران - این پایتخت سرسام آور و پرآشوب - دور می شویم و
              پیچ و خم جاده را طـی می‌کنیم، به لواسان می‌رسیم. پشت هر پیچ این
              جاده، بخشـی از آشوب ذهنی ما جا می‌ماند و پشت سرگذاشتن هر فراز و
              فرودی، اندکی از آشفتگی روح ما می‌کاهد. به لواسان که می رسیم، از
              سرسام پایتخت خبری نیست، و جسم و ذهن و روان ما آرام آرام قرار
              می‌یابد. لواسان، برای ما که زندگی و شغل‌مان در تهران است، چیزی که
              «خانه» باید با خود داشته باشد را با خود دارد: «آرامش». جایی برای
              آسودن بدون فرسودن، و اندیشیدن بدون اضطراب. تدکس لواسان، جایی برای
              همین «قرار» اسـت؛ راه فراری برای ذهن‌ها و روان‌هایی که زیر آوار
              ویرانگر حوادث و رخدادها و روزمرگی‌ها، فرصتی برای آسودن و نفس‌کشیدن
              ندارند. ما اندکی از پایتخت دور می شویم، تا کمی‌ بیشتر به خودمان
              نزدیک شویم و بخت عمیق‌تر اندیشیدن و آرام و قرار گرفتن از رهگذر
              ایده‌های بزرگ را پیدا کنیم. ما در تدکس لواسان، چند قدم از سراسیمگی
              شهر دورتر، و چند قدم به سکوت و طمانینه‌ی طبیعت نزدیک‌تریم؛ و باور
              داریم که همین چند قدم، به ما آزادی آفرینش بیشتر و تبدیل شدن بـه
              آدم‌هایی بهتر را عطا می‌کند.
            </Typography>
          </>
        )}
      </div>
    </Container>
  );
}
