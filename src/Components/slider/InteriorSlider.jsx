import React, { useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "rs-swiper";
import { Image, Wrapper } from "../CommonComponents";
import "rs-swiper/swiper-bundle.min.css";
import styled from "styled-components";

// install Swiper's Thumbs component
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const Container = styled.div`
  width: 100%;
  position: relative;

  .swiper-container {
    width: 500px;
  }

  .swiper-pagination {
    bottom: 0;
    padding-bottom: 10px;
  }

  .swiper-wrapper {
    padding-inline-start: 0;
  }
`;

const InteriorSlider = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container height={`1000px`}>
      {/* Main Swiper -> pass thumbs swiper instance */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image
            src={`https://picsum.photos/id/0/500/300`}
            style={{ listStyle: "none" }}
            alt={`Slide 0`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`https://picsum.photos/id/1/500/300`}
            style={{ listStyle: "none" }}
            alt={`Slide 1`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`https://picsum.photos/id/2/500/300`}
            style={{ listStyle: "none" }}
            alt={`Slide 3`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`https://picsum.photos/id/3/500/300`}
            style={{ listStyle: "none" }}
            alt={`Slide 3`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`https://picsum.photos/id/4/500/300`}
            style={{ listStyle: "none" }}
            alt={`Slide 4`}
          />
        </SwiperSlide>
      </Swiper>

      <Wrapper>
        <Swiper spaceBetween={5} slidesPerView={3} onSwiper={setThumbsSwiper}>
          <SwiperSlide>
            <Image
              src={`https://picsum.photos/id/0/163/100`}
              alt={`Thumbnail 0`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={`https://picsum.photos/id/1/163/100`}
              alt={`Thumbnail 1`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={`https://picsum.photos/id/2/163/100`}
              alt={`Thumbnail 2`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={`https://picsum.photos/id/3/163/100`}
              alt={`Thumbnail 3`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={`https://picsum.photos/id/4/163/100`}
              alt={`Thumbnail 4`}
            />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Container>
  );
};

export default InteriorSlider;
