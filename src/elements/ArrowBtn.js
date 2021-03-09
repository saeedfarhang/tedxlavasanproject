import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

const CustomArrowBtn = styled.div`
  width: ${(props) => (props.width ? props.width : "107px")};
  height: 32px;
  border-bottom: solid 1px #e62b1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* transform: translateX(10px); */
  transition: all 0.2s ease;
  margin-left: 10px;
  margin: ${(props) => (props.margin ? props.margin : "")};
  z-index: 1;
  :hover {
    ${(props) =>
      props.noHover
        ? ""
        : " width: 117px;margin-left: 0px;"}/* transform: translateX(0); */
  }
`;

export default function ArrowBtn(props) {
  return (
    <CustomArrowBtn
      width={props.width}
      margin={props.margin}
      noHover={props.noHover}
    >
      <Typography reduce="0px" fontSize="14px" textAlign="left" color="#e62b1e">
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
