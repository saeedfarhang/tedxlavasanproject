import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import FooterSection from "../components/home/FooterSection";
import NavBar from "../components/NavBar";
import Button from "../elements/Button";
import Typography from "../elements/Typography";
import VideoPlayer from "../elements/VideoPlayer";

const HowSignContainer = styled.div`
  width: 100%;

  .under-nav {
    height: 170px;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pg-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .ws-clink {
      color: #e62b1e;
      text-decoration: underline;
    }
    .text {
      max-width: 760px;
      width: 90vw;
      margin-top: 40px;
    }
  }
`;

export default function HowSignup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HowSignContainer>
      <NavBar activateLink={"howSign"} />
      <div className="under-nav"></div>
      <div className="title">
        <Typography fontSize="30px" fontWeight="normal" textAlign="center">
          چگونه در تدکس لواسان شرکت کنم؟
        </Typography>
      </div>
      <div className="pg-content">
        <VideoPlayer />
        <div className="text">
          <Typography
            as="h2"
            fontSize="20px"
            fontWeight="bolder"
            lineHeight="40px"
            textAlign="right"
          >
            نحوه‌ی ثبت‌نام در رویداد تدکس لواسان
          </Typography>
          <Typography
            as="p"
            fontSize="16px"
            fontWeight="200"
            lineHeight="40px"
            textAlign="right"
          >
            رویداد تدکس لواسان در روز ۳۱‌ام اردیبهشت‌ ماه ۱۴۰۰ از ساعت ۹ صبح
            به‌صورت زنده و آنلاین برگزار خواهد شد و از روی سایت و اپلیکیشن لنز
            قابل مشاهده است. رویداد، سه نوع بلیط دارد: «بلیط عادی»، «بلیط رویداد
            + کارگاه» و «بلیط حمایتی». (برای آشنایی با کارگاه تسهیل گری روابط به{" "}
            <a className="ws-clink" href="/#/workshop">
              این لینک
            </a>{" "}
            مراجعه کنید.) برای ثبت‌نام در رویداد و خرید بلیط، مراحل زیر را طی
            کنید:
            <br />
            1. از طریق سایت تدکس لواسان (tedxlavasan.com)، گزینه‌ی خرید بلیط را
            انتخاب کنید.
            <br />
            2. دکمه‌ی ثبت‌نام را انتخاب کنید.
            <br />
            3. در پنجره‌ی باز شده، یکی از سه نوع بلیط موجود را انتخاب کنید.
            <br />
            4. در صورتی که کد تخفیف دارید؛ آن را وارد کنید.
            <br />
            5. اگر در سایت «ایوند» (evand) اکانت دارید؛ مشخصات خود را وارد کنید
            و به حساب کاربری خود وارد شوید؛ در غیر این صورت گزینه‌ی «ورود با
            موبایل» را انتخاب کنید.
            <br />
            6. کد تایید اس‌ام‌اس‌شده را وارد کنید. شما در ایوند اکانت باز کردید.
            <br />
            7. بر روی دکمه‌ی ثبت‌نام کلیک کنید.
            <br />
            8. در صفحه‌ی مقابل، پیش‌فاکتور را مشاهده می‌کنید. در این مرحله، سایر
            فیلدها را با اطلاعات خود تکمیل کنید.
            <br />
            9. اکنون به بانک هدایت می شوید. با یک کارت بانکی هزینه رویداد را
            پرداخت کنید.
            <br />
            10. سپس به صفحه‌ی حساب کاربری خود در سایت ایوند وارد می‌شوید و پیغام
            «ثبت‌نام شما با موفقیت انجام شد» را مشاهده می‌کنید.
            <br />
            11. تبریک! فرایند ثبت‌نام را با موفقیت پشت سر گذاشتید. از این که
            میزبان شما هستیم، بسیار خرسندیم.
            <br />
            12. منتظر ایمیل و پیامک ما قبل از رویداد در روز ۳۰ام اردیبهشت ماه
            باشید که حاوی نام کاربری، رمز عبور و لینک اختصاصی شما برای دسترسی به
            رویداد در سایت لنز است. منتظر دیدارتان هستیم. :)
            <br />
            در صورت هرگونه ایراد از طریق واتساپ با شماره تلفن 09029431668 در
            تماس باشید.
          </Typography>
        </div>
        <Link to="/signup">
          <Button margin={"40px 0 60px 0"} variant="fill">
            ثبت نام کنید
          </Button>
        </Link>
      </div>
      <FooterSection />
    </HowSignContainer>
  );
}
