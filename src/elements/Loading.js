import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  img.loading-ic {
    animation: anime 1s infinite;
    width: 25px;
    height: 25px;
  }
  img.check-ic {
    width: 25px;
    height: 25px;
  }
  @keyframes anime {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

export default function loading(props) {
  return (
    <Container>
      {props.loading.state ? (
        <img
          className="loading-ic"
          src={`${process.env.PUBLIC_URL}/assets/loading.png`}
          alt=""
        />
      ) : (
        ""
      )}
      {props.loading.after ? (
        props.loading.fail ? (
          <img
            className="check-ic"
            src={`${process.env.PUBLIC_URL}/assets/ic-close.svg`}
            alt=""
          />
        ) : (
          <img
            className="check-ic"
            src={`${process.env.PUBLIC_URL}/assets/check.png`}
            alt=""
          />
        )
      ) : (
        ""
      )}
    </Container>
  );
}
