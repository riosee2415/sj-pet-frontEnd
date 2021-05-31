import React, { useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  CommonSubTitle,
  SubjectTitle,
  SubjectText,
  RsWrapper,
  Text,
  Image,
  UlWrapper,
  LiWrapper,
  CommonButton,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import Theme from "../../../Styles/Theme";
import { Link } from "react-router-dom";
import useTitle from "@4leaf.ysh/use-title";
import { scale2 } from "../../../Components/AnimationCommon";

const Popup = withSplitting(() =>
  import("../../../Components/popup/Popup.jsx")
);
const MainSlider = withSplitting(() =>
  import("../../../Components/slider/MainSlider.jsx")
);
const ShopSilder = withSplitting(() =>
  import("../../../Components/slider/ShopSilder.jsx")
);
const BrandSilder = withSplitting(() =>
  import("../../../Components/slider/BrandSilder.jsx")
);
const InteriorSilder = withSplitting(() =>
  import("../../../Components/slider/InteriorSlider")
);
const StartSilder = withSplitting(() =>
  import("../../../Components/slider/StartSilder.jsx")
);
const Fade = withSplitting(() => import("react-reveal/Fade"));
const LightSpeed = withSplitting(() => import("react-reveal/LightSpeed"));
const Bounce = withSplitting(() => import("react-reveal/Bounce"));

const MainTilte = styled(Wrapper)`
  font-size: 36px;
  align-items: flex-start;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 40%;
    left: 12%;
    width: 520px;
    height: 5px;
    background-color: ${(props) => props.theme.basicTheme_C};

    @media (max-width: 700px) {
      left: 25%;
      width: 190px;
      height: 2px;
    }
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const DotTitle = styled(Text)`
  position: relative;
  font-size: inherit;
  font-weight: 400;

  &:before {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    border-radius: 100%;
    width: 8px;
    height: 8px;
    background: ${(props) => props.theme.white_C};
    margin-left: -7px;

    @media (max-width: 900px) {
      width: 10px;
      height: 10px;
      margin-left: -5px;
    }
  }
`;

const PetmartTitle = styled(SpanText)`
  width: auto;
  color: ${(props) => props.theme.white_C};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.basicTheme_C};
    padding: 0 10px 10px;
    z-index: -1000;

    @media (max-width: 700px) {
      padding: 0 5px 5px;
      left: -5px;
    }
  }
`;

const MainImage = styled(Image)`
  /* animation: ${scale2} 60s forwards; */
