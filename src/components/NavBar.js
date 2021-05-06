import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
      : "linear-gradient(180deg, #000000, #00000000)"};
  height: ${(props) => (props.scrollTop > 50 ? "100px" : "130px")};
  @media screen and (max-width: 600px) {
    height: ${(props) => (props.scrollTop > 50 ? "100px" : "150px")};
    ${(props) => (props.open ? "background-color:#000000;" : "")}
  }
  @media screen and (min-width: 740px) {
    height: ${(props) => (props.scrollTop > 50 ? "100px" : "170px")};
  }
`;

const NavLinks = styled.div`
  .active {
    color: #e62b1e;

    .under-line {
      width: 30px;
      height: 2px;
      transform: translateX(0);
      margin: 8px auto 0 auto;
    }
  }
  justify-content: center;
  display: none;
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

const NavLogo = styled.img`
  width: 230px;
  height: 70px;
`;

const HambMenu = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  @media screen and (min-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    position: static;
  }
  .icon-div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .menu_line-1 {
      height: 1px;
      width: 24px;
      background-color: #e62b1e;
      margin: 3px 0;
      ${(props) =>
        props.open ? "transform:translateY(3px) rotate(45deg);" : ""}
    }
    .menu_line-2 {
      height: 1px;
      width: 24px;
      background-color: #e62b1e;
      margin: 3px 0;
      display: ${(props) => (props.open ? "none" : "block")};
    }
    .menu_line-3 {
      height: 1px;
      width: 24px;
      background-color: #e62b1e;
      margin: 3px 0;
      ${(props) =>
        props.open ? "transform:translateY(-3px) rotate(-45deg) ;" : ""}
    }
  }
`;

const NavMenu = styled.div`
  transition: all 0.2s ease-in-out;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  z-index: 100000;
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
  @media screen and (min-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    height: ${(props) =>
      props.scrollTop > 50 ? "calc(100vh - 70px)" : "calc(100vh - 100px)"};
    position: absolute;
    top: ${(props) => (props.scrollTop > 50 ? "70px" : "100px")};
    right: 0;
    padding: 0;
    margin: 0;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    button {
      padding: 25px 35vw;
    }
    overflow-y: auto;
  }
`;

export default function NavBar(props) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activateLink, setActivateLink] = useState("");
  const [navBtns, setNavBtns] = useState([]);

  useEffect(() => {
    setNavBtns([...document.getElementsByClassName("nav-btn")]);
    setActivateLink(props.activateLink);

    navBtns.map((btn) => {
      if (activateLink === btn.id) {
        btn.classList.add("active");
      }
    });
  }, [activateLink]);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (
    <NavBarContainer open={menuOpen} scrollTop={scrollTop}>
      <HambMenu open={menuOpen} onClick={() => setMenuOpen((state) => !state)}>
        <div className="icon-div">
          <div className="menu_line-1"></div>
          <div className="menu_line-2"></div>
          <div className="menu_line-3"></div>
        </div>
        <NavMenu open={menuOpen} scrollTop={scrollTop}>
          <div style={{ height: 30 }}></div>
          <Link to="/">
            <Button className="nav-btn" variant="clear">
              صفحه اصلی
            </Button>
          </Link>
          <Link to="/faq">
            <Button className="nav-btn" id="faq" variant="clear">
              سوالات متداول
            </Button>
          </Link>
          <Link to="/how">
            <Button className="nav-btn" id="howSign" variant="clear">
              آموزش ثبت نام
            </Button>
          </Link>
          <Link to="/speakers" id="speakers">
            <Button className="nav-btn" id="speakers" variant="clear">
              سخنرانان
            </Button>
          </Link>
          <Link to="/sponsors" id="sponsors">
            <Button className="nav-btn" id="sponsers" variant="clear">
              حامیان
            </Button>
          </Link>
          <Link to="/workshop" id="workshop">
            <Button className="nav-btn" id="workshop" variant="clear">
              معرفی کارگاه
            </Button>
          </Link>
          <a
            style={{ margin: "auto 0 40px 0" }}
            href="https://www.aparat.com/event/4312"
          >
            <Button margin="20px" variant="fill">
              خرید بلیط
            </Button>
          </a>
        </NavMenu>
      </HambMenu>
      <NavLinks>
        <a href="https://www.aparat.com/event/4312">
          <Button margin="0 0 0 10px" variant="fill">
            خرید بلیط
          </Button>
        </a>
        <Link to="/faq">
          <Button className="nav-btn" id="faq" variant="clear">
            سوالات متداول
          </Button>
        </Link>
        <Link to="/how">
          <Button className="nav-btn" id="howSign" variant="clear">
            آموزش ثبت نام
          </Button>
        </Link>
        <Link to="/speakers">
          <Button className="nav-btn" id="speakers" variant="clear">
            سخنرانان
          </Button>
        </Link>
        <Link to="/sponsors" id="sponsors">
          <Button className="nav-btn" id="sponsers" variant="clear">
            حامیان
          </Button>
        </Link>
        <HashLink to="/workshop" id="workshop">
          <Button className="nav-btn" id="workshop" variant="clear">
            معرفی کارگاه
          </Button>
        </HashLink>
      </NavLinks>
      <HashLink smooth to="/#">
        <NavLogo src={`${process.env.PUBLIC_URL}/assets/tedx-logo.svg`} />
      </HashLink>
    </NavBarContainer>
  );
}
