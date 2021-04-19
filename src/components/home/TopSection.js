import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Button from "../../elements/Button";
import Typography from "../../elements/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

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
      <LazyLoadImage
        className="main-bg"
        src={`${process.env.PUBLIC_URL}/assets/bg-main.png`}
        alt="main-bg"
      />
      <LazyLoadImage
        className="dots-1"
        src={`${process.env.PUBLIC_URL}/assets/dots-1.svg`}
        alt="dots-1"
      />
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
              فروش بلیط از ابتدای اردیبهشت آغاز خواهد شد
            </Typography>
          </>
        )}

        <Link to="/signup">
          <Button variant="fill">خرید بلیط</Button>
        </Link>
        <div className="link-to-speakers-container" onClick={scrollHandle}>
          <Typography
            color="#B2B2B2"
            variant="p"
            fontWeight="300"
            fontSize="20px"
          >
            لیست سخنران‌ها
          </Typography>
          <LazyLoadImage
            className="dots-2"
            src={`${process.env.PUBLIC_URL}/assets/dots-0.svg`}
            alt="dots-1"
          />
          <div className="link-to-speakers-arrow-down">
            <LazyLoadImage
              className="arrow-down"
              src={`${process.env.PUBLIC_URL}/assets/ic-arrow-down.svg`}
              alt="arrow-down"
            />
            <LazyLoadImage
              className="chaos-h-link"
              src={`${process.env.PUBLIC_URL}/assets/chaos-h.svg`}
              alt="chaos-h"
            />
          </div>
        </div>
      </div>
    </CustomTopSection>
  );
}
