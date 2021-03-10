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
  .head-img {
    width: 100%;
    min-width: 400px;
    z-index: -1;
  }
  .content {
    margin-top: -10vw;
    width: 100%;
    @media screen and (max-width: 485px) {
      margin-top: -45vh;
    }
    .title {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      @media screen and (max-width: 485px) {
        margin-right: 20px;
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
      @media screen and (max-width: 485px) {
        margin: 20px;
      }
    }
  }
  .content-2 {
    margin-top: 100px;
    .about-tl-text {
      margin: 20px 14vw;
      line-height: 40px;
      text-align: left;
      @media screen and (max-width: 485px) {
        text-align: right;
        margin: 20px;
      }
    }
    .title {
      flex-direction: row-reverse;
      justify-content: flex-start;
      @media screen and (max-width: 485px) {
        flex-direction: row-reverse;
        justify-content: flex-end;
      }
      .chaos-v-2 {
        width: 300px;
        height: 6px;
        margin-left: -150px;
        margin-right: 30px;
        @media screen and (max-width: 485px) {
          display: none;
        }
      }
    }
  }
`;

export default function AboutTEDSection(props) {
  const isMobile = useMediaQuery({ maxWidth: 485 });

  return (
    <Container>
      {isMobile ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/bg-about-ted-mob.png`}
          alt=""
          className="head-img"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/bg-about-ted.png`}
          alt=""
          className="head-img"
        />
      )}

      <div className="content">
        <div className="title">
          <img
            className="chaos-v"
            src={`${process.env.PUBLIC_URL}/assets/chaos-v.svg`}
            alt=""
          />
          <Typography
            variant="h4"
            fontSize="24px"
            fontWeight="500"
            color="#e62b1e"
          >
            تد &nbsp;
          </Typography>
          <Typography variant="h4" fontSize="24px" fontWeight="500">
            چیست؟
          </Typography>
        </div>
        <Typography
          variant="p"
          fontSize="16px"
          fontWeight="300"
          className="about-tl-text"
          color="#b2b2b2"
        >
          TED مخفف (سرواژه) سه کلمه Technology ،Entertainment ،Design است.
          (تکنولوژی و سرگرمی و طراحی) مجموعه‌ TED یک سازمان غیر انتفاعی است که
          به «گسترش ایده های ارزشمند» اختصاص داده شده است. تد در سال ۱۹۸۴ به
          عنوان یک کنفرانس چهار روزه در کالیفرنیا تاسیس شد که موسس آن Richard
          Saul Wurman بود. در پادکست TED & more که به زبان فارسی و توسط آریا
          واحدی تهیه می شود، می توانید علاوه بر تاریخچه TED، مطالب با عمق بیشتری
          را هم بشنوید و همچنین پادکست ‌ TED radio hour هم یک بازنشر جالب و مجدد
          از تدتاک TEDtalk به زبان انگلیسی می باشد. اما سمینارهای دوره‌ای آن از
          سال ۱۹۹۰ شکل گرفت. اگرچه فعالیت‌های تد به این حوزه‌ها محدود نشد. شکل
          اجرای برنامه‌های تد معمولاً اشاره به تحقیقات و دانش و فرهنگ در قالب
          روایتگری است. کنفرانس تد در بهار هر سال و تدگلوبال هر تابستان برگزار
          می‌گردد. در ماموریت تد شعار «گسترش ایده های ارزشمند» می‌درخشد. سازمان
          مرکزی گروه تد با ۹۰ نفر در بخش مرکزی در ونکوور کانادا و نیویورک آمریکا
          قرار دارد. بسیاری از بزرگان سیاست و اقتصاد و همینطور تعداد زیادی از
          برندگان جایزه‌ نوبل، مانند: جیمز کمرون، بیل گیتس، ال گور، جرج اسموت،
          بیل کلینتون، براین گرین، استیون هاوکینگ، ریچارد داوکینز و لری پیچ(موسس
          گوگل)… تاکنون در این برنامه سخنرانی کرده‌اند. از اصول تد این است که
          سخنرانی ها غیرسیاسی، غیرمذهبی، غیرتجاری (تبلیغاتی) باشند. مجموعه‌
          سخنرانی ها و ویدئو‌های TED رایگان هستند و می‌توانید آن ها را به صورت
          فایل صوتی یا تصویری با کیفیت مورد نظر خود دانلود کنید. تعداد بسیار
          زیادی از آن ها زیرنویس فارسی هم دارند که می‌توانید هنگام نمایش یا
          دانلود، آن را فعال کنید.
        </Typography>
      </div>
      <div className="content content-2">
        <div className="title">
          <img
            className="chaos-v-2"
            src={`${process.env.PUBLIC_URL}/assets/chaos-v-2.svg`}
            alt=""
          />
          <Typography variant="h4" fontSize="24px" fontWeight="500">
            چیست؟
          </Typography>
          <Typography
            variant="h4"
            fontSize="24px"
            fontWeight="500"
            color="#e62b1e"
          >
            تدکس&nbsp;
          </Typography>
        </div>
        <Typography
          variant="p"
          fontSize="16px"
          fontWeight="300"
          className="about-tl-text"
          color="#b2b2b2"
        >
          تدکس مجموعه ایی از چندین سخنرانی افراد متفکر و متخصص در حوزه های
          گوناگون است که ایده ها، تجربیات و دانش خود را با زبانی ساده و جذاب و
          فارسی در اختیار همگان قرار می دهند و در کنار این سخنرانی ها، رخداد های
          جنبی متفاوت برای شرکت کنندگان در نظر گرفته شده است و یا به طور دقیق تر
          : تد اکس برنامه ای است (مجموعه ای از سخنرانی چند متفکر و نخبه و مخترع
          و هنرمند و …) ، محلی که به صورت مستقل سازماندهی می شود تا ضمن دنبال
          کردن فلسفه ی TED.com (سازمان غیر انتفاعی تاسیس شده در ۱۹۸۴ ) برای به
          اشتراک گذاشتن ایده ها و تجربیات با ارزش، تجربه ی حضور در رویدادهای
          اصلی TED را هم برای شرکت کنندگان ایجاد نماید. در یک رویداد TEDx ،
          سخنرانی های زنده اجرا شده و سخنران چکیده تجربیات و دانش خود را در یک
          سخنرانی کوتاه به مخاطبان عرضه می کند و این سخنرانی ها زمینه ساز مباحثه
          و گفتگوهای عمیق تر و موثرتری میان شرکت کنندگان در گروه های کوچک تر
          شود. در واقع، این رویدادهای محلی خودجوش، TEDx نامیده می شود و در این
          نام x به معنای رویداد TED با سازماندهی مستقل و در یک منطقه جغرافیایی
          می باشد. کنفرانس های TED به عنوان الگوی اصلی برای برگزاری رویدادهای
          TEDx مورد استفاده قرار می گیرند، اما این رویدادها به صورت مستقل
          سازماندهی و طراحی می شوند. مانند یک مسابقه ورزشی کوچک که در گوشه ایی
          از دنیا برگزار می شود و قوانین فدراسیون جهانی در آن رعایت می شود ولی
          هیچ گونه رابطه و بودجه خاصی با فدراسیون جهانی ندارد، رویداد تداکس هم
          همین گونه است و طبق دستور العمل برگزاری تدکس برگزار می شود و تنها چیزی
          که باید رعایت شود همین توصیه ها و رعایت جزییات است به عنوان مثال
          سخنرانی ها باید غیر مذهبی و غیر سیاسی و غیر تجاری ( غیر تبلیغاتی ) و
          در زمان زیر ۱۸ دقیقه باشند. شما هم می توانید برای آن تقاضای برگزاری
          بدهید.
        </Typography>
      </div>
    </Container>
  );
}
