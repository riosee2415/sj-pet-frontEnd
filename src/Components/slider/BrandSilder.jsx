import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { EmptyList, Image, SpanText, Text, Wrapper } from "../CommonComponents";
import { numberWithCommas } from "../../commonUtils";
import Theme from "../../Styles/Theme";
import CircularIndeterminate from "../loading/CircularIndeterminate";

const BrandLogo = styled(Image)`
  width: auto;
  object-fit: contain;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const BrandWrapper = styled(Wrapper)`
  width: 170px;

  @media (max-width: 800px) {
    width: 102px;
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
      align-items: center;
      margin-top: ${(props) => (props.isColumn ? `0 !important` : `0`)};
    }
  `;

  return (
    <Container isColumn={true}>
      <Swiper
        spaceBetween={1}
        slidesPerView={width > 1200 ? 5 : width > 800 ? 4 : 3}
        slidesPerColumn={2}
        autoplay={true}
        navigation={false}
        loop={false}
      >
        {bDatum ? (
          bDatum.length === 0 ? (
            <EmptyList>브랜드가 없습니다.</EmptyList>
          ) : (
            bDatum.map((data, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <BrandWrapper>
                    <BrandLogo
                      alt="brand"
                      src={data.thumbnail}
                      margin={`10px 0`}
                    />
                  </BrandWrapper>
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
