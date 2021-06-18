import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "rs-swiper";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { EmptyList, Image, SpanText, Text, Wrapper } from "../CommonComponents";
import { numberWithCommas } from "../../commonUtils";
import { FaStar } from "react-icons/fa";
import Theme from "../../Styles/Theme";
import CircularIndeterminate from "../loading/CircularIndeterminate";

const Title = styled(Text)`
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => props.theme.white_C};
  position: absolute;
  bottom: 15px;
  left: 20px;

  &:before {
    content: "";
    position: absolute;
    bottom: 45%;
    right: -55%;
    width: 65px;
    height: 4px;
    background-color: ${(props) => props.theme.basicTheme_C};

    @media (max-width: 800px) {
      width: 30px;
      height: 2px;
    }
  }

  @media (max-width: 800px) {
    font-size: 11px !important;
    bottom: 30px;
  }
`;

const ShopImage = styled(Wrapper)`
  width: 325px;
  height: 325px;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.basicTheme_C};
  }

  @media (max-width: 1500px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 1100px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 159px;
    height: 159px;
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;

  .swiper-container-multirow-column > .swiper-wrapper {
    flex-direction: ${(props) => (props.isColumn ? `row` : `column`)};
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export default ({ width, sDatum, isColumn, moveLinkHandler }) => {
  SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

  return (
    <Container isColumn={isColumn}>
      <Swiper
        slidesPerView={
          isColumn ? 4.9 : width > 1200 ? 4.9 : width > 800 ? 3 : 2.1
        }
        slidesPerColumn={1}
        centeredSlides={isColumn}
        autoplay
        loop
      >
        {/* {sDatum ? (
          sDatum.length === 0 ? (
            <EmptyList>조회 된 데이터가 없습니다.</EmptyList>
          ) : (
            sDatum.map((data, idx) => (
              <SwiperSlide key={data._id} onClick={() => moveLinkHandler(data)}>
                <ShopImage>
                  <Image
                   height={`100%`} src={data.thumbnailPath} />
                  <Title>{data.title}</Title>
                </ShopImage>
              </SwiperSlide>
              
            ))
          )
        ) : (
          <CircularIndeterminate />
        )} */}

        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=8bf45485-657d-4931-a1fd-4baf767ced29`}
            />
            <Title>01호_동구점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%89%E1%85%A5%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=96dc0b79-457b-4033-86ce-eb174798c335`}
            />
            <Title>02호_서구점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=0c853eea-f5db-4d22-9249-e56fb31f4b68`}
            />
            <Title>03호_중구점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%8E%E1%85%B5%E1%86%AF%E1%84%80%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=da685113-e12e-485d-b880-b4b15849ad1a`}
            />
            <Title>04호_칠곡점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%91%E1%85%A9%E1%84%92%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=7e0f061e-96be-4b9a-bda9-13942e7dfdd1`}
            />
            <Title>05호_포항점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%89%E1%85%AE%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=dff6503d-2dc7-4958-8664-c142e73a9705`}
            />
            <Title>06호_수성점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%87%E1%85%AE%E1%84%80%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=4f06f995-cba4-465e-83cf-4e95b8fc6fe1`}
            />
            <Title>07호_구포점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%87%E1%85%AE%E1%84%80%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=4f06f995-cba4-465e-83cf-4e95b8fc6fe1`}
            />
            <Title>13호-부곡점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%91%E1%85%A9%E1%84%92%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%86%BC%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=a1c76b0a-0cbc-4622-b69c-bff1db6f1256`}
            />
            <Title>27호_포항항구점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=d2a7e2b2-51a0-418f-900f-b055e25f164a`}
            />
            <Title>45호_시지점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=fdaea8b2-898f-4496-a922-4a197a2d846f`}
            />
            <Title>73호_대전점</Title>
          </ShopImage>
        </SwiperSlide>
        <SwiperSlide>
          <ShopImage>
            <Image
              height={`100%`}
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2F%EB%A7%A4%EC%9E%A5%2F%E1%84%92%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%B7.jpeg?alt=media&token=0181f68e-f55a-47dd-b241-3e6d56a9909c`}
            />
            <Title>87호_홍은점</Title>
          </ShopImage>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