`;

const MM00Presenter = ({
  width,
  currentBrand,
  //
  sDatum,
  vDatum,
  bDatum,
  mobileBannerData,
  mainBannerData,
  //
  moveLinkHandler,
}) => {
  useTitle("PET MART 선진펫");
  return (
    <WholeWrapper>
      <Wrapper height={`100vh`} isRelative={true} overflow={`hidden`}>
        <MainImage
          height={`100%`}
          alt="mainbanner"
          isAbsolute={true}
          top={`0`}
          left={`0`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmain.png?alt=media&token=513742c3-4314-4e37-8c2d-8262c1e12fd9`}
        />
      </Wrapper>

      {/* <MainSlider
        mainBannerData={width < 700 ? mobileBannerData : mainBannerData}
      /> */}
      <RsWrapper padding={width < 700 ? `60px 0` : `100px 0`}>
        <MainTilte>매장현황</MainTilte>
      </RsWrapper>

      <Wrapper margin={`0px 0 70px 285px`}>
        <ShopSilder
          sDatum={sDatum}
          moveLinkHandler={moveLinkHandler}
          width={width}
        />
      </Wrapper>
      <Wrapper bgColor={`#032950`} padding={width < 700 ? `60px 0` : `100px 0`}>
        <RsWrapper>
          <Wrapper dr={`row`} isRelative={true}>
            <Image
              display={width > 700 ? `flex` : `none`}
              width={`130px`}
              alt="image"
              margin={`0 20px 0 0`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmain-img.png?alt=media&token=740395d0-f209-45e8-824d-1d10605df08e`}
            />
            <Wrapper
              width={`auto`}
              color={Theme.white_C}
              al={width < 700 ? `center` : `flex-start`}
            >
              <Text
                fontSize={width < 700 ? `18px !important` : `48px`}
                fontWeight={`400`}
              >
                업계유일 최소 마진율 41%!
              </Text>
              <Text
                fontSize={width < 700 ? `18px !important` : `48px`}
                fontWeight={`400`}
              >
                매장 규모별 순수익 공개!
              </Text>
            </Wrapper>
            <Wrapper
              isAbsolute={true}
              top={width < 700 ? `2px` : `10px`}
              right={width < 700 ? `19%` : `21%`}
              width={width < 700 ? `145px` : `390px`}
              height={width < 700 ? `22px` : `55px`}
              bgColor={Theme.basicTheme_C}
              zIndex={`-100`}
            ></Wrapper>
          </Wrapper>

          <Wrapper
            dr={`row`}
            width={width < 700 ? `100%` : `80%`}
            margin={width < 700 ? `30px 0 0` : `60px 0 0`}
          >
            <Wrapper
              width={width < 1000 ? `100%` : `60%`}
              padding={width < 700 ? `0 0 60px` : `0 20px 0 0`}
            >
              <Fade left>
                <Image
                  width={width < 900 ? `100%` : `100%`}
                  alt="graph"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmain-graph.png?alt=media&token=77a02b4c-e985-412a-a3fe-ea885894b2aa`}
                />
              </Fade>
            </Wrapper>
            <Wrapper
              width={width < 1000 ? `100%` : `40%`}
              color={Theme.white_C}
            >
              <Fade right>
                <UlWrapper
                  dr={`row`}
                  height={`60px`}
                  margin={`0 0 2px`}
                  fontSize={`20px`}
                  borderTop={`1px solid ${Theme.white_C}`}
                >
                  <LiWrapper width={`20%`}>항목</LiWrapper>
                  <LiWrapper width={`60%`}>금액</LiWrapper>
                  <LiWrapper width={`20%`}>구성비</LiWrapper>
                </UlWrapper>

                <UlWrapper
                  dr={`row`}
                  height={`60px`}
                  borderTop={`3px solid ${Theme.white_C}`}
                  borderBottom={`1px solid ${Theme.white_C}`}
                >
                  <LiWrapper width={`20%`}>월매출</LiWrapper>
                  <LiWrapper width={`60%`}>80,000,000</LiWrapper>
                  <LiWrapper width={`20%`}>100%</LiWrapper>
                </UlWrapper>

                <UlWrapper dr={`row`} height={`45px`}>
                  <LiWrapper width={`20%`}>물류</LiWrapper>
                  <LiWrapper width={`60%`}>47,200,000</LiWrapper>
                  <LiWrapper width={`20%`}>59%</LiWrapper>
                </UlWrapper>

                <UlWrapper
                  dr={`row`}
                  height={`45px`}
                  borderTop={`1px solid ${Theme.white_C}`}
                  borderBottom={`1px solid ${Theme.white_C}`}
                >
                  <LiWrapper width={`20%`}>임차료</LiWrapper>
                  <LiWrapper width={`60%`}>5,000,000</LiWrapper>
                  <LiWrapper width={`20%`}>6.3%</LiWrapper>
                </UlWrapper>

                <UlWrapper dr={`row`} height={`45px`}>
                  <LiWrapper width={`20%`}>인건비</LiWrapper>
                  <LiWrapper width={`60%`}>4,500,000</LiWrapper>
                  <LiWrapper width={`20%`}>6%</LiWrapper>
                </UlWrapper>

                <UlWrapper
                  dr={`row`}
                  height={`45px`}
                  borderTop={`1px solid ${Theme.white_C}`}
                  borderBottom={`1px solid ${Theme.white_C}`}
                >
                  <LiWrapper width={`20%`}>제세공과금</LiWrapper>
                  <LiWrapper width={`60%`}>1,000,000</LiWrapper>
                  <LiWrapper width={`20%`}>1%</LiWrapper>
                </UlWrapper>

                <UlWrapper dr={`row`} height={`45px`}>
                  <LiWrapper width={`20%`}>기타재</LiWrapper>
                  <LiWrapper width={`60%`}>3,000,000</LiWrapper>
                  <LiWrapper width={`20%`}>4%</LiWrapper>
                </UlWrapper>

                <UlWrapper
                  dr={`row`}
                  height={`45px`}
                  borderTop={`1px solid ${Theme.white_C}`}
                  borderBottom={`1px solid ${Theme.white_C}`}
                >
                  <LiWrapper width={`20%`}>영업이익</LiWrapper>
                  <LiWrapper width={`60%`}>32,800,000</LiWrapper>
                  <LiWrapper width={`20%`}>최소41%</LiWrapper>
                </UlWrapper>

                <UlWrapper
                  dr={`row`}
                  height={`60px`}
                  borderBottom={`1px solid ${Theme.white_C}`}
                >
                  <LiWrapper width={`20%`} fontWeight={`700`}>
                    월 순이익
                  </LiWrapper>
                  <LiWrapper width={`60%`} fontWeight={`700`}>
                    19,300,000
                  </LiWrapper>
                  <LiWrapper width={`20%`} fontWeight={`700`}>
                    24%
                  </LiWrapper>
                </UlWrapper>
              </Fade>
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <Wrapper
        bgColor={width < 700 ? `none` : `rgb(238, 238, 238)`}
        padding={width < 700 ? `40px 10px` : `100px 0`}
      >
        <Wrapper
          fontSize={width < 700 ? `18px !important` : `48px`}
          al={width < 700 && `flex-start`}
        >
          펫마트 입점 브랜드
        </Wrapper>
        <Text
          display={width < 700 ? `none` : `flex`}
          fontSize={`24px`}
          fontWeight={`400`}
          color={`#616161`}
          margin={`20px 0 0`}
          textAlign={`center`}
        >
          펫마트는 약 700여개의 유명,신규브랜드와 5000여개의 품목을 취급하고
          있습니다.
        </Text>
        <Wrapper
          display={width < 700 ? `flex` : `none`}
          al={`flex-start`}
          margin={`10px 0 0`}
        >
          <Text
            fontSize={width < 700 ? `12px !important` : `24px`}
            fontWeight={`400`}
            color={`#616161`}
          >
            펫마트는 약 700여개의 유명, 신규브랜드와
          </Text>
          <Text
            fontSize={width < 700 ? `12px !important` : `24px`}
            fontWeight={`400`}
            color={`#616161`}
          >
            5000여개의 품목을 취급하고 있습니다.
          </Text>
        </Wrapper>
        <Wrapper margin={`0px 0 70px 285px`}>
          <BrandSilder width={width} bDatum={currentBrand} />
        </Wrapper>
      </Wrapper>
      <Wrapper
        display={width < 700 ? `flex` : `none`}
        borderBottom={`10px solid rgb(238, 238, 238)`}
      ></Wrapper>

      <RsWrapper
        dr={`row`}
        ju={`space-between`}
        al={`flex-start`}
        padding={width < 700 ? `60px 0` : `200px 0`}
      >
        {/* <Bounce> */}
        <Wrapper
          display={width > 700 ? `flex` : `none`}
          width={`40%`}
          al={`flex-start`}
        >
          <Text lineHeight={`1.3`} fontSize={`72px`} fontWeight={`400`}>
            지금!
          </Text>
          <Text
            lineHeight={`1.3`}
            fontSize={`72px`}
            fontWeight={`400`}
            color={Theme.basicTheme_C}
          >
            펫마트<SpanText color={Theme.black_C}>를</SpanText>
          </Text>
          <Text
            lineHeight={`1.3`}
            fontSize={`72px`}
            fontWeight={`400`}
            color={Theme.basicTheme_C}
          >
            시작<SpanText color={Theme.black_C}>해야</SpanText>
          </Text>
          <Text lineHeight={`1.3`} fontSize={`72px`} fontWeight={`400`}>
            되는 이유
          </Text>
        </Wrapper>

        <Wrapper
          display={width < 700 ? `flex` : `none`}
          width={`100%`}
          al={`flex-start`}
          padding={`0 0 30px`}
        >
          <Text
            lineHeight={`1.3`}
            fontSize={`24px !important`}
            fontWeight={`400`}
          >
            지금!<SpanText color={Theme.basicTheme_C}>펫마트</SpanText>를
          </Text>

          <Text
            lineHeight={`1.3`}
            fontSize={`24px !important`}
            fontWeight={`400`}
            color={Theme.basicTheme_C}
          >
            시작<SpanText color={Theme.black_C}>해야 되는 이유</SpanText>
          </Text>
        </Wrapper>
        {/* </Bounce> */}

        <Image
          width={width < 700 ? `100%` : `60%`}
          alt="image"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8B%E1%85%A3%20%E1%84%83%E1%85%AC%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2.png?alt=media&token=87679fe5-7df9-4b8a-9d83-749d171f0784`}
        />
      </RsWrapper>

      {/* <Fade bottom>
        <Image
          margin={`50px 0 20px`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3.png?alt=media&token=02eeecf3-dfbd-4274-8c90-6d6ce834598e`}
        />
      </Fade>
      <Fade bottom>
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B32.png?alt=media&token=cffd58f0-7688-488b-b05d-663422388207`}
        />
      </Fade>
      <Fade bottom>
        <Image
          margin={`20px 0`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B33.png?alt=media&token=52f9c5da-c020-4861-9ee7-a106f1b2b172`}
        />
      </Fade>
      <Fade bottom>
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B34.png?alt=media&token=7eb3e81b-935a-4abf-b4e0-af10cdd73a99`}
        />
      </Fade> */}

      <Wrapper
        padding={width < 900 ? `60px 0` : `100px 0`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AA%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%81%E1%85%A6-bgimg.png?alt=media&token=5b1c70e9-f378-4f2a-b469-235f5644357b")`}
        attachment={`initial`}
      >
        <RsWrapper dr={`row`} ju={`space-between`} al={`flex-start`}>
          <Wrapper
            display={width > 700 ? `flex` : `none`}
            width={width < 1300 ? `100%` : `40%`}
            al={`flex-start`}
          >
            <Fade left>
              <Text
                fontSize={`72px`}
                fontWeight={`400`}
                lineHeight={`1.3`}
                color={Theme.white_C}
              >
                펫마트와
              </Text>
              <Text
                fontSize={`72px`}
                fontWeight={`400`}
                color={Theme.basicTheme_C}
              >
                함께 인생
              </Text>
              <Text
                fontSize={`72px`}
                fontWeight={`400`}
                lineHeight={`1.3`}
                color={Theme.white_C}
              >
                제2막 시작!
              </Text>
            </Fade>

            <Wrapper
              fontSize={`36px`}
              color={`${Theme.white_C}`}
              dr={`row`}
              ju={`flex-start`}
              padding={`50px 0 0`}
            >
              <Text
                fontSize={width < 1000 ? `40px !important` : `36px`}
                fontWeight={`400`}
                color={`${Theme.white_C}`}
              >
                가맹점
              </Text>
              <DotTitle fontSize={width < 1000 && `36px !important`}>
                성
              </DotTitle>
              <DotTitle fontSize={width < 1000 && `36px !important`}>
                공
              </DotTitle>
              <DotTitle fontSize={width < 1000 && `36px !important`}>
                스
              </DotTitle>
              <DotTitle fontSize={width < 1000 && `36px !important`}>
                토
              </DotTitle>
              <DotTitle fontSize={width < 1000 && `36px !important`}>
                리
              </DotTitle>
            </Wrapper>
            <Text
              fontSize={`36px`}
              fontWeight={`400`}
              color={Theme.basicTheme_C}
            >
              68호 군산점
            </Text>
          </Wrapper>

          <Wrapper display={width < 700 ? `flex` : `none`} al={`flex-start`}>
            <Text color={Theme.white_C} fontSize={`24px !important`}>
              펫마트와
              <SpanText color={Theme.basicTheme_C}>함께 인생 제2막</SpanText>
              시작!
            </Text>
          </Wrapper>
          <Wrapper display={width < 700 ? `flex` : `none`} padding={`20px 0`}>
            <Text
              color={Theme.white_C}
              fontSize={`18px !important`}
              fontWeight={`400`}
            >
              가맹점 성공스토리 68호 군산점
            </Text>
          </Wrapper>

          <Wrapper
            width={width < 1300 ? `100%` : `60%`}
            height={
              width < 1300
                ? width < 900
                  ? width < 700
                    ? `300px`
                    : `400px`
                  : `500px`
                : `420px`
            }
            isRelative={true}
            cursor={`pointer`}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FPzdQh8ahd0"
            ></iframe>
          </Wrapper>

          {/* <Wrapper margin={`100px 0 20px`}>
            <StartSilder vDatum={vDatum} width={width} />
          </Wrapper> */}

          <Wrapper
            dr={`row`}
            ju={`flex-start`}
            padding={width < 900 ? `50px 0` : `100px 0`}
            color={Theme.white_C}
          >
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3 - 20px)`}
              margin={`10px`}
              al={`flex-start`}
            >
              <Image
                alt="image"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%2011.png?alt=media&token=1f286929-ed13-43e3-bec6-9a0b42f8be29`}
              />
              <Text padding={`10px 0 15px`}>펫마트 진해점 성공스토리</Text>
            </Wrapper>
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3 - 20px)`}
              margin={`10px`}
              al={`flex-start`}
            >
              <Image
                alt="image"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%2011.png?alt=media&token=1f286929-ed13-43e3-bec6-9a0b42f8be29`}
              />
              <Text padding={`10px 0 15px`}>펫마트 부산강서점 성공스토리</Text>
            </Wrapper>
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3 - 20px)`}
              margin={`10px`}
              al={`flex-start`}
            >
              <Image
                alt="image"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%2011.png?alt=media&token=1f286929-ed13-43e3-bec6-9a0b42f8be29`}
              />
              <Text padding={`10px 0 15px`}>펫마트 제주도남점 성공스토리</Text>
            </Wrapper>
            <Wrapper
              width={width < 900 ? `100%` : `calc(100% / 3 - 20px)`}
              margin={`10px`}
              al={`flex-start`}
            >
              <Image
                alt="image"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%20%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%2011.png?alt=media&token=1f286929-ed13-43e3-bec6-9a0b42f8be29`}
              />
              <Text padding={`10px 0 15px`}>펫마트 전주효자점 성공스토리</Text>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <CommonButton width={`40%`} fontSize={`18px`}>
              더보기
            </CommonButton>
          </Wrapper>
        </RsWrapper>
      </Wrapper>

      <RsWrapper padding={width < 700 ? `60px 0` : `100px 0`}>
        <Text fontSize={width < 700 ? `24px !important` : `72px`}>
          왜 <PetmartTitle>펫마트</PetmartTitle>일까 ?
        </Text>
        <Text
          fontSize={width < 700 ? `14px !important` : `24px`}
          fontWeight={`400`}
          margin={`20px 0 0`}
        >
          예비 창업자들이 펫마트를 선택하는 이유!
        </Text>
        <Wrapper dr={`row`} al={`flex-start`} padding={`80px 0 0`}>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`170px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle.png?alt=media&token=54662563-5a1e-4495-a5cd-70b136bb9db6`}
            />
            <Text fontSize={`15px`}>
              체계적이고 안정적인 물류 시스템으로 일주일에
            </Text>
            <Text fontSize={`15px`}>
              한번씩 본사 직접 배송으로 불필요한 재고를
            </Text>
            <Text fontSize={`15px`}>보유할 필요없음</Text>
          </Wrapper>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`270px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-02.png?alt=media&token=5826e146-2c18-41a5-b2bf-a4c88acaddd5`}
            />
            <Text fontSize={`15px`}>
              강아지, 고양이, 소동물까지 펫을 위한 마트!
            </Text>
          </Wrapper>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`115px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-03.png?alt=media&token=aed7cd2f-a151-428e-85f6-84368bc23de3`}
            />
            <Text fontSize={`15px`}>
              가장 많은 비용을 차지하는 인테리어 비용을
            </Text>
            <Text fontSize={`15px`}>창업자 직접처리로 창업 비용 절감</Text>
          </Wrapper>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`230px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-04.png?alt=media&token=5facaee5-bbc1-4f36-94b0-5b20ca63737f`}
            />
            <Text fontSize={`15px`}>
              코로나로 인해 폐업률이 높은 자영업계에
            </Text>
            <Text fontSize={`15px`}>비해 낮은 폐업률을 자랑하는 펫마트!</Text>
          </Wrapper>
        </Wrapper>
        <Wrapper dr={`row`} ju={`space-between`}>
          <Image
            width={`33%`}
            al="업계유일"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%B5%E1%86%AF.png?alt=media&token=8d06f89a-e701-4e27-9fa1-ffb4f2854265`}
          />
          <Image
            width={`33%`}
            al="업계최초"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%83%E1%85%A1.png?alt=media&token=8b603778-c340-463d-aba3-9f148de88677`}
          />
          <Image
            width={`33%`}
            al="업계최다"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%8E%E1%85%AC%E1%84%8E%E1%85%A9.png?alt=media&token=f445f760-cb41-420c-8da4-73e996187bd4`}
          />
        </Wrapper>
        <Wrapper dr={`row`} al={`flex-start`}>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`240px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-05.png?alt=media&token=eda7268e-61e3-4052-b46b-bfcc57af5542`}
            />
            <Text fontSize={`15px`}>
              월별, 분기별, 시즌에 맞는 이벤트 기획 운영
            </Text>
          </Wrapper>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`200px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-06.png?alt=media&token=666fe200-a8f9-4657-a922-e88268082a68`}
            />
            <Text fontSize={`15px`}>
              매장 담당자 지정관리로 빠른 피드백은 물론
            </Text>
            <Text fontSize={`15px`}>매장수익분석, 교육 등 컨설팅 가능</Text>
          </Wrapper>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`195px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-07.png?alt=media&token=181789d6-6729-4eac-b9d3-f1aefccde640`}
            />
            <Text fontSize={`15px`}>신상 품평회를 개최하여</Text>
            <Text fontSize={`15px`}>최신 트렌드에 맞는 신상입고</Text>
          </Wrapper>
          <Wrapper
            width={
              width < 1100 ? `calc(100% / 2 - 30px)` : `calc(100% / 4 - 30px)`
            }
            margin={`15px`}
          >
            <Image
              al="image"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%AB%20%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%81%E1%85%A1-image.png?alt=media&token=567644db-1799-48ea-8797-d29c687fbf89`}
            />
            <Image
              width={`170px`}
              alt="title"
              margin={`0 0 30px`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-08.png?alt=media&token=1342bc6d-6bd8-4d0e-8de3-04762d72192e`}
            />
            <Text fontSize={`15px`}>TV, 옥외광고 등 브랜딩, 바이럴,</Text>
            <Text fontSize={`15px`}>신규고객 창출을 위한 마케팅 기획운영</Text>
          </Wrapper>
        </Wrapper>
      </RsWrapper>

      {/* <Wrapper
        margin={`50px 0`}
        padding={`30px 0`}
        fontSize={`40px`}
        fontWeight={`600`}
        bgColor={`${Theme.basicTheme_C}`}
      >
        예비 창업자들이 펫마트를 선택하는 이유 !
      </Wrapper> */}

      {/* <Wrapper
        dr={`row`}
        al={`flex-start`}
        padding={width < 900 ? `30px 0` : `30px`}
      >
        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={width < 900 ? `5px` : `50px 10px`}
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2FKakaoTalk_20210316_152709002_02.jpg?alt=media&token=660f0200-9865-4d91-bfb3-3b8b646105a4`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F1.jpg?alt=media&token=400a25ae-2588-4a81-bf5f-23106d8d6e7a`}
                />
                <Text fontSize={`20px`}>재고 부담율 제로</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                체계적이고 안정적인 물류 시스템으로
              </Text>
              <Text fontSize={`15px`} textAlign={`center`}>
                일주일에 한번씩 본사 직접배송으로 불필요한 재고를 보유할
                필요없음
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={width < 900 ? `5px` : `10px`}
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2FKakaoTalk_20210302_114556833_25.jpg?alt=media&token=240708f6-a176-44e4-825e-93bd3ed8e94f`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F2.jpg?alt=media&token=cb8b6abf-6608-4512-aa6f-5ad0c2d9e7d7`}
                />
                <Text fontSize={`20px`}>5000여가지 반려동물 용품 </Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                강아지, 고양이, 소동물까지 펫을 위한 마트
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={width < 900 ? `5px` : `50px 10px`}
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fgraphic-design-color-swatches-pens-desk-architectural-drawing-with-work-tools-accessories.jpg?alt=media&token=0519e65b-2b91-40d2-a95f-78ed8596f9e6`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F3.jpg?alt=media&token=bad79cb1-ef9d-4236-87d3-b4a6a2f66e90`}
                />
                <Text fontSize={`20px`}>실속창업</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                가장 많은 비용을 차지하는 인테리어에
              </Text>
              <Text fontSize={`15px`} textAlign={`center`}>
                비용을 창업자 직접처리로 창업 비용절감
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={width < 900 ? `5px` : `10px`}
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2FKakaoTalk_20210316_152709002_06.jpg?alt=media&token=64add936-638a-473b-b205-56d949c799f0`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F4.jpg?alt=media&token=34bbfd62-9684-4f34-b0c9-6dbb3bca405e`}
                />
                <Text fontSize={`20px`}>자영업자 폐업률 70%시대</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                펫마트 실패업률 1.5%
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={
            width < 1200 ? (width < 900 ? `5px` : `-50px 10px 0`) : `10px`
          }
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%8F%E1%85%A2%E1%86%B8%E1%84%8E%E1%85%A5%202021-03-16%20154300.jpg?alt=media&token=26494f59-2093-4eb7-bd61-4ead17ffe68f`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F5.jpg?alt=media&token=c7c12dd9-14bc-411a-b97a-fe065b080cf5`}
                />
                <Text fontSize={`20px`}>다양한 이벤트 기획구성</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                월별, 분기별, 시즌에 맞는 이벤트 구성 기획
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={
            width < 1200 ? (width < 900 ? `5px` : `10px`) : `-50px 10px 0`
          }
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fteam-work-process-young-business-managers-crew-working-with-new-startup-project-labtop-wood-table-typing-keyboard-texting-message-analyze-graph-plans.jpg?alt=media&token=4fcf8786-ee42-4e45-adea-6b2bbd46f888`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F6.jpg?alt=media&token=3bd99a2f-b95e-448c-a4f3-e8c4f0ce7300`}
                />
                <Text fontSize={`20px`}>담당 S/V 지정 운영</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                매장 담당자 지정관리로 빠른 피드백은 물론
              </Text>
              <Text fontSize={`15px`} textAlign={`center`}>
                매장수익분석, 교육 등 컨설팅 가능
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={width < 900 ? `5px` : `10px`}
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmillennial-asia-businessmen-businesswomen-having-conference-video-call-meeting-brainstorming-ideas-about-new-project-colleagues-working-together-planning-strategy-enjoy-teamwork-modern-office.jpg?alt=media&token=dc4feadc-7f4f-4970-8f1e-720df702f2d3`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F7.jpg?alt=media&token=969fd0ea-a950-4ed8-bff7-4de6fdca82b9`}
                />
                <Text fontSize={`20px`}>월 2회 신상품 입고</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                신상품평회를 개최하여
              </Text>
              <Text fontSize={`15px`} textAlign={`center`}>
                최신트랜드에 맞는 신상입고
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper
          width={
            width < 1200
              ? width < 900
                ? width < 700
                  ? `100%`
                  : `calc(100% / 2 - 10px)`
                : `calc(100% / 3 - 20px)`
              : `calc(100% / 4 - 20px)`
          }
          isShadowHover2={true}
          margin={
            width < 1200 ? (width < 900 ? `5px` : `10px`) : `-50px 10px 0`
          }
        >
          <Fade bottom>
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2FKakaoTalk_20210316_161418607.jpg?alt=media&token=724db890-bf7c-46f9-b9a9-ac6eed524cf8`}
              alt="펫마트사진"
            />
            <Wrapper
              padding={`30px 20px`}
              border={`1px solid ${Theme.lightGrey_C}`}
            >
              <Wrapper dr={`row`} margin={`0 0 30px`}>
                <Image
                  alt="아이콘"
                  width={`20px`}
                  margin={`0 10px 0 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2F8.jpg?alt=media&token=0b4c1e26-3bf8-41f5-a4b1-b8ea1a21b560`}
                />
                <Text fontSize={`20px`}>다양한 광고 진행</Text>
              </Wrapper>
              <Text fontSize={`15px`} textAlign={`center`}>
                TV, 옥외광고 등 브랜딩, 바이럴,
              </Text>
              <Text fontSize={`15px`} textAlign={`center`}>
                신규고객 창출을 위한 마케팅 기획운영
              </Text>
            </Wrapper>
          </Fade>
        </Wrapper>
      </Wrapper> */}
      <Wrapper
        bgColor={`rgb(34, 34, 34)`}
        padding={width < 700 ? `60px 0` : `100px 0`}
      >
        <Wrapper
          fontSize={width < 700 ? `24px !important` : `48px`}
          color={Theme.white_C}
        >
          매장 인테리어
        </Wrapper>
        <Text
          fontSize={width < 700 ? `14px !important` : `24px`}
          fontWeight={`400`}
          color={Theme.white_C}
          margin={width < 700 ? `20px 0` : `30px 0`}
        >
          불필요한 것은 빼고
          <SpanText color={Theme.basicTheme_C}>&nbsp;꼭 필요한 것</SpanText>만
          담았습니다.
        </Text>

        <InteriorSilder />
      </Wrapper>
      <RsWrapper padding={`100px 0`} display={width > 700 ? `flex` : `none`}>
        <Wrapper fontSize={`48px`}>개설비용</Wrapper>
        <Wrapper
          margin={`50px 0`}
          height={`700px`}
          attachment={`initial`}
          bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AF%E1%84%87%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC.png?alt=media&token=928f4b0a-ff96-4bbc-8a90-0d1e02747425")`}
        >
          <Wrapper
            width={width < 1100 ? `70%` : `50%`}
            bgColor={Theme.white_C}
            radius={`20px`}
            shadow={`3px 3px 3px #eee`}
          >
            <Wrapper padding={width < 900 ? `30px 70px` : `50px 110px`}>
              <Text fontSize={width < 900 ? `30px !important` : `48px`}>
                창업문의
              </Text>
              <Text
                fontSize={`18px`}
                fontWeight={`400`}
                color={`rgb(170, 170, 170)`}
              >
                펫마트의 전문 창업상담사 항시대기
              </Text>
              <Text
                fontSize={`18px`}
                fontWeight={`400`}
                color={`rgb(170, 170, 170)`}
              >
                1:1문의로 편안하고 빠른 안내를 받아보세요.
              </Text>
              <Wrapper
                dr={`row`}
                padding={`30px 0 0`}
                ju={`flex-start`}
                al={`flex-start`}
              >
                <Wrapper dr={`row`} width={`auto`} margin={`0 30px 0 0`}>
                  <Image
                    width={`25px`}
                    alt="phone"
                    margin={`0 10px 0 0`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fphone.png?alt=media&token=2da32b63-c01f-415d-bbe6-2850c7d7d0ae`}
                  />
                  <Text
                    width={`auto`}
                    fontSize={width < 1200 ? `20px` : `24px`}
                    fontWeight={`400`}
                  >
                    연락처
                  </Text>
                </Wrapper>
                <Text
                  fontSize={width < 1200 ? `20px` : `24px`}
                  fontWeight={`400`}
                  color={`rgb(102, 102, 102)`}
                >
                  1588-1684
                </Text>
              </Wrapper>
              <Wrapper dr={`row`} ju={`flex-start`} al={`flex-start`}>
                <Wrapper dr={`row`} width={`auto`} margin={`0 30px 0 0`}>
                  <Image
                    width={`25px`}
                    alt="mail"
                    margin={`0 10px 0 0`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmail.png?alt=media&token=a879f66c-9984-48c8-b7f4-be5013e808dc`}
                  />
                  <Text
                    fontSize={width < 1200 ? `20px` : `24px`}
                    fontWeight={`400`}
                  >
                    E-mail
                  </Text>
                </Wrapper>
                <Text
                  fontSize={width < 1200 ? `20px` : `24px`}
                  fontWeight={`400`}
                  color={`rgb(102, 102, 102)`}
                >
                  ebajslee@sunjinpet.co.kr
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper
              bgColor={`rgb(34, 34, 34)`}
              radius={`0 0 20px 20px`}
              color={Theme.white_C}
              padding={`30px 0`}
              fontSize={`24px`}
            >
              신청하기
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Text fontSize={`18px`}>
          ※상기 자료는 지역, 상권의 특성 및 매장 구조 등의 시장 상황에 따라 변동
          될 수 있습니다. (별도 : 임차보증금, 임차료, 기타)
        </Text>
        {/* <Wrapper
          width={`100%`}
          padding={width < 900 ?  `40px 15px` : `80px`}
          margin={`0 0 100px`}
          bgColor={`${Theme.greyArea_C}`}
          shadow={`3px 3px 3px ${Theme.grey_C}`}
        >
          <Text fontSize={width < 900 ? `16px !important` : `25px`}>
            펫 마트의 전문 창업상담사 항시대기 1:1문의로
          </Text>
          <Text fontSize={width < 900 ? `16px !important` : `25px`}>
            편안하고 빠른 안내를 받아보세요.
          </Text>

          <Link to="/contact">
            <CommonButton
              width={width < 900 ? `150px` : `200px`}
              height={width < 900 ? `50px` : `80px`}
              margin={`100px 0 0`}
              fontSize={width < 900 ? `18px` : `25px`}
              kindOf={`subTheme`}
            >
              문의하러가기
            </CommonButton>
          </Link>
        </Wrapper> */}
      </RsWrapper>

      <Wrapper
        display={width < 700 ? `flex` : `none`}
        bgColor={`#FFCB08`}
        color={Theme.white_C}
        padding={`60px 10px`}
      >
        <Text fontSize={`24px !important`} margin={`0 0 20px`}>
          창업문의
        </Text>
        <Text fontSize={`14px !important`} fontWeight={`400`}>
          펫마트의 전문 창업상담사 항시대기 1:1문의로
        </Text>
        <Text
          fontSize={`14px !important`}
          fontWeight={`400`}
          margin={`0 0 20px`}
        >
          편안하고 빠른 안내를 받아보세요.
        </Text>
        <Wrapper
          border={`1px solid ${Theme.white_C}`}
          padding={`30px 50px`}
          margin={`0 0 20px`}
        >
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Text width={`30%`} fontSize={`14px !important`} fontWeight={`400`}>
              연락처
            </Text>
            <Text width={`70%`} fontSize={`14px !important`} fontWeight={`400`}>
              1588-1684
            </Text>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Text width={`30%`} fontSize={`14px !important`} fontWeight={`400`}>
              E-mail
            </Text>
            <Text width={`70%`} fontSize={`14px !important`} fontWeight={`400`}>
              ebajslee@sunjinpet.co.kr
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper padding={`15px 0`} bgColor={Theme.black_C}>
          신청하기
        </Wrapper>
      </Wrapper>
      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
