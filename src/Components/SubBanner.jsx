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
  height: 360px;
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
  margin-top: 92px;

  @media (max-width: 700px) {
    height: 200px;
    margin-top: 72px;
  }
`;

const SubBannerTitle = styled.h2`
  font-size: 60px;
  color: ${(props) => props.theme.white_C};
  font-family: "BMDOHYEON", sans-serif;

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const SubBanner = ({ location, src, title }) => {
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
    <SubBannerBox src={src}>
      <Fade bottom delay={0}>
        <SubBannerTitle>{title}</SubBannerTitle>
      </Fade>
    </SubBannerBox>
  );
};

export default withResizeDetector(withRouter(SubBanner));
