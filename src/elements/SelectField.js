import React from "react";
import Select from "react-select";
import styled from "styled-components";
import Typography from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
`;

const CustomSelect = styled(Select)`
  border-radius: 0;

  .react-select__control {
    border-radius: 0;

    background-color: transparent;
    border: solid 1px #b2b2b220;
    box-shadow: none;
    caret-color: #e62b1e;
    font-size: 14px;
    font-weight: "300";
    color: #fff;
    .react-select__placeholder {
      color: #464646;
    }
    .react-select__input {
      color: #fff;
    }
    :hover {
      border: solid 1px #b2b2b250;
    }

    .react-select__value-container {
      .react-select__single-value {
        color: #fff;
      }
    }

    .react-select__indicators {
      .react-select__indicator-separator {
        display: none;
      }
      .react-select__indicator {
        color: #b2b2b2;
      }
    }
  }
  .react-select__menu {
    margin-top: 0;
    border-radius: 0;
    border: solid 1px #e62b1e;
    border-top: none;
    background-color: #000;
    z-index: 100;
    :hover {
      /* background-color: transparent;  */
    }
    .react-select__menu-list {
      overflow-y: scroll;
      height: 100px;
      z-index: 100;
    }
    .react-select__option {
      z-index: 100;
      font-size: 14px;
      font-weight: "300";
      :hover {
        background-color: #464646;
      }
    }
    .react-select__option--is-selected {
      background-color: #b2b2b225;
    }
    .react-select__option--is-focused {
      background-color: #b2b2b220;
    }
  }
  .react-select__control--is-focused {
    border: solid 1px #e62b1e;
    :hover {
      border: solid 1px #e62b1e;
    }
  }
  .react-select__control--menu-is-open {
    border-bottom: none;
    :hover {
      border-bottom: none;
    }
  }
`;
const aquaticCreatures = [
  { label: "طراحی", value: "طراحی" },
  { label: "برگزاری مراسم", value: "برگزاری مراسم،" },
  { label: "اسپانسرشیپ", value: "اسپانسرشیپ،" },
  { label: "مارکتینگ", value: "مارکتینگ" },
];

export default function SelectField(props) {
  return (
    <Container>
      <Typography
        margin={"0 0 10px 0"}
        textAlign="right"
        variant="h6"
        fontSize="14px"
        fontWeight="300"
        color="#b2b2b2"
      >
        {props.label}
      </Typography>
      <CustomSelect
        className="react-select-container"
        classNamePrefix="react-select"
        options={aquaticCreatures}
        placeholder={props.placeholder}
        {...props}
      />
    </Container>
  );
}
