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
      display: flex;
      justify-content: center;
    }
  `;

  SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

  return (
    <Container isColumn={isColumn}>
      <Swiper
        slidesPerView={isColumn ? 4.5 : 6}
        slidesPerColumn={isColumn ? 2 : 1}
        centeredSlides={isColumn}
        autoplay
        loop
      >
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper
            width={`200px`}
            height={`200px`}
            margin={`10px 0`}
            border={`1px solid ${Theme.black_C}`}
          ></Wrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
