import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: all 0.1s ease;
  height: 100vh;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  right: 0;
  z-index: 10000;

  .pop-up-container {
    transition: all 0.3s ease 0.3s;
    border: 1px solid #4646464d;

    z-index: 100;
    position: relative;
    width: 95%;
    max-width: 460px;
    height: ${(props) => (props.open ? props.height : "0")};
    background-color: #000000;
    opacity: 0.98;
    /* @media screen and (max-height: 600px) {
      max-height: 450px;
      overflow-y: scroll;
    } */
    @media screen and (max-width: 485px) {
      height: 100%;
      width: 100vw;
      overflow-y: scroll;
    }
    .close-btn {
      width: 24px;
      height: 24px;
      margin: 20px 20px 0 0;
      @media screen and (max-width: 485px) {
        margin-top: 30px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 36px;
      margin: 36px 80px 160px 80px;
      @media screen and (max-width: 480px) {
        margin: 36px 15% 160px 15%;
      }
      .header-txt {
      }
    }
    .X-logo {
      position: fixed;
      margin: 0 auto;
      bottom: -15%;
      left: 0;
      right: 0;
    }
  }
  .under {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
`;

export default function PopUpDialog(props) {
  const { open, setOpen } = props;
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <Container open={open} height={props.height ? props.height : "561px"}>
      <div className="under" onClick={() => setOpen(false)}></div>

      <div className="pop-up-container">
        <div className="close">
          <img
            className="close-btn"
            src={`${process.env.PUBLIC_URL}/assets/ic-close.svg`}
            alt=""
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="content">{props.children}</div>
        <img
          className="X-logo"
          src={`${process.env.PUBLIC_URL}/assets/X-logo.svg`}
          alt=""
        />
      </div>
    </Container>
  );
}