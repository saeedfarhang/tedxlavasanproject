import React, { useEffect, useState } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import Button from "../elements/Button";

const NavBarContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.scrollTop > 50
      ? "linear-gradient(180deg, #000000, #00000000)"
      : "#000"};
  height: ${(props) => (props.scrollTop > 50 ? "100px" : "130px")};
  @media screen and (min-width: 450px) {
    height: ${(props) => (props.scrollTop > 50 ? "100px" : "150px")};
  }
  @media screen and (min-width: 740px) {
    height: ${(props) => (props.scrollTop > 50 ? "100px" : "170px")};
  }
`;

const NavLinks = styled.div`
  justify-content: center;
  display: none;
  @media screen and (min-width: 850px) {
    display: flex;
  }
`;

const NavLogo = styled.img`
  width: 230px;
  height: 70px;
`;

const HambMenu = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  border: solid 1px #e62b1e;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  transition: all 0.2s ease-in-out;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  /* height: ${(props) => (props.open ? "250px" : "0")}; */
  /* overflow: hidden; */
  z-index: 100;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  padding: 20px;
  background-color: #000;
  top: 120%;
  right: 0;
  border-radius: 25px;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

export default function NavBar(props) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  console.log(scrollTop);
  return (
    <NavBarContainer scrollTop={scrollTop}>
      <HambMenu onClick={() => setMenuOpen((state) => !state)}>
        <NavMenu open={menuOpen}>
          <HashLink smooth to="/#">
            <Button variant="fill">خرید بلیط</Button>
          </HashLink>
          <HashLink smooth to="/#speakers">
            <Button variant="clear">سخنران ها</Button>
          </HashLink>
          <HashLink smooth to="/#about">
            <Button variant="clear">درباره</Button>
          </HashLink>
          <HashLink smooth to="/#volenteers">
            <Button variant="clear">داوطلب ها</Button>
          </HashLink>
          <HashLink smooth to="/#tedandtedx">
            <Button variant="clear">تد چیست؟</Button>
          </HashLink>
        </NavMenu>
      </HambMenu>
      <NavLinks>
        <HashLink smooth to="/#">
          <Button variant="fill">خرید بلیط</Button>
        </HashLink>
        <HashLink smooth to="/#speakers">
          <Button variant="clear">سخنران ها</Button>
        </HashLink>
        <HashLink smooth to="/#about">
          <Button variant="clear">درباره</Button>
        </HashLink>
        <HashLink smooth to="/#volenteers">
          <Button variant="clear">داوطلب ها</Button>
        </HashLink>
        <HashLink smooth to="/#tedandtedx">
          <Button variant="clear">تد چیست؟</Button>
        </HashLink>
      </NavLinks>
      <NavLogo src="assets/tedx-logo.svg" />
    </NavBarContainer>
  );
}
