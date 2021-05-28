import React, { useState, useEffect, useContext, useRef } from "react";
import {
  UlWrapper,
  LiWrapper,
  Wrapper,
  ATag,
  CommonButton,
} from "../../Components/CommonComponents";
import { Link, withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { appearAnimation, fullWidth } from "../../Components/AnimationCommon";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { withResizeDetector } from "react-resize-detector";
import Drawer from "@material-ui/core/Drawer";
import Bounce from "react-reveal/Bounce";
import Theme from "../../Styles/Theme";
import { toast } from "react-toastify";

const OnlyHeadAbsoluteWrapper = styled.div`
  display: none;
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  color: rgba(255, 255, 255, 0.72);
  background: rgba(0, 0, 0, 0.06);
  font-size: 13px;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: ${(props) => props.al || `flex-start`};
  justify-content: ${(props) => props.ju || `center`};
  opacity: 0.3;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const HeaderWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.white_C};
  display: flex;
  background: ${(props) => props.bgColor};
  border-bottom: ${(props) => props.borderBottom};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  z-index: 1000;
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.4s;

  &.main {
    background: ${(props) => props.theme.white_C};

    & svg {
      color: ${(props) => props.theme.black_C};
    }

    & li {
      color: ${(props) =>
        props.isActive
          ? `${props.theme.basicTheme_C}`
          : `${props.theme.black_C}`};
    }

    & .call {
      color: ${(props) => props.theme.basicTheme_C};
    }
  }

  &.background {
    background: ${(props) => props.theme.white_C};

    & svg {
      color: ${(props) => props.theme.black_C};
    }

    & li {
      color: ${(props) =>
        props.isActive
          ? `${props.theme.basicTheme_C}`
          : `${props.theme.black_C}`};
    }

    & .call {
      color: ${(props) => props.theme.basicTheme_C};
    }
  }
`;

const H_Wrapper = styled.div`
  width: 1350px;
  height: ${(props) => props.height || `100%`};
  color: ${(props) => props.theme.white_C};
  display: flex;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isRelative ? `relative` : ``)};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-shadow: ${(props) => props.shadow};
  transition: ${(props) => props.theme.transition};

  &:hover ${OnlyHeadAbsoluteWrapper} {
    display: flex;
    animation: ${appearAnimation} 1s forwards;
  }
  & .Header__menu:hover {
    font-weight: 600;
  }
  & .Header__menu.active {
    font-weight: 600;
  }
  @media (max-width: 1500px) {
    width: 1350px;
  }
  @media (max-width: 1350px) {
    width: 1280px;
  }
  @media (max-width: 1350px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 700px;
    display: none;
  }
`;

const Logo = styled.div`
  width: ${(props) => props.width || `150px`};

  & a {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 120px;
  }
`;

const LogoImg = styled.img`
  width: 100%;

  @media (max-width: 800px) {
    width: 120px;
  }
`;

const Menu = styled(LiWrapper)`
  cursor: pointer;
  font-size: 17px;
  color: ${(props) =>
    props.isActive
      ? `${props.theme.basicTheme_C} !important`
      : `${props.theme.white_C}`};

  &:hover {
    color: ${(props) => props.theme.basicTheme_C} !important;
  }
`;

const MobileHeader = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }

  & svg {
    cursor: pointer;
    font-size: 25px;
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#80c2e8, #0d3a56);
  z-index: 10000;

  & svg {
    cursor: pointer;
    font-size: 25px;
    color: ${(props) => props.theme.white_C};
  }

  & .react-reveal {
    width: 100%;
  }
`;

const MobileSubMenu = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
`;

const Header = ({ history, location, width }) => {
  //state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [reload, setReload] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const [login, setLogin] = useState(
    sessionStorage.getItem("KLJHQOSKXJKDAODU")
  );

  //handler
  const mobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const headerScroll = pageYOffset !== 0 && deltaY >= 0;
    setHeaderScroll(headerScroll);
    setPageY(pageYOffset);
  };

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("KLJHQOSKXJKDAODU");
    setLogin("");

    toast.success("로그아웃이 되었습니다.");
  };

  //useEffect
  useEffect(() => {
    setReload(!reload);
  }, [mobileSubMenu]);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  return (
    <HeaderWrapper
      isFixed={true}
      top={`0px`}
      left={`0px`}
      className={
        location.pathname === "/" ? headerScroll && `background` : `main`
      }
    >
      <H_Wrapper dr={`row`} padding={width < 1100 ? `0 20px` : `0 40px`}>
        <Wrapper
          height={`100%`}
          dr={`row`}
          al={`center`}
          ju={`space-between`}
          padding={`20px 0px`}
        >
          <Logo>
            <Link to="/">
              <LogoImg
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
                alt="LOGO"
              />
            </Link>
          </Logo>

          <UlWrapper width={`auto`} dr={`row`}>
            {/* <Link to="/">
              <Menu
                isActive={location.pathname === "/"}
                margin={
                  width < 1350
                    ? width < 1100
                      ? `0 15px`
                      : `0 30px`
                    : `0px 60px`
                }
              >
                펫마트
              </Menu>
            </Link> */}
            <Link to="/about">
              <Menu
                isActive={location.pathname === "/about"}
                margin={
                  width < 1350
                    ? width < 1100
                      ? `0 15px`
                      : `0 30px`
                    : `0px 60px`
                }
              >
                회사소개
              </Menu>
            </Link>
            {/* <Link to="/interior">
              <Menu
                isActive={location.pathname === "/interior"}
                margin={
                  width < 1350
                    ? width < 1100
                      ? `0 15px`
                      : `0 30px`
                    : `0px 60px`
                }
              >
                인테리어
              </Menu>
            </Link> */}
            <Link to="/info">
              <Menu
                isActive={location.pathname === "/info"}
                margin={
                  width < 1350
                    ? width < 1100
                      ? `0 15px`
                      : `0 30px`
                    : `0px 60px`
                }
              >
                매장안내
              </Menu>
            </Link>
            <Link to="/franchisee">
              <Menu
                isActive={location.pathname === "/franchisee"}
                margin={
                  width < 1350
                    ? width < 1100
                      ? `0 15px`
                      : `0 30px`
                    : `0px 60px`
                }
              >
                가맹절차
              </Menu>
            </Link>
            <Link to="/contact">
              <Menu
                isActive={location.pathname === "/contact"}
                margin={
                  width < 1350
                    ? width < 1100
                      ? `0 15px`
                      : `0 30px`
                    : `0px 60px`
                }
              >
                가맹상담/FAQ
              </Menu>
            </Link>
          </UlWrapper>
          <ATag width={`auto`} href="tel:15881684">
            <CommonButton
              width={`220px`}
              height={`48px`}
              radius={`25px`}
              fontSize={`18px`}
              kindOf={
                location.pathname === "/" ? (headerScroll ? `` : `white`) : ``
              }
            >
              가맹문의 1588-1684
            </CommonButton>
          </ATag>
        </Wrapper>
      </H_Wrapper>
      <MobileHeader>
        <Wrapper dr={`row`} ju={`space-between`} padding={`10px 0`}>
          <ATag width={`auto`} href="tel:15881684">
            <Wrapper
              width={`auto`}
              fontSize={`16px !important`}
              fontWeight={`800`}
              className={`call`}
            >
              1588-1684
            </Wrapper>
          </ATag>
          <Logo>
            <Link to="/">
              <LogoImg
                alt="logo"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
              />
            </Link>
          </Logo>
          <Wrapper width={`60px`} al={`flex-end`}>
            {mobileMenuOpen ? (
              <AiOutlineClose onClick={mobileMenuToggle} />
            ) : (
              <AiOutlineMenu onClick={mobileMenuToggle} />
            )}
          </Wrapper>
        </Wrapper>

        <Drawer open={mobileMenuOpen} anchor={`right`}>
          <MobileMenu>
            <Wrapper dr={`row`} ju={`flex-end`} padding={`20px 15px`}>
              <AiOutlineClose onClick={mobileMenuToggle} />
            </Wrapper>

            <UlWrapper
              width={`auto`}
              margin={`120px 0px 0px`}
              color={Theme.white_C}
            >
              <Link to="/">
                <Bounce delay={0}>
                  <MobileSubMenu fontSize={`18px`} margin={`25px 0px`}>
                    펫마트
                  </MobileSubMenu>
                </Bounce>
              </Link>
              <Link to="/about">
                <Bounce delay={100}>
                  <MobileSubMenu fontSize={`18px`} margin={`25px 0px`}>
                    회사
                  </MobileSubMenu>
                </Bounce>
              </Link>
              <Link to="/interior">
                <Bounce delay={200}>
                  <MobileSubMenu fontSize={`18px`} margin={`25px 0px`}>
                    인테리어
                  </MobileSubMenu>
                </Bounce>
              </Link>
              <Link to="/info">
                <Bounce delay={300}>
                  <MobileSubMenu fontSize={`18px`} margin={`25px 0px`}>
                    매장안내
                  </MobileSubMenu>
                </Bounce>
              </Link>
              <Link to="/franchisee">
                <Bounce delay={300}>
                  <MobileSubMenu fontSize={`18px`} margin={`25px 0px`}>
                    가맹절차
                  </MobileSubMenu>
                </Bounce>
              </Link>
              <Link to="/contact">
                <Bounce delay={300}>
                  <MobileSubMenu fontSize={`18px`} margin={`25px 0px`}>
                    가맹상담
                  </MobileSubMenu>
                </Bounce>
              </Link>
            </UlWrapper>
          </MobileMenu>
        </Drawer>
      </MobileHeader>
    </HeaderWrapper>
  );
};

export default withResizeDetector(withRouter(Header));
