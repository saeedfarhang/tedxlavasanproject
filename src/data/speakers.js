export const speakersData = [
  {
    id: 1,
    title: "لیلی زمردیان",
    redxDir: "left",
    RedxMarginRight: "70px",
    desc: "سخنران",
    telegram: "https://www.telegram.me/mamacenter/",
    facebook: "",
    twitter: "",
    instagram: "https://www.instagram.com/leilyzomorodian",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/zomorodian.jpg`,
  },
  {
    id: 2,
    title: "ریحان جعفری زاده",
    redxDir: "right",
    RedxMarginRight: "100px",
    desc: "سخنران",
    telegram: "https://www.telegram.me/reyhan_jafarizadeh",
    facebook: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/jafarizadeh-psychology",
    instagram: "https://www.instagram.com/rayhan.jafarizadeh/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/jafarizade.jpg`,
  },
  {
    id: 3,
    title: "شهاب جوانمردی",
    redxDir: "left",
    RedxMarginRight: "95px",
    desc: "سخنران",
    telegram: "",
    web: "https://www.javanmardi.info",
    facebook: "",
    twitter: "",
    linkedin: "https://linkedin.com/in/shahabjavanmardy",
    instagram: "https://www.instagram.com/fanapceo/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/javanmardi.jpg`,
  },
  {
    id: 4,
    title: "کیومرث مرادی",
    redxDir: "right",
    RedxMarginRight: "120px",
    desc: "سخنران",
    telegram: "",
    web: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/kiomarsmoradi/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/moradi.jpeg`,
  },
  {
    id: 5,
    title: "نگار علیزاده",
    redxDir: "left",
    RedxMarginRight: "120px",
    desc: "سخنران",
    telegram: "https://www.telegram.me/negarinfood",
    web: "www.negarinfood.com",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/_negaralizadeh_/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`,
  },
  {
    id: 6,
    title: "هدیه مولایی",
    redxDir: "left",
    RedxMarginRight: "120px",
    desc: "سخنران",
    telegram: "https://www.telegram.me/lifestyle_travel/",
    web: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/hediye_molaei/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/`,
  },
  {
    id: 7,
    title: "آرمینا صادقیان",
    redxDir: "left",
    RedxMarginRight: "160px",
    desc: "سخنران",
    telegram: "",
    web: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/arminasadeghian_/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/sadeqian.jpg`,
  },
  {
    id: 8,
    title: "الناز رکابی",
    redxDir: "left",
    RedxMarginRight: "120px",
    desc: "سخنران",
    telegram: "",
    web: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/elnaz.rekabi/",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/elnazrekabi.jpeg`,
  },
  {
    id: 9,
    title: "علیرضا امتیاز",
    redxDir: "left",
    RedxMarginRight: "20px",
    desc: "سخنران",
    telegram: "",
    web: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    imageUrl: `${process.env.PUBLIC_URL}/assets/speakers-img/alirezaemtiaz.jpg`,
  },
];

// ____________________________________________
{
  /*
<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/zomorodian.jpg`}
redxDir="left"
RedxMarginRight="70px"
title="لیلی زمردیان"
desc="سخنران"
telegram="https://www.telegram.me/mamacenter/"
facebook=""
twitter=""
instagram="https://www.instagram.com/leilyzomorodian"
/>
<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/jafarizade.jpg`}
redxDir="right"
RedxMarginRight="100px"
title="ریحان جعفری زاده"
desc="سخنران"
telegram="https://www.telegram.me/reyhan_jafarizadeh"
linkedin="https://www.linkedin.com/in/jafarizadeh-psychology"
facebook=""
twitter=""
instagram="https://www.instagram.com/rayhan.jafarizadeh/"
/>
<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/javanmardi.jpg`}
redxDir="left"
RedxMarginRight="95px"
title="شهاب جوانمردی"
desc="سخنران"
linkedin="https://linkedin.com/in/shahabjavanmardy"
web="https://www.javanmardi.info"
facebook=""
twitter=""
instagram="https://www.instagram.com/fanapceo/"
/>
<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/moradi.jpeg`}
redxDir="right"
RedxMarginRight="120px"
title="کیومرث مرادی"
desc="سخنران"
facebook=""
twitter=""
instagram="https://www.instagram.com/kiomarsmoradi/"
/>
{/* <SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/poornejati.jpeg`}
redxDir="left"
RedxMarginRight="80px"
title="مصطفی پور نجاتی"
desc="سخنران"
web="https://www.nevisandegikhallagh.ir"
facebook=""
twitter=""
instagram="https://www.instagram.com/mostafa.pournejati/"
/> 

<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`}
redxDir="left"
RedxMarginRight="120px"
title="نگار علیزاده"
web="www.negarinfood.com"
telegram="https://www.telegram.me/negarinfood"
desc=""
facebook=""
twitter=""
instagram="https://www.instagram.com/_negaralizadeh_/"
/>

<SpeakerCard
// imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`}
redxDir="left"
RedxMarginRight="120px"
title="هدیه مولایی"
desc="سخنران"
telegram="https://www.telegram.me/lifestyle_travel/"
facebook=""
twitter=""
instagram="https://www.instagram.com/hediye_molaei/"
/>

<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/sadeqian.jpg`}
redxDir="left"
RedxMarginRight="160px"
title="آرمینا صادقیان"
desc="سخنران"
facebook=""
twitter=""
instagram="https://www.instagram.com/arminasadeghian_/"
/>

<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/elnazrekabi.jpeg`}
redxDir="left"
RedxMarginRight="120px"
title="الناز رکابی"
desc="سخنران"
facebook=""
twitter=""
instagram="https://www.instagram.com/elnaz.rekabi/"
/>

<SpeakerCard
// imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/negaralizadeh.jfif`}
redxDir="left"
RedxMarginRight="120px"
title="مهرداد اسکویی"
desc="سخنران"
facebook=""
twitter=""
instagram="https://www.instagram.com/mehrdad.oskouei_official/"
/>
<SpeakerCard
imageUrl={`${process.env.PUBLIC_URL}/assets/speakers-img/alirezaemtiaz.jpg`}
redxDir="left"
RedxMarginRight="20px"
title="علیرضا امتیاز"
desc="سخنران"
facebook=""
twitter=""
instagram=""
/>

*/
}
