import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  CommonSubTitle,
  RsWrapper,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";

const InnerTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const InnerSubTitle = styled.h3``;

const MM03Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <SubBanner title={`매장안내`} />
      <CommonSubTitle>하단의 선택한 매장명 넣어주세요</CommonSubTitle>
      <Wrapper width={`100%`} height={`600px`} bgColor={`#d2d2d2`}></Wrapper>

      <RsWrapper margin={`50px 0px`}>
        <Wrapper height={`250px`}>
          <Wrapper height={`50%`} dr={`row`}>
            <Wrapper
              width={`50%`}
              height={`100%`}
              bgColor={`#d2d2d2`}
              padding={`15px`}
              dr={`row`}
            >
              <Wrapper al={`flex-start`} width={`120px`}>
                IMAGE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`160px`}>
                TITLE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`calc(100% - 120px - 220px)`}>
                CONTENTS
              </Wrapper>
            </Wrapper>
            <Wrapper
              width={`50%`}
              height={`100%`}
              bgColor={`#919191`}
              padding={`15px`}
              dr={`row`}
            >
              <Wrapper al={`flex-start`} width={`120px`}>
                IMAGE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`160px`}>
                TITLE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`calc(100% - 120px - 220px)`}>
                CONTENTS
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper height={`50%`} dr={`row`}>
            <Wrapper
              width={`50%`}
              height={`100%`}
              bgColor={`#919191`}
              padding={`15px`}
              dr={`row`}
            >
              <Wrapper al={`flex-start`} width={`120px`}>
                IMAGE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`160px`}>
                TITLE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`calc(100% - 120px - 220px)`}>
                CONTENTS
              </Wrapper>
            </Wrapper>

            <Wrapper
              width={`50%`}
              height={`100%`}
              bgColor={`#d2d2d2`}
              padding={`15px`}
              dr={`row`}
            >
              <Wrapper al={`flex-start`} width={`120px`}>
                IMAGE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`160px`}>
                TITLE
              </Wrapper>
              <Wrapper al={`flex-start`} width={`calc(100% - 120px - 220px)`}>
                CONTENTS
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>

      <CommonSubTitle>매장찾기</CommonSubTitle>
      <Wrapper width={`100%`} height={`600px`} bgColor={`#d2d2d2`}></Wrapper>

      <RsWrapper margin={`50px 0px`}>
        <Wrapper dr={`row`} ju={`flex-start`} padding={`30px 0px`}>
          {/* ************************************************************ */}
          {/* ************************************************************ */}
          {/* DATA Loop START! */}
          <Wrapper
            isRelative={true}
            width={`400px`}
            height={`300px`}
            bgColor={`#d3d3d3`}
            margin={`20px`}
            shadow={Theme.boxShadowV2}
          >
            <Wrapper
              isAbsolute={true}
              width={`100%`}
              height={`100px`}
              bgColor={`#fff`}
              left={`0`}
              bottom={`0`}
              al={`flex-start`}
              padding={`10px 20px`}
              ju={`space-around`}
            >
              <InnerTitle>TITLE</InnerTitle>
              <InnerSubTitle>
                String Length 48번 넘어가면 슬라이스 "..." 처리 요망
              </InnerSubTitle>
            </Wrapper>
          </Wrapper>
          {/* DATA Loop END! */}
          {/* ************************************************************ */}
          {/* ************************************************************ */}
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM03Presenter);
