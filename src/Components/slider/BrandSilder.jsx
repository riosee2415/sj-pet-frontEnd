import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { Image, SpanText, Text, Wrapper } from "../CommonComponents";
import { numberWithCommas } from "../../commonUtils";
import { FaStar } from "react-icons/fa";
import Theme from "../../Styles/Theme";

export default ({ width, datum, isColumn, moveLinkHandler }) => {
  const Container = styled.div`
    width: 100%;
    position: relative;

    .swiper-container-multirow-column > .swiper-wrapper {
      flex-direction: ${(props) => (props.isColumn ? `row` : `column`)};
    }
    .swiper-slide {
      margin-top: ${(props) => (props.isColumn ? `0 !important` : `0`)};
    }
  `;

  return (
    <Container isColumn={isColumn}>
      <Swiper
        spaceBetween={1}
        slidesPerView={isColumn ? 5 : 5}
        slidesPerColumn={isColumn ? 5 : 1}
        centeredSlides={isColumn}
        autoplay={true}
        navigation={false}
      >
        <SwiperSlide>
          <Image
            alt="brand"
            src={``}
            isFilter={true}
            width={`200px`}
            margin={`10px 0`}
          />
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
          <Wrapper
            width={`200px`}
            height={`150px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
