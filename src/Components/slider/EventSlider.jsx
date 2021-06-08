import React from "react";
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

export default ({ isColumn }) => {
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
        slidesPerView={1.2}
        slidesPerColumn={1}
        centeredSlides={isColumn}
        autoplay
        loop
      >
        <SwiperSlide>
          <Image
            width={`273px`}
            margin={`10px 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-01.png?alt=media&token=aefd398e-b806-4ceb-9895-2436c08d14e5`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={`273px`}
            margin={`10px 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-02.png?alt=media&token=20b3e369-39db-4d25-a089-8d5706becc98`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={`273px`}
            margin={`10px 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-03.png?alt=media&token=85b753f0-b75b-46eb-9fbd-76a66fa21171`}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
