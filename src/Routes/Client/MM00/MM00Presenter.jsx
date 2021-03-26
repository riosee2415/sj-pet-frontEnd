import React, { useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  CommonSubTitle,
  RsWrapper,
  Text,
  Image,
  UlWrapper,
  LiWrapper,
  CommonButton,
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
const StartSilder = withSplitting(() =>
  import("../../../Components/slider/StartSilder.jsx")
);
const Fade = withSplitting(() => import("react-reveal/Fade"));
const LightSpeed = withSplitting(() => import("react-reveal/LightSpeed"));
const Bounce = withSplitting(() => import("react-reveal/Bounce"));

const DotTitle = styled(Text)`
  position: relative;
  font-size: inherit;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background: ${(props) => props.theme.basicTheme_C};
    margin-left: -7px;

    @media (max-width: 900px) {
      width: 10px;
      height: 10px;
      margin-left: -5px;
    }
  }
`;

const MainImage = styled(Image)`
  animation: ${scale2} 60s forwards;
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
      <Wrapper height={`700px`} isRelative={true} overflow={`hidden`}>
        <MainImage
          height={`100%`}
          alt="mainbanner"
          isAbsolute={true}
          top={`0`}
          left={`0`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%86%E1%85%A2%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%80%E1%85%AE.jpg?alt=media&token=6b76c565-fff0-45e2-b4da-c7b82e003d09`}
        />
        <Wrapper
          width={`100%`}
          height={`100%`}
          isAbsolute={true}
          top={`0`}
          left={`0`}
          bgColor={`rgba(0, 0, 0, 0.7)`}
        ></Wrapper>

        <Bounce>
          <Wrapper
            dr={`row`}
            color={Theme.white_C}
            fontWeight={`700`}
            fontSize={width < 900 ? `20px !important` : `45px`}
          >
            <Text
              fontWeight={`700`}
              fontSize={width < 900 ? `20px !important` : `45px`}
            >
              반려동물 업종&nbsp;
            </Text>
            <DotTitle fontWeight={`700`}>최</DotTitle>
            <DotTitle fontWeight={`700`}>초</DotTitle>
          </Wrapper>
        </Bounce>
        <Wrapper
          dr={`row`}
          color={Theme.white_C}
          fontWeight={`700`}
          fontSize={width < 900 ? `20px !important` : `45px`}
        >
          <Text
            fontWeight={`700`}
            fontSize={width < 900 ? `20px !important` : `45px`}
            color={Theme.white_C}
            margin={`20px 0`}
          >
            한국프랜차이즈&nbsp;
          </Text>
          <DotTitle fontWeight={`700`}>대</DotTitle>
          <DotTitle fontWeight={`700`}>상</DotTitle>&nbsp;수상
        </Wrapper>
        <Image
          className={`title`}
          width={width < 900 ? `80%` : `50%`}
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8F%E1%85%A9%E1%84%85%E1%85%A9%E1%84%82%E1%85%A1.png?alt=media&token=7934f011-a1ac-41d1-b8c3-9e915cb29407`}
          alt="text"
        />
      </Wrapper>

      {/* <MainSlider
        mainBannerData={width < 700 ? mobileBannerData : mainBannerData}
      /> */}

      <CommonSubTitle>매장현황</CommonSubTitle>

      <Wrapper margin={`0px 0 70px`}>
        <ShopSilder
          sDatum={sDatum}
          moveLinkHandler={moveLinkHandler}
          width={width}
        />
      </Wrapper>
      <RsWrapper>
        <CommonSubTitle>업계유일</CommonSubTitle>

        <Text
          width={width < 900 ? `100%` : `80%`}
          margin={`60px 0 40px`}
          fontSize={`20px`}
          fontWeight={`600`}
          textAlign={`center`}
        >
          반려동물 업계 최초 최소 마진율 35% 다양한 OEM상품과 높은 마진율로
          마진율을 최대화 하는 노력을 아끼지 않고 있습니다! 지속적인 상품개발과
          독자적인 제품교육은 초보 사장님도 손쉽게 운영하실 수 있습니다!
        </Text>

        <Wrapper dr={`row`} margin={`60px 0 100px`}>
          <Wrapper
            width={width < 1000 ? `100%` : `50%`}
            margin={width < 1000 && `0 0 15px`}
          >
            <Fade left>
              <Image
                width={width < 900 ? `100%` : `80%`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fgraph.png?alt=media&token=56cf3323-f0cc-4d08-abab-caaac17c53bf`}
              />
            </Fade>
          </Wrapper>
          <Wrapper width={width < 1000 ? `100%` : `50%`}>
            <Fade right>
              <UlWrapper
                dr={`row`}
                height={`60px`}
                margin={`0 0 2px`}
                fontSize={`20px`}
                borderTop={`3px solid ${Theme.subTheme_C}`}
                borderBottom={`1px solid ${Theme.subTheme_C}`}
              >
                <LiWrapper width={`20%`}>항목</LiWrapper>
                <LiWrapper width={`60%`}>금액</LiWrapper>
                <LiWrapper width={`20%`}>구성비</LiWrapper>
              </UlWrapper>

              <UlWrapper
                dr={`row`}
                height={`60px`}
                fontSize={`20px`}
                borderTop={`1px solid ${Theme.subTheme_C}`}
                borderBottom={`1px solid ${Theme.subTheme_C}`}
              >
                <LiWrapper width={`20%`} fontWeight={`700`}>
                  월 매출
                </LiWrapper>
                <LiWrapper width={`60%`} fontWeight={`700`}>
                  80,000,000
                </LiWrapper>
                <LiWrapper width={`20%`} fontWeight={`700`}>
                  100%
                </LiWrapper>
              </UlWrapper>

              <UlWrapper dr={`row`} height={`45px`}>
                <LiWrapper width={`20%`}>영업이익</LiWrapper>
                <LiWrapper width={`60%`}>28,000,000</LiWrapper>
                <LiWrapper width={`20%`}>35%</LiWrapper>
              </UlWrapper>

              <UlWrapper
                dr={`row`}
                height={`45px`}
                borderTop={`1px solid ${Theme.subTheme_C}`}
                borderBottom={`1px solid ${Theme.subTheme_C}`}
              >
                <LiWrapper width={`20%`}>임차료</LiWrapper>
                <LiWrapper width={`60%`}>5,000,000</LiWrapper>
                <LiWrapper width={`20%`}>6.3%</LiWrapper>
              </UlWrapper>

              <UlWrapper dr={`row`} height={`45px`}>
                <LiWrapper width={`20%`}>인건비</LiWrapper>
                <LiWrapper width={`60%`}>4,500,000</LiWrapper>
                <LiWrapper width={`20%`}>5.6%</LiWrapper>
              </UlWrapper>

              <UlWrapper
                dr={`row`}
                height={`45px`}
                borderTop={`1px solid ${Theme.subTheme_C}`}
                borderBottom={`1px solid ${Theme.subTheme_C}`}
              >
                <LiWrapper width={`20%`}>제세공과금</LiWrapper>
                <LiWrapper width={`60%`}>1,000,000</LiWrapper>
                <LiWrapper width={`20%`}>1.3%</LiWrapper>
              </UlWrapper>

              <UlWrapper dr={`row`} height={`45px`}>
                <LiWrapper width={`20%`}>기타 재미용</LiWrapper>
                <LiWrapper width={`60%`}>3,500,000</LiWrapper>
                <LiWrapper width={`20%`}>4.3%</LiWrapper>
              </UlWrapper>

              <UlWrapper
                dr={`row`}
                height={`45px`}
                borderTop={`1px solid ${Theme.subTheme_C}`}
                borderBottom={`1px solid ${Theme.subTheme_C}`}
              >
                <LiWrapper width={`20%`}>물류비</LiWrapper>
                <LiWrapper width={`60%`}>24,000,000</LiWrapper>
                <LiWrapper width={`20%`}>30%</LiWrapper>
              </UlWrapper>

              <UlWrapper
                dr={`row`}
                height={`60px`}
                fontSize={`20px`}
                borderBottom={`3px solid ${Theme.subTheme_C}`}
              >
                <LiWrapper width={`20%`} fontWeight={`700`}>
                  순 이익 (월)
                </LiWrapper>
                <LiWrapper width={`60%`} fontWeight={`700`}>
                  14,000,000
                </LiWrapper>
                <LiWrapper width={`20%`} fontWeight={`700`}>
                  17.5%
                </LiWrapper>
              </UlWrapper>
              <Text color={Theme.darkGrey_C} margin={`5px 0 0`}>
                * 상기자료는 지역별, 상권병, 매장, 위치, 구조, 시장상황등에 따라
                변동될수 있습니다*
              </Text>
            </Fade>
          </Wrapper>
        </Wrapper>

        <CommonSubTitle>
          펫마트 입점&nbsp;<DotTitle fontWeight={`900`}>브</DotTitle>
          <DotTitle fontWeight={`900`}>랜</DotTitle>
          <DotTitle fontWeight={`900`}>드</DotTitle>
        </CommonSubTitle>
        <LightSpeed>
          <Text margin={`50px 0`} fontSize={`30px`} fontWeight={`700`}>
            펫마트는 약 700여개의 유명, 신규 브랜드와 5000여개의 품목을 취급하고
            있습니다.
          </Text>
        </LightSpeed>
        <BrandSilder width={width} bDatum={currentBrand} />
      </RsWrapper>

      <Bounce>
        <CommonSubTitle>
          지금 펫마트를 시작해야 하는&nbsp;
          <DotTitle fontWeight={`900`}>이</DotTitle>
          <DotTitle fontWeight={`900`}>유</DotTitle> !
        </CommonSubTitle>
      </Bounce>
      <Fade bottom>
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
      </Fade>

      <CommonSubTitle>펫마트와 함께 인생 제 2막 시작</CommonSubTitle>

      <Wrapper
        dr={`row`}
        margin={width < 900 ? `0 0 40px` : `0px 0 100px`}
        padding={width < 900 ? `60px 10px` : `100px 50px`}
        bgColor={`${Theme.black_C}`}
      >
        <Wrapper
          width={width < 1300 ? `100%` : `30%`}
          padding={width < 900 ? `0` : `0 60px 0 0`}
          al={`flex-start`}
        >
          <Fade left>
            <Wrapper
              fontSize={`60px`}
              color={`${Theme.white_C}`}
              dr={`row`}
              width={`auto`}
              ju={`flex-start`}
            >
              <DotTitle fontSize={width < 1000 && `40px !important`}>
                가
              </DotTitle>
              <DotTitle fontSize={width < 1000 && `40px !important`}>
                맹
              </DotTitle>
              <DotTitle fontSize={width < 1000 && `40px !important`}>
                점
              </DotTitle>
            </Wrapper>
            <Text
              fontSize={width < 1000 ? `40px !important` : `60px`}
              fontWeight={`600`}
              borderBottom={`3px solid ${Theme.kakao_C}`}
              color={`${Theme.white_C}`}
            >
              성공스토리
            </Text>
          </Fade>
          <Text
            margin={`40px 0 30px`}
            fontSize={`19px`}
            color={`${Theme.white_C}`}
          >
            반려동물 시장 6조원! 반려동물인구 1000만시대! 카페 · 외식창업
            레드오션! 안정적인 창업을 원한다면?
          </Text>
          <Text color={`${Theme.white_C}`}>
            많은 예비 창업자들의 선택! 펫마트를 운영하시는 실 운영점주님들의
            인터뷰를 통해 원하는 해답을 얻을 수 있습니다!
          </Text>
          <Text margin={`40px 0`} color={`${Theme.white_C}`}>
            68호 군산점
          </Text>
        </Wrapper>

        <Wrapper
          width={width < 1300 ? `100%` : `70%`}
          height={
            width < 1300
              ? width < 900
                ? width < 700
                  ? `300px`
                  : `400px`
                : `500px`
              : `720px`
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

        <Wrapper margin={`100px 0 20px`}>
          <StartSilder vDatum={vDatum} width={width} />
        </Wrapper>
      </Wrapper>

      <CommonSubTitle>왜 펫마트일까 ?</CommonSubTitle>

      <Wrapper
        margin={`50px 0`}
        padding={`30px 0`}
        fontSize={`40px`}
        fontWeight={`600`}
        bgColor={`${Theme.basicTheme_C}`}
      >
        예비 창업자들이 펫마트를 선택하는 이유 !
      </Wrapper>

      <Wrapper
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
      </Wrapper>

      <RsWrapper>
        <CommonSubTitle>창업문의</CommonSubTitle>

        <Wrapper
          width={`100%`}
          padding={width < 900 ? `40px 15px` : `80px`}
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
        </Wrapper>
      </RsWrapper>
      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
