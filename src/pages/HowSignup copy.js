import React from "react";
import styled from "styled-components";
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
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      max-width: 760px;
      width: 90vw;
      margin-top: 40px;
    }
  }
`;

export default function HowSignup() {
  return (
    <HowSignContainer>
      <NavBar activateLink={"howSign"} />
      <div className="under-nav"></div>
      <div className="title">
        <Typography fontSize="30px" fontWeight="normal" textAlign="center">
          چگونه در تدکس لواسان شرکت کنم؟
        </Typography>
      </div>
      <div className="content">
        <VideoPlayer />
        <div className="text">
          <Typography
            fontSize="16px"
            fontWeight="200"
            lineHeight="40px"
            textAlign="right"
          >
            تدکـس لواسـان از موضـع مـا حـرف میزند و ایـن ما، یعنـی تمـام
            ذینفعانی که تدکـس لواسـان را شـکل میدهنـد و بـه پیـش میبرنـد؛ نه
            فقـط بنیانگـذاران و تیـم اجرایـی؛ زیـرا مـا به طـور عمیق بـر این
            باور هسـتیم کـه موجودیتمـان را از یک شـبکهی انسـانی شـامل تمـام
            ذینفعـان گرفتهایم. مـا در گفتگوهـای کالمی و نوشـتاری خـود، از کلمات
            آرامش بخـش و افعال مثبت اسـتفاده میکنیـم. اجـازه نمیدهیـم
            نوشـتهها/گفته‌های مـا بـه مخاطـب حـس تنـش، عجلـه، دسـتپاچگی و
            اضطـراب منتقـل کند. در عیـن حال به شـدت پرهیز مـی کنیـم کـه بـی
            خیـال یـا خوشباش بـه نظـر برسـیم. مـا در ارتباطات خـود با مخاطبـان
            چهرهبهچهـره، دنبال کنندگان صفحات مجازی و عمـوم مردم، صمیمی و دلنشـین
            سـخن میگوییم اما هرگز از دایرهی ادب خارج نمیشـویم و شـوخطبعی ا بـا
            سبکسـری در هـم نمیآمیزیم.
          </Typography>
        </div>
        <Button margin={"40px 0 60px 0"} variant="fill">
          ثبت نام کنید
        </Button>
      </div>
    </HowSignContainer>
  );
}
