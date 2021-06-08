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
  font-family: "Averia Serif Libre", cursive;
  color: ${(props) => props.theme.white_C};
  position: relative;
  margin: -70px 0 0 -100px;

  &:before {
    content: "";
    position: absolute;
    bottom: 45%;
    right: -55%;
    width: 65px;
    height: 4px;
    background-color: ${(props) => props.theme.basicTheme_C};

    @media (max-width: 700px) {
      width: 30px;
      height: 2px;
    }
  }

  @media (max-width: 700px) {
    font-size: 11px !important;
    margin: -70px 0 0 -70px;
  }
`;

const ShopImage = styled(Image)`
  width: 330px;
  height: 330px;
  position: relative;

  &:hover {
    box-shadow: 0px 3px 15px ${(props) => props.theme.lightBasicTheme_C};
  }

  @media (max-width: 1500px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 1100px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 800px) {
    width: 180px;
    height: 180px;
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
        slidesPerView={isColumn ? 4.9 : width > 1000 ? 4 : width > 800 ? 3 : 2}
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
              <SwiperSlide key={data._id} onClick={() => moveLinkHandler(data)}>
                <Wrapper>
                  <ShopImage margin={`10px 0`} src={data.thumbnailPath} />
                  <Title>{data.title}</Title>
                </Wrapper>
              </SwiperSlide>
            ))
          )
        ) : (
          <CircularIndeterminate />
        )}
      </Swiper>
    </Container>
  );
};
