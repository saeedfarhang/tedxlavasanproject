import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
            به‌صورت زنده و آنلاین برگزار خواهد شد و از روی سایت آپارات
            <a href="https://www.aparat.com">(aparat.com)</a> قابل مشاهده است. 
            رویداد، دو نوع بلیط دارد: بلیط عادی، بلیط حمایتی؛ برای ثبت‌نام در
            رویداد و خرید بلیط، مراحل زیر را طی کنید: 
            <br /> 1. از طریق سایت تدکس لواسان{" "}
            <a href="https://www.tedxlavasan.com">(tedxlavasan.com)</a>، گزینه‌ی
            «خرید بلیط» را انتخاب کنید. 
            <br /> 2. وارد صفحه‌ی تدکس لواسان بر روی سایت آپارات
            <a href="https://www.aparat.com">(aparat.com)</a>
            می‌شوید.
            <br /> 3. یکی از انواع بلیط‌ها را انتخاب کنید و در صورت داشتن کد
            تخفیف، آن را وارد کنید. سپس،  گزینه‌ی «خرید بلیط» را انتخاب کنید.
            <br /> 4. اگر در آپارات{" "}
            <a href="https://www.aparat.com">(aparat.com)</a> اکانت دارید؛ به
            حساب کاربری خود وارد شوید، در غیر این صورت، با استفاده از گزینه‌ی
            «ایجاد حساب کاربری» ثبت‌نام کنید.
            <br /> 5. به صفحه‌ی بانک می‌روید. پرداخت خود را انجام دهید. 
            <br /> 6. در صورتی که پرداخت شما موفقیت آمیز باشد، به سایت آپارات بر
            می گردید و پیغام «شما اکنون بلیط خود را با موفقیت تهیه کرده‌اید» را
            می‌بینید. 
            <br /> 7. تبریک! فرایند ثبت‌نام را با موفقیت پشت سر گذاشتید. 
            <br /> 8. منتظر پیامک آپارات مبنی بر موفقیت‌آمیز بودن ثبت‌نام که
            حاوی لینک مستقیم رویداد است، باشید. 
            <br /> 9. در روز 31 اردیبهشت، برای مشاهده رویداد، ابتدا در سایت
            آپارات <a href="https://www.aparat.com">(aparat.com)</a> لاگین کنید.
            <br /> 10. در این صورت، از دو روش می‌توانید رویداد را مشاهده کنید: 
            اول: از طریق لینکی که در پیامک و ایمیل برای شما ارسال شده، به صفحه‌ی
            رویداد وارد شوید و از دکمه‌ی «ورود به پخش زنده» رویداد را مشاهده
            کنید. دوم: در سایت آپارات، از طریق نوار سمت چپ، در بخش «دیگر
            سرویس‌ها»، «رویدادها» را انتخاب کنید و به رویداد تدکس لواسان وارد
            شوید. در صفحه تدکس لواسان با استفاده از دکمه‌ی «ورود به پخش زنده»
            رویداد را مشاهده کنید. (توجه داشته باشید که در صورتی که بلیط را تهیه
            کرده اید اما در روز رویداد دکمه «ورود به پخش زنده» را مشاهده نمی
            کنید، به این معناست که در سایت آپارات لاگین نکرده اید. ابتدا لاگین
            کنید و سپس مجدد به صفحه رویداد تدکس لواسان مراجعه کنید.)
            <br /> منتظر دیدارتان هستیم. :)
            <br />  در صورت هرگونه مشکل، از طریق واتس‌آپ با شماره تلفن
            09029431668 در تماس باشید.
          </Typography>
        </div>
        <a href="https://www.aparat.com/event/4312">
          <Button margin={"40px 0 60px 0"} variant="fill">
            ثبت نام کنید
          </Button>
        </a>
      </div>
      <FooterSection />
    </HowSignContainer>
  );
}
