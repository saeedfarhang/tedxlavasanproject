import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterSection from "../components/home/FooterSection";
import NavBar from "../components/NavBar";
import Button from "../elements/Button";
import Expand from "../elements/Expand";
import Typography from "../elements/Typography";

const FAQContainer = styled.div`
  width: 100%;
  .under-nav {
    height: 170px;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export default function Faq(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <FAQContainer>
      <NavBar activateLink={"faq"} />
      <div className="under-nav"></div>
      <div className="title">
        <Typography fontSize="30px" fontWeight="normal" textAlign="center">
          سوالات متداول
        </Typography>
      </div>
      <Expand title="چگونه باید برای تدکس لواسان بلیط تهیه کنم؟">
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          برای مشاهده رویداد تدکس لواسان باید ثبت نام کنید. پس از ثبت نام لینک
          مشاهده رویداد در روز رویداد برای شما از طریق پیامک و ایمیل ارسال خواهد
          شد. توجه داشته باشید که در روز رویداد ابتدا باید در سایت آپارات لاگین
          کنید، سپس از طریق لینک ارسال شده رویداد را مشاهده نمایید.
        </Typography>
        <div style={{ height: "20px" }} />
        <a target="_blank" href="https://www.aparat.com/event/4312">
          <Button variant="fill">ثبت نام کنید</Button>
        </a>
      </Expand>
      <Expand title="چه‌طور می‌شه در یکی از رویدادها به عنوان سخنران شرکت کرد؟">
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          سخنران‌ها به دو طریق انتخاب می‌شن. یا تیم سخنرانی مستقیم سراغشون
          می‌ره، یا خودشون به عنوان سخنران داوطلب می‌شن و اگر ایده‌ی ارزشمندی
          داشته باشن، تیم با سخنرانی‌شون موافقت می‌کنه.
        </Typography>
      </Expand>

      <Expand
        title="
در فرایند برگزاری تدکس لواسان چه اتفاقاتی می‌افته؟

"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          اتفاقای زیادی می‌افته! از گرفتن مجوز (لایسنس) از تد، تا جذب تیم
          برگزاری توسط برگزارکننده، که شامل افراد متخصص حوزه‌های مختلفه بگیرید؛
          تا انتخاب سخنران‌ها، ایده‌پردازی و نوشتن و بازنویسی‌های مکرر متن‌های
          سخنرانی و تمرین سخنرانی‌ها با سخنرانان (کیوریشن) و تولید محتوا برای
          سوشال مدیا (کپی‌رایتینگ)، تا بخش‌های دیگه مثل ارتباط با مخاطبین
          (پی‌آٰر)، تبلیغات، جذب سرمایه و حامیان (اسپانسرینگ و پارتنرشیپ)؛ و
          طراحی تک‌تک‌ المان‌ها (دیزاین) و برندینگ، همگی اتفاقایی هستن که پشت
          صحنه‌ی تدکس لواسان در جریانن. همه‌ی این فرایند، ذیل Product
          Management، با هم یک کل واحد رو تشکیل می‌ده، و حاصل‌شون، ظهور رویدادی
          منحصر به‌فرده؛ چون هر تدکسی مستقل برگزار می‌شه
        </Typography>
      </Expand>
      <Expand
        title="
        برای انتخاب سخنران‌ها چه فاکتورهایی مد نظر قرار می‌گیره؟

"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          دو تا فاکتور اصلی هست که باید وجود داشته باشه: اول این که سخنران‌ها
          ایده‌ای داشته باشن که مال خودشون باشه و جای دیگه‌ای مطرح نشده باشه، و
          ارزش انتشار رو داشته باشه. دومین فاکتور هم اینه که، بعد از موافقت تیم
          آماده‌سازی سخنران‌ها، و بعد از رایزنی‌ها، خود سخنرانان تمایل به همکاری
          با تدکس رو داشته باشن و رسما دعوت به همکاری تیم ما رو پذیرفته باشن :)‌
          اینم بگیم که برای سخنرانی در تدکس، لزومی نداره آدم معروف یا برجسته‌ای
          باشین. همین که ایده‌ی ارزشمندی از خودتون داشته باشین برای ورود به
          پروسه (کاندیدا شدن) کافیه.
        </Typography>
      </Expand>
      <Expand
        title="
        فرایند انتخاب نهایی سخنران‌ها چه‌طوریه؟
"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          معمولا تو مراحل اولیه‌ی انتخاب سخنران، تعداد کاندیداها بیشتر از تعداد
          سخنران‌های نهایی برای روز اجرا در نظر گرفته می‌شه. چون طی فرایند
          آماده‌سازی سخنرانی ممکنه خیلی از سخنران‌ها به دلایل مختلف از دور خارج
          بشن؛ مثلا این که خودشون نتونن به همکاری ادامه بدن یا ایده‌شون در نیاد
          یا دلایل دیگه. گزینش نهایی سخنران‌ها معمولا بر عهده‌ی تیم آماده‌سازی
          سخنران‌هاست و معیارهای انتخاب، مشخصه. مهم‌ترین معیار، اینه که ایده
          ارزش انتشار رو داشته باشه. دومین معیار اینه که سخنران و تیم بتونن باهم
          همکاری موفقی داشته باشن و سخنرانی به رویداد برسه. همین‌طور، ایده‌ی
          نهایی باید با درون‌مایه یا تم (Theme) رویداد هم‌خوانی داشته باشه. و
          راستی! این هم مهمه که ایده‌ی سخنران باید مناسب شنیده‌شدن از طریق این
          مدیوم باشه، یعنی بشه باهاش یه تدتاک، در قالب یکی از ۷ فرمت رایج و رسمی
          تدتاک‌ها خلق کرد.
        </Typography>
      </Expand>
      <Expand
        title="
        من هم می‌تونم جزو سخنران‌ها باشم؟
        "
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          چرا که نه :) اگر ایده‌‌ی ارزشمندی دارید، همین امروز می‌تونین از طریق
          گزینه‌ی «معرفی سخنران» در سایت ما به آدرس tedxlavasan.com، خودتون رو
          کاندیدای سخنرانی در تدکس‌های بعدی کنید.
        </Typography>
      </Expand>
      <Expand
        title="
        تاریخ و محل برگزاری تدکس لواسان چه زمانی هست؟
"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          رویداد به صورت آنلاین، در ۳۱ اردیبهشت ماه برگزار می‌شه. و ما شما رو از
          طریق سایت‌مون tedxlavasan.com و دیگر رسانه‌های تدکس لواسان در جریان
          همه‌ی امور می‌ذاریم تا از تاریخ شروع ثبت‌نام‌‌مون مطلع بشید و در مورد
          سخنرانان بیشتر بدونید. پس لطفا تا روز رویداد در اردیبهشت ماه، با ما
          همراه باشید و رسانه‌های ما رو در پلتفرم‌های مختلف پیگیری کنید.
        </Typography>
      </Expand>
      <Expand
        title="
        اگر شرایط شرکت در تدکس لواسان رو نداشته باشیم، چه‌طور می‌تونیم به ویدئوهای کامل رویداد دسترسی داشته باشیم؟ "
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          ویدئوی تمام رویدادهای تدکس در همه‌ جای جهان، بعد از برگزاری و تایید
          تد، با زیرنویس انگلیسی توی سایت تد و یا کانال یوتیوب تدکس (TEDx)، برای
          مشاهده‌ی عموم، به رایگان در دسترس خواهند بود. دقیقا مثل ویدئوهای خود
          کنفرانس‌های تد که از سایت TED.com همیشه به رایگان در دسترسن. البته با
          توجه به شرایط کرونا، رویداد ما هم مثل همه‌ی تدکس‌هایی که این روزها
          برگزار می‌شن، آنلاین برگزار می‌شه و خوبیش اینه که این‌طوری، شانس شما
          برای شرکت توی رویداد بیشتر می‌شه.
        </Typography>
      </Expand>
      <Expand
        title="
        شرکت‌کننده‌ها در این رویداد فقط تماشاچی هستند یا باید منتظر یه فضای تعاملی باشیم؟"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          زمانی که تدکس‌ها حضوری برگزار می‌شدن؛ فضای هر کدوم بیشتر تعاملی‌ بود.
          اما با توجه به آنلاین شدن تدکس‌ها به‌خاطر شرایط کرونا، امکان
          پرسش‌و‌پاسخ با سخنران‌ها فراهم نیست. اما ما در تلاشیم که از روش‌های
          دیگه‌ای بتونیم تعامل شرکت‌کنندگان در رویداد رو فراهم کنیم. به‌زودی
          اطلاعات بیشتری در این زمینه اعلام می‌کنیم.
        </Typography>
      </Expand>
      <Expand
        title="
        
آیا شرکت در تدکس لواسان برای عموم آزاده؟

"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          البته! هم خودتون شرکت کنید و هم اگر دوست داشتید؛ ما رو به دوستان‌تون
          معرفی کنید. :)
        </Typography>
      </Expand>
      <Expand
        title="
        آیا تدکس‌ لواسان به زبان فارسی برگزار می‌شه ؟"
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          بله! همه‌ی سخنرانی‌ها به زبان فارسیه.
        </Typography>
      </Expand>
      <Expand
        title="
        با توجه به شرایط کرونا، تدکس لواسان به صورت آنلاین برگزار می‌شه؟ "
      >
        <Typography fontWeight="100" lineHeight="22px" fontSize="14px">
          بله! با توجه به شرایط همه‌گیری کرونا، همه‌ی رویدادهای تدکس در سراسر
          جهان این روزها به‌صورت آنلاین برگزار می‌شن. اما سیستم ثبت‌نام، دقیقا
          مثل قبل، آنلاینه و از طریق سایت هر رویداد اتفاق می‌افته. اینم آدرس
          سایت‌مون، برای ثبت‌نام: <a href="tedxlavasan.com">tedxlavasan.com</a>
          :)
        </Typography>
      </Expand>
      <FooterSection />
    </FAQContainer>
  );
}
