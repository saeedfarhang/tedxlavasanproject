import React, { useEffect } from "react";
import styled from "styled-components";
import Typography from "../elements/Typography";
import ReadingProcess from "./ReadingProcess";

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.open ? "90%" : "0")};
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #000;
  z-index: 1000;
  transition: all 0.5s ease;
  .pop-content {
    overflow-y: scroll;
    position: absolute;
    z-index: 1000;
    height: 100%;
    .header-img {
      width: 100%;
      min-height: 160px;
    }
    .close-btn {
      position: absolute;
      top: 40px;
      right: 20px;
      z-index: 1001;
    }
    .text {
      position: absolute;
      top: 40px;

      .about-tl-text {
        margin: 20px;
        line-height: 36px;
        text-align: right;
      }
    }
  }
`;

export default function ReadMorePop(props) {
  const { open, setOpen } = props;
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <Container open={open}>
      <ReadingProcess>
        <div className="header-img">
          <img
            style={{ height: "100%", width: "100%", opacity: 0.5 }}
            src={props.headerImg}
            alt=""
          />
        </div>
        <img
          className="close-btn"
          src={`${process.env.PUBLIC_URL}/assets/ic-close-w.svg`}
          alt=""
          onClick={() => setOpen(false)}
        />
        <div className="text">
          <Typography
            className="title-text"
            variant="h4"
            fontSize="20px"
            fontWeight="normal"
          >
            درباره تدکس لواسان
          </Typography>
          <Typography
            variant="p"
            fontSize="16px"
            fontWeight="300"
            color="#B2B2B2"
            className="about-tl-text"
          >
            کمـی کـه از تهـران - ایـن پایتخـت سرســام آور و پرآشــوب - دور می
            شـویم و پیچ و خـم جـاده را طـی می کنیــم، بــه لواســان می رســیم.
            پشـت هـر پیـچ ایـن جاده، بخشـی از آشــوب ذهنــی مــا جــا می مانــد
            و هــر فــراز و فــرودی، اندکــی از آشــفتگی روح مــا می کاهــد.
            بــه لواســان کــه می رســیم، از سرســام پایتخــت خبــری نیســت، و
            جســم و ذهــن و روان مــا آرام آرام قــرار می یابــد. لواســان،
            بــرای مــا کــه در تهــران زندگــی و کار مــی کنیــم، چیــزی را
            بــا خــود دارد کــه خانــه بایـد داشـته باشـد: آرامـش. جایـی بــرای
            آســودن بــدون فرســودن و اندیشیدن بدون اضطراب. تدکــس لواســان،
            جایــی بــرای همیـن قـرار اسـت؛ راه فـراری بـرای ذهن هــا و روان
            هایــی کــه زیــر آوار ویرانگــر حــوادث روزمــره، فرصتــی بــرای
            آســایش و نفــس کشــیدن ندارنــد. مــا اندکــی از پایتخــت دور می
            شــویم، تــا اندکــی بــه خودمـان نزدیکتـر شـویم و بخـت عمیقتــر
            اندیشــیدن و قــرار گرفتــن در مســیر ایده هــای بــزرگ را بــه دست
            آوریم. مــا در تدکــس لواســان، چنــد قــدم از سراســیمگی شــهر
            دورتــر، و چنــد قــدم بــه بکــر بــودن طبیعــت نزدیکتریــم؛ و
            بــاور داریــم کــه همیــن چنــد قــدم، بــه مــا آزادی آفرینـش
            بیشـتر و تبدیـل شـدن بـه آدم هایــی بهتــر را عطــا می کنــد.
          </Typography>
        </div>
      </ReadingProcess>
    </Container>
  );
}
