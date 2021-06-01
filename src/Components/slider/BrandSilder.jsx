import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { EmptyList, Image, SpanText, Text, Wrapper } from "../CommonComponents";
import { numberWithCommas } from "../../commonUtils";
import { FaStar } from "react-icons/fa";
import Theme from "../../Styles/Theme";
import CircularIndeterminate from "../loading/CircularIndeterminate";

const BrandLogo = styled(Image)`
  width: 170px;
  @media (max-width: 800px) {
    width: 350px;
  }
`;

export default ({ width, bDatum, isColumn, moveLinkHandler }) => {
  const Container = styled.div`
    width: 100%;
    position: relative;

    .swiper-container-multirow-column > .swiper-wrapper {
      flex-direction: ${(props) => (props.isColumn ? `row` : `column`)};
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      margin-top: ${(props) => (props.isColumn ? `0 !important` : `0`)};
    }
  `;

  return (
    <Container isColumn={isColumn}>
      <Swiper
        spaceBetween={1}
        slidesPerView={5}
        slidesPerColumn={1}
        autoplay={true}
        navigation={false}
        loop={true}
      >
        {bDatum ? (
          bDatum.length === 0 ? (
            <EmptyList>브랜드가 없습니다.</EmptyList>
          ) : (
            bDatum.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <BrandLogo
                    alt="brand"
                    src={data.thumbnail}
                    margin={`10px 0`}
                  />
                </SwiperSlide>
              );
            })
          )
        ) : (
          <CircularIndeterminate />
        )}
      </Swiper>
    </Container>
  );
};
