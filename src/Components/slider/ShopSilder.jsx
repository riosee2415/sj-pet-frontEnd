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

export default ({ width, sDatum, isColumn, moveLinkHandler }) => {
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
        {sDatum ? (
          sDatum.length === 0 ? (
            <EmptyList>조회 된 데이터가 없습니다.</EmptyList>
          ) : (
            sDatum.map((data, idx) => (
              <SwiperSlide key={data._id}>
                <Image
                  width={`200px`}
                  height={`200px`}
                  margin={`10px 0`}
                  border={`1px solid ${Theme.black_C}`}
                  src={data.thumbnailPath}
                />
                {/* <Text>{data.title}</Text> */}
              </SwiperSlide>
            ))
          )
        ) : (
          <CircularIndeterminate />
        )}

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
