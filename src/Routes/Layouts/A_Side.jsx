import React, { useState } from "react";
import {
  WholeWrapper,
  Wrapper,
  SideMenu,
  SubMenus,
  SubMenu,
} from "../../Components/AdminCommonComponents";

import { allMenus } from "./adminMenus";
import { MdExpandMore } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const A_Side = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const _openSubMenu = (event, tab) => {
    setCurrentTab(tab);
  };
  return (
    <WholeWrapper>
      {allMenus.map((menu, idx) => {
        return (
          <Wrapper
            al={`flex-start`}
            ju={`flex-start`}
            margin={`0px 0px 5px 0px`}
            key={idx}
          >
            {idx === 0 ? (
              <Link to={menu.link} className={`Atag`}>
                <SideMenu
                  margin={`0px 10px 5px`}
                  onClick={(event) => _openSubMenu(event, idx)}
                  isActive={idx === currentTab}
                  className={
                    menu.menuName === "관리자 메인" && idx === currentTab
                      ? `main`
                      : `noneClass`
                  }
                >
                  {menu.menuName}
                </SideMenu>
              </Link>
            ) : (
              <>
                <SideMenu
                  margin={`5px 10px`}
                  onClick={(event) => _openSubMenu(event, idx)}
                  isActive={idx === currentTab}
                >
                  {menu.menuName}
                  <MdExpandMore />
                </SideMenu>
                <SubMenus margin={`5px 10px`} isActive={idx === currentTab}>
                  {menu.subMenu?.map((sub, idx) => {
                    return (
                      <Fade key={idx} delay={idx * 40} left>
                        <Link to={sub.subMenuLink}>
                          <SubMenu>{sub.subMenuName}</SubMenu>
                        </Link>
                      </Fade>
                    );
                  })}
                </SubMenus>
              </>
            )}
          </Wrapper>
        );
      })}
    </WholeWrapper>
  );
};

export default A_Side;
