import React, { useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  CommonSubTitle,
  RsWrapper,
  Image,
  EmptyList,
  PagenationWrapper,
  PagenationBtn,
  Pagenation,
  SpanText,
  CommonButton,
  Text,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";
import { KakaoMap, CustomOverlay } from "react-full-kakao-maps";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTruckMonster, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const InnerTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 20px 0;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const InnerSubTitle = styled.h3`
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 15px;
  }
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

  @media (max-width: 700px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const MM03Presenter = ({
  width,
  //
  limit,
  scale,
  setScale,
  pages,
  currentPage,
  currentList,
  store,
  //
  sDatum,
  aDatum,
  //
  changePageHandler,
  prevAndNextPageChangeHandler,
  changeScaleHandler,
  dataLinkHandler,
}) => {
  useTitle("매장안내 | 펫마트");

  const data = Array.from(document.getElementsByClassName(`marker`));

  if (data.length !== 0) {
    data.map((mark) => {
      const classes = mark.classList;
      mark.addEventListener(`click`, () => {
        dataLinkHandler(aDatum[parseInt(classes[3])]);
      });
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setScale(4);
    }, 1000);
  }, []);
  return (
    <WholeWrapper>
      <SubBanner
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2Fmm02.png?alt=media&token=fe20fb7f-3dcf-4ddc-ae31-e9a4c495ac16`}
        title={`매장안내`}
      />
      <Wrapper
        dr={`row`}
        height={`70px`}
        margin={`0 0 100px`}
        borderBottom={`1px solid ${Theme.grey_C}`}
      >
        <Wrapper
          width={`150px`}
          height={`100%`}
          cursor={`pointer`}
          borderBottom={`2px solid ${Theme.basicTheme_C}`}
        >
          전국 매장
        </Wrapper>
      </Wrapper>
      {store && (
        <>
          <CommonSubTitle>{store.title}</CommonSubTitle>

          <Wrapper width={`100%`} height={`600px`} isRelative={true}>
            <KakaoMap
              apiUrl={`//dapi.kakao.com/v2/maps/sdk.js?appkey=a8e290d0abd70336680c1d1ea1a681da&autoload=false`}
              width={`100%`}
              height={`600px`}
              level={4}
              move={[
                parseFloat(store && store.att),
                parseFloat(store && store.lnt),
              ]}
              lat={parseFloat(store && store.att)}
              lng={parseFloat(store && store.lnt)}
            >
              <CustomOverlay
                content={
                  <Wrapper
                    width={`auto`}
                    height={`40px`}
                    radius={`50%`}
                    fontSize={`12px`}
                    isAbsolute={true}
                    top={`-10px`}
                    left={`0px`}
                  >
                    <Image
                      width={`auto`}
                      height={`100%`}
                      src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
                    />
                  </Wrapper>
                }
                move={[
                  parseFloat(store && store.att),
                  parseFloat(store && store.lnt),
                ]}
                lat={parseFloat(store && store.att)}
                lng={parseFloat(store && store.lnt)}
              ></CustomOverlay>
            </KakaoMap>
          </Wrapper>

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
                    {store.address}
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
                    {store.tel}
                  </Wrapper>
                </Wrapper>
              </Wrapper>

              <Wrapper height={`50%`} dr={`row`} ju={`flex-start`}>
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
                    가맹점에 문의해주세요.
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </RsWrapper>
        </>
      )}

      <CommonSubTitle>전국 매장</CommonSubTitle>

      <Wrapper margin={`0 0 50px`}>
        반려동물용품 유통분야 전국 매출 1위 전국에 펫마트 매장을 소개해드립니다.
      </Wrapper>

      <Wrapper width={`100%`} height={`600px`} isRelative={true}>
        <KakaoMap
          apiUrl={`//dapi.kakao.com/v2/maps/sdk.js?appkey=a8e290d0abd70336680c1d1ea1a681da&autoload=false`}
          width={`100%`}
          height={`600px`}
          level={4}
          setLevel={scale}
          isEvent={true}
          draggable={true}
          lat={35.87612923970815}
          lng={128.68324850753916}
        >
          {aDatum &&
            aDatum.map((data, idx) => {
              return (
                <CustomOverlay
                  key={data._id}
                  content={
                    <Wrapper
                      className={`marker ${idx}`}
                      width={`auto`}
                      height={`40px`}
                      radius={`50%`}
                      fontSize={`12px`}
                      isAbsolute={true}
                      top={`-10px`}
                      left={`0px`}
                    >
                      <Image
                        width={`auto`}
                        height={`100%`}
                        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
                      />
                    </Wrapper>
                  }
                  lat={parseFloat(data && data.att)}
                  lng={parseFloat(data && data.lnt)}
                  zIndex={4}
                  clickable={true}
                ></CustomOverlay>
              );
            })}
        </KakaoMap>

        <Wrapper
          width={`auto`}
          isAbsolute={true}
          zIndex={`9999`}
          top={`10px`}
          right={`10px`}
        >
          <CommonButton
            margin={`10px 0`}
            width={`40px`}
            height={`40px`}
            onClick={() => changeScaleHandler(scale - 1)}
          >
            <AiOutlinePlus />
          </CommonButton>

          <CommonButton
            width={`40px`}
            height={`40px`}
            onClick={() => changeScaleHandler(scale + 1)}
          >
            <AiOutlineMinus />
          </CommonButton>
        </Wrapper>
      </Wrapper>

      <RsWrapper margin={`50px 0px`}>
        <Wrapper dr={`row`} ju={`flex-start`} padding={`30px 0px`}>
          {sDatum ? (
            sDatum.length === 0 ? (
              <EmptyList>조회 된 데이터가 없습니다.</EmptyList>
            ) : (
              sDatum.map((data, idx) => (
                <MartWrapper
                  key={data._id}
                  margin={`20px`}
                  onClick={() => dataLinkHandler(data)}
                >
                  <Image
                    alt="썸네일"
                    src={data.thumbnailPath}
                    height={`300px`}
                  />
                  <Wrapper
                    bgColor={`#fff`}
                    left={`0`}
                    bottom={`0`}
                    al={`flex-start`}
                  >
                    <InnerTitle>{data.title}</InnerTitle>

                    <Wrapper dr={`row`} ju={`flex-start`}>
                      <Wrapper
                        dr={`row`}
                        bgColor={Theme.basicTheme_C}
                        width={`70px`}
                        height={`30px`}
                        margin={`0 10px 0 0`}
                        color={Theme.white_C}
                        radius={`15px`}
                      >
                        <Wrapper width={`auto`} margin={`0 5px 0 0`}>
                          <MdLocationOn size={`20px`} color={Theme.white_C} />
                        </Wrapper>
                        주소
                      </Wrapper>
                      <InnerSubTitle>{data.address}</InnerSubTitle>
                    </Wrapper>

                    <Wrapper dr={`row`} ju={`flex-start`} margin={`10px 0 `}>
                      <Wrapper
                        dr={`row`}
                        bgColor={Theme.basicTheme_C}
                        width={`70px`}
                        height={`30px`}
                        margin={`0 10px 0 0`}
                        color={Theme.white_C}
                        radius={`15px`}
                      >
                        <Wrapper width={`auto`} margin={`0 5px 0 0`}>
                          <FaPhoneAlt size={`12px`} color={Theme.white_C} />
                        </Wrapper>
                        전화
                      </Wrapper>
                      <InnerSubTitle>{data.tel}</InnerSubTitle>
                    </Wrapper>
                  </Wrapper>
                </MartWrapper>
              ))
            )
          ) : (
            <CircularIndeterminate />
          )}
        </Wrapper>
        {pages && pages.length > 0 && (
          <PagenationWrapper width={`auto`}>
            <PagenationBtn
              onClick={() => prevAndNextPageChangeHandler(currentPage - 1)}
            >
              <IoIosArrowBack />
            </PagenationBtn>
            {pages.map((data, idx) => {
              return (
                (currentList + 1) * 10 > idx &&
                currentList * 10 <= idx && (
                  <Pagenation
                    className={data === currentPage ? `active` : ``}
                    key={data}
                    onClick={() => changePageHandler(data)}
                  >
                    {data + 1}
                  </Pagenation>
                )
              );
            })}
            <PagenationBtn
              onClick={() => prevAndNextPageChangeHandler(currentPage + 1)}
            >
              <IoIosArrowForward />
            </PagenationBtn>
          </PagenationWrapper>
        )}
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM03Presenter);
