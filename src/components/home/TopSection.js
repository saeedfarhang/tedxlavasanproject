import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Button from "../../elements/Button";
import Typography from "../../elements/Typography";

const CustomTopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default function TopSection(props) {
  const isMobile = useMediaQuery({ maxWidth: 485 });

  const scrollHandle = () => {
    if (props.speakerRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: props.speakerRef.current.offsetTop - 100,
      });
    }
  };

  return (
    <CustomTopSection {...props}>
      <img className="main-bg" src="assets/bg-main.png" alt="main-bg" />
      <img className="dots-1" src="assets/dots-1.svg" alt="dots-1" />
      <div className="content-container">
        {isMobile ? (
          <>
            <Typography variant="h1" fontWeight="normal" fontSize="20px">
              تدکس لواسان - ٣۱ اردیبهشت ۱۴۰۰
            </Typography>

            <Typography
              margin={"18px 0 43px 0"}
              color="#B2B2B2"
              variant="p"
              fontWeight="300"
              fontSize="16px"
            >
              فروش بلیط از ابتدای ادریبهشت آغاز خواهد شد
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h1" fontWeight="normal" fontSize="30px">
              تدکس لواسان - ٣۱ اردیبهشت ۱۴۰۰
            </Typography>

            <Typography
              margin={"18px 0 43px 0"}
              color="#B2B2B2"
              variant="p"
              fontWeight="300"
              fontSize="20px"
            >
              فروش بلیط از ابتدای ادریبهشت آغاز خواهد شد
            </Typography>
          </>
        )}

        <Button disable variant="fill">
          خرید بلیط
        </Button>
        <div className="link-to-speakers-container" onClick={scrollHandle}>
          <Typography
            color="#B2B2B2"
            variant="p"
            fontWeight="300"
            fontSize="20px"
          >
            لیست سخنران‌ها
          </Typography>
          <img className="dots-2" src="assets/dots-0.svg" alt="dots-1" />
          <div className="link-to-speakers-arrow-down">
            <img
              className="arrow-down"
              src="assets/ic-arrow-down.svg"
              alt="arrow-down"
            />
            <img
              className="chaos-h-link"
              src="assets/chaos-h.svg"
              alt="chaos-h"
            />
          </div>
        </div>
      </div>
    </CustomTopSection>
  );
}
