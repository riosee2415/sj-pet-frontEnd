import React, { useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "rs-swiper";
import { Image, RsWrapper, Wrapper } from "../CommonComponents";
import { withResizeDetector } from "react-resize-detector";

import "rs-swiper/swiper-bundle.min.css";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

// install Swiper's Thumbs component
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const Container = styled.div`
  width: 100%;
  position: relative;

  .swiper-button-prev {
    @media (max-width: 700px) {
      left: 0 !important;
    }
  }

  .swiper-button-next {
    @media (max-width: 700px) {
      right: 0 !important;
    }
  }

  .swiper-button-next:after {
    color: ${Theme.white_C};

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  .swiper-button-prev:after {
    color: ${Theme.white_C};
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  /* .small .swiper-container {
    overflow: hidden !important;
    width: 100%;
  } */

  /* .small .swiper-slide {
    margin: 30px 0 0;
  } */

  .swiper-slide {
    position: relative;
    text-align: center;

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(57, 57, 57, 0.5);
    }
  }

  .swiper-slide-active:before {
    background-color: transparent;
  }

  .swiper-container {
    width: 900px;
    overflow: inherit !important;

    @media (max-width: 700px) {
      width: 300px;
    }
  }

  .small .swiper-slide-active::before {
    background-color: rgba(57, 57, 57, 0.5);
  }

  .swiper-slide-thumb-active::before {
    background-color: transparent !important;
  }

  .swiper-pagination {
    bottom: 0;
    padding-bottom: 10px;
  }

  .swiper-wrapper {
    padding-inline-start: 0;
  }

  @media (max-width: 700px) {
    .small {
      display: none;
    }
  }
`;

const InteriorSlider = ({ width }) => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container height={width < 700 ? `270px` : `1000px`}>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        loop
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F1.jpg?alt=media&token=fdd3da16-5710-4e13-90b8-f83b278a2e94`}
            alt={`Slide 0`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FDSC09636.png?alt=media&token=b571cd6c-9f52-49e0-a579-2e08e9c49047`}
            alt={`Slide 1`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20201109_095546008_06.png?alt=media&token=c52b1403-2a6c-4c09-965e-e56541624b64`}
            alt={`Slide 3`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20201202_160548915_02.jpg?alt=media&token=ce910dba-f077-4b8b-b01e-9be7ac74d17a`}
            alt={`Slide 3`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210302_084955928_10.jpg?alt=media&token=f108710e-6dc7-4c54-86a1-3caad15a439f`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210302_114556833_03.jpg?alt=media&token=88145831-31c8-4e41-acdd-e4ad8ae1cfce`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_095843786_05.jpg?alt=media&token=a4d3a3f3-dc18-489d-ae41-cf8b7be1f1ec`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_095843786_19.jpg?alt=media&token=ba93e8f8-0c9e-4de9-969a-a7706e8842a4`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_101212847_17.jpg?alt=media&token=148661cf-f296-4462-9928-e760c4c7a4c9`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_102408414_03.jpg?alt=media&token=c2d22dd2-c7c1-4b34-b3d5-02496426fde1`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_102408414_15.jpg?alt=media&token=6670e9bf-469f-4ddd-aa9b-1a3664f99cde`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_102408414_22.jpg?alt=media&token=3ed77b27-6943-4487-bff8-86051d33a71a`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={width < 700 ? `90%` : `98%`}
            height={width < 700 ? `216px` : `500px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2FKakaoTalk_20210315_102408414_28.jpg?alt=media&token=87fc9643-637d-4e2c-985b-9af276c1a85f`}
            alt={`Slide 4`}
          />
        </SwiperSlide>
      </Swiper>

      {/* <RsWrapper className="small" margin={`0 auto`} overflow={`hidden`}> */}
      <Wrapper
        overflow={`hidden`}
        width={`880px`}
        height={`200px`}
        margin={`0 auto`}
        isRelative={true}
        className={`small`}
      >
        <Wrapper isAbsolute={true}>
          <Swiper spaceBetween={5} slidesPerView={4} onSwiper={setThumbsSwiper}>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2F1.jpg?alt=media&token=fe1191b5-b3fa-44b4-81d7-44b4d2e724a1`}
                alt={`Thumbnail 0`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FDSC09636.png?alt=media&token=cc006b2e-ce98-4082-9fb9-fcabf2fcc021`}
                alt={`Thumbnail 1`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20201109_095546008_06.png?alt=media&token=c1d7c614-723e-4991-859b-768e6cf78e2b`}
                alt={`Thumbnail 2`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20201202_160548915_02.jpg?alt=media&token=81e33933-8155-451b-bac2-ab0bbdd4b3e0`}
                alt={`Thumbnail 3`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210302_084955928_10.jpg?alt=media&token=c80b2181-bc2d-4cf5-af59-96cc9aaa37d8`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210302_114556833_03.jpg?alt=media&token=bb3c69c1-f79e-4043-a355-e7f8757cb0ca`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_095843786_05.jpg?alt=media&token=8b581921-eefa-4bce-8916-6ff0c6c34129`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_095843786_19.jpg?alt=media&token=757ee1e7-8b44-435a-999b-d11e3c5861de`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_101212847_17.jpg?alt=media&token=dca0723d-697c-462a-9c27-3882c2b44091`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_102408414_03.jpg?alt=media&token=39f4ef67-3bfc-4c01-921d-49b859ff22f8`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_102408414_15.jpg?alt=media&token=131bd2d2-6e4d-4cdb-943e-dd41fcf90e90`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_102408414_22.jpg?alt=media&token=a1a36702-1e78-4801-93d1-1334b9344729`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={`220px`}
                height={`150px`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM02%2F%EB%8D%A4%ED%94%84%2FKakaoTalk_20210315_102408414_28.jpg?alt=media&token=a3d4c339-644e-437a-8b5a-e0c9a74ee2d1`}
                alt={`Thumbnail 4`}
              />
            </SwiperSlide>
          </Swiper>
        </Wrapper>
      </Wrapper>

      {/* </RsWrapper> */}
    </Container>
  );
};

export default withResizeDetector(InteriorSlider);
