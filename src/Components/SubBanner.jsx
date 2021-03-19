import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Wrapper, CommonButton } from "../Components/CommonComponents";
import { menus } from "../Routes/Layouts/clientMenus";
import { NavLink } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";

const SubBannerBox = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${(props) => props.src});
  background-color: ${(props) => props.theme.black_C};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 2px 10px #eee;

  @media (max-width: 700px) {
    margin-top: 90px;
    height: 200px;
  }
`;

const SubBannerTitle = styled.h2`
  font-size: 60px;
  color: ${(props) => props.theme.white_C};
  text-shadow: 1px 2px 3px ${(props) => props.theme.white_C};
  padding: 15px 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.radius};
  /* backdrop-filter: blur(10px); */

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SubBanner = ({ location, width, title }) => {
  const [subButton, setSubButton] = useState(null);
  const [currentActive, setCurrentActive] = useState(null);

  const path = `/${location.pathname.split("/", 2)[1]}`;

  let btnArr = [];

  menus.map((data) => {
    if (`/${data.menuLink.split("/", 2)[1]}` === path) {
      data.subMenus.length === null && setSubButton([]);
      data.subMenus.map((subData) => {
        btnArr.push({
          name: subData.subMenuName,
          link: subData.subMenuLink,
        });
      });
    }
  });

  if (subButton === null) {
    setSubButton(btnArr);
  }

  let subPath = `/${location.pathname.split("/")[2]}`;
  subPath = subPath.replace(`/`, ``);

  if (currentActive === null || currentActive !== subPath) {
    setCurrentActive(subPath);
  }

  return (
    <SubBannerBox>
      <Fade bottom delay={0}>
        <SubBannerTitle>{title}</SubBannerTitle>
      </Fade>
      <Wrapper dr={`row`} margin={`30px 0px 0px`} wrap={`inherit`}></Wrapper>
    </SubBannerBox>
  );
};

export default withResizeDetector(withRouter(SubBanner));
