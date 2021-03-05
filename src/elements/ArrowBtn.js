import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const CustomArrowBtn = styled.div`
  width: 107px;
  height: 32px;
  border-bottom: solid 1px #e62b1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* transform: translateX(10px); */
  transition: all 0.2s ease;
  :hover {
    width: 117px;
    /* transform: translateX(0); */
  }
`;

export default function ArrowBtn(props) {
  return (
    <CustomArrowBtn>
      <Typography fontSize="14px" textAlign="left" color="#e62b1e">
        متن سخنرانی
      </Typography>
      <img
        style={{ width: "14px", height: "7px" }}
        src="assets/ic-arrow-left.svg"
        alt=""
      />
    </CustomArrowBtn>
  );
}
