import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  CommonSubTitle,
  RsWrapper,
  Image,
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

const InnerSubTitle = styled.h3`
  line-height: 1.3;
`;

const MartWrapper = styled(Wrapper)`
  width: calc(100% / 3 - (80px / 3));
  margin: 20px 40px 20px 0;

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 900px) {
    width: calc(100% / 2 - (20px / 2));
    margin: 20px 20px 20px 0;

    &:nth-child(3n) {
      margin-right: auto;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;

const MM03Presenter = ({ width }) => {
  useTitle("매장안내 | 펫마트");

  return (
    <WholeWrapper>
      <SubBanner title={`매장안내`} />
      <CommonSubTitle>하단의 선택한 매장명 넣어주세요</CommonSubTitle>
      <Wrapper width={`100%`} height={`600px`} bgColor={`#d2d2d2`}></Wrapper>

      <RsWrapper margin={`50px 0px`}>
        <Wrapper
          borderTop={`2px solid ${Theme.subTheme_C}`}
          borderBottom={`2px solid ${Theme.subTheme_C}`}
        >
          <Wrapper dr={`row`}>
            <Wrapper
              width={width < 900 ? `100%` : `50%`}
              ju={`flex-start`}
              height={`100%`}
              padding={`25px 15px`}
              dr={`row`}
            >
              <Wrapper
                width={width < 900 ? `40px` : `70px`}
                height={width < 900 ? `40px` : `70px`}
                radius={`100%`}
                shadow={`0 3px 6px ${Theme.lightGrey_C}`}
              >
                <Image
                  alt="icon"
                  width={`50%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%201.png?alt=media&token=61a9c3d7-2330-435f-bb8b-d6d660f57ac7`}
                />
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`100px`}
                fontWeight={`800`}
                padding={`0 15px`}
              >
                매장주소
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`auto`}
                color={Theme.darkGrey_C}
              >
                CONTENTS
              </Wrapper>
            </Wrapper>
            <Wrapper
              width={width < 900 ? `100%` : `50%`}
              ju={`flex-start`}
              height={`100%`}
              padding={`25px 15px`}
              dr={`row`}
            >
              <Wrapper
                width={width < 900 ? `40px` : `70px`}
                height={width < 900 ? `40px` : `70px`}
                radius={`100%`}
                shadow={`0 3px 6px ${Theme.lightGrey_C}`}
              >
                <Image
                  alt="icon"
                  width={`50%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202.png?alt=media&token=c1cca145-67e6-4c9d-8aa3-93807ac77e6a`}
                />
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`100px`}
                fontWeight={`800`}
                padding={`0 15px`}
              >
                영업시간
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`auto`}
                color={Theme.darkGrey_C}
              >
                CONTENTS
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper height={`50%`} dr={`row`}>
            <Wrapper
              width={width < 900 ? `100%` : `50%`}
              ju={`flex-start`}
              height={`100%`}
              padding={`25px 15px`}
              dr={`row`}
            >
              <Wrapper
                width={width < 900 ? `40px` : `70px`}
                height={width < 900 ? `40px` : `70px`}
                radius={`100%`}
                shadow={`0 3px 6px ${Theme.lightGrey_C}`}
              >
                <Image
                  alt="icon"
                  width={`50%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%204.png?alt=media&token=ce66b3cb-082e-47d4-b413-6af3ee51f8e4`}
                />
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`100px`}
                fontWeight={`800`}
                padding={`0 15px`}
              >
                전화번호
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`auto`}
                color={Theme.darkGrey_C}
              >
                CONTENTS
              </Wrapper>
            </Wrapper>

            <Wrapper
              width={width < 900 ? `100%` : `50%`}
              ju={`flex-start`}
              height={`100%`}
              padding={`25px 15px`}
              dr={`row`}
            >
              <Wrapper
                width={width < 900 ? `40px` : `70px`}
                height={width < 900 ? `40px` : `70px`}
                radius={`100%`}
                shadow={`0 3px 6px ${Theme.lightGrey_C}`}
              >
                <Image
                  alt="icon"
                  width={`50%`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%203.png?alt=media&token=38a45295-2421-4751-83fa-77758c2127a9`}
                />
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`100px`}
                fontWeight={`800`}
                padding={`0 15px`}
              >
                휴무
              </Wrapper>
              <Wrapper
                al={`flex-start`}
                width={`auto`}
                color={Theme.darkGrey_C}
              >
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
          <MartWrapper
            isRelative={true}
            margin={`20px`}
            shadow={Theme.boxShadowV2}
            isShadowHover={true}
          >
            <Image alt="썸네일" src={``} height={`300px`} />
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
          </MartWrapper>
          <MartWrapper
            isRelative={true}
            margin={`20px`}
            shadow={Theme.boxShadowV2}
            isShadowHover={true}
          >
            <Image alt="썸네일" src={``} height={`300px`} />
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
          </MartWrapper>
          <MartWrapper
            isRelative={true}
            margin={`20px`}
            shadow={Theme.boxShadowV2}
            isShadowHover={true}
          >
            <Image alt="썸네일" src={``} height={`300px`} />
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
          </MartWrapper>
          <MartWrapper
            isRelative={true}
            margin={`20px`}
            shadow={Theme.boxShadowV2}
            isShadowHover={true}
          >
            <Image alt="썸네일" src={``} height={`300px`} />
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
          </MartWrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM03Presenter);
