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
  .content-2 {
    margin-top: 100px;
    .title {
      flex-direction: row-reverse;
      justify-content: flex-start;
      .chaos-v {
        margin-left: 0;
        margin-right: 30px;
      }
    }
  }
`;

export default function AboutTEDSection(props) {
  return (
    <Container>
      <img className="head-img" src="assets/bg-teh-lav.png" alt="" />
      <div className="content">
        <div className="title">
          <img className="chaos-v" src="assets/chaos-v.svg" alt="" />
          <Typography variant="h4" fontSize="24px" fontWeight="500">
            تد چیست؟
          </Typography>
        </div>
        <Typography
          variant="p"
          fontSize="16px"
          fontWeight="300"
          className="about-tl-text"
        >
          با هدف گسترش ایده‌های شایسته، موسسه آموزشی TED برنامه‌ی TEDx را خلق
          کرده است. TEDx (تدِکس) همایشی محلی، و مستقل است که برای به وجود آوردن
          تجربه ای همانند کنفرانس TED برنامه‌ریزی و برگزار می‌گردد. رویدادهای ما
          به اسم TEDxZanjan هستند، که حرف x اشاره به برنامه ریزی کاملا مستقل این
          رویدادها از کنفرانس TED و سایر موسسات دارد. در رویداد تدکس، ویدیو هایی
          از TED نشان داده می‌شوند، و اندیشمندان، محققان و چهره‌های برتر کشور،
          به طور زنده سخنرانی می‌کنند، تا در کنار ایجاد ساعاتی خوش و لذت بخش
          برای شرکت کنندگان، تفکری عمیق در آنها جرقه بزند، و ایده‌های شایسته،
          به‌کار گرفته شوند. در حاشیه سخنرانی‌ها، فعالیت‌های جذاب و هدف‌مندی نیز
          در نظر گرفته می‌شود تا شبکه ی ارتباطی شرکت‌کنندگان افزایش یابد.
        </Typography>
      </div>
      <div className="content content-2">
        <div className="title">
          <img className="chaos-v" src="assets/chaos-v-2.svg" alt="" />
          <Typography variant="h4" fontSize="24px" fontWeight="500">
            تدکس چیست؟
          </Typography>
        </div>
        <Typography
          variant="p"
          fontSize="16px"
          fontWeight="300"
          className="about-tl-text"
        >
          با هدف گسترش ایده‌های شایسته، موسسه آموزشی TED برنامه‌ی TEDx را خلق
          کرده است. TEDx (تدِکس) همایشی محلی، و مستقل است که برای به وجود آوردن
          تجربه ای همانند کنفرانس TED برنامه‌ریزی و برگزار می‌گردد. رویدادهای ما
          به اسم TEDxZanjan هستند، که حرف x اشاره به برنامه ریزی کاملا مستقل این
          رویدادها از کنفرانس TED و سایر موسسات دارد. در رویداد تدکس، ویدیو هایی
          از TED نشان داده می‌شوند، و اندیشمندان، محققان و چهره‌های برتر کشور،
          به طور زنده سخنرانی می‌کنند، تا در کنار ایجاد ساعاتی خوش و لذت بخش
          برای شرکت کنندگان، تفکری عمیق در آنها جرقه بزند، و ایده‌های شایسته،
          به‌کار گرفته شوند. در حاشیه سخنرانی‌ها، فعالیت‌های جذاب و هدف‌مندی نیز
          در نظر گرفته می‌شود تا شبکه ی ارتباطی شرکت‌کنندگان افزایش یابد.
        </Typography>
      </div>
    </Container>
  );
}
