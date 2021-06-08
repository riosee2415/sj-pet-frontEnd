import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { EmptyList, Image, SpanText, Text, Wrapper } from "../CommonComponents";
import { numberWithCommas } from "../../commonUtils";
import { FaStar } from "react-icons/fa";
import Theme from "../../Styles/Theme";
import CircularIndeterminate from "../loading/CircularIndeterminate";

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

export default ({ width, vDatum, isColumn, moveLinkHandler }) => {
  return (
    <Container isColumn={isColumn}>
      <Swiper
        spaceBetween={2}
        slidesPerView={isColumn ? 1 : width > 1000 ? 3 : width > 800 ? 2 : 1}
        slidesPerColumn={isColumn ? 2 : 1}
        centeredSlides={isColumn}
        autoplay={true}
        navigation={false}
      >
        {vDatum ? (
          vDatum.length === 0 ? (
            <EmptyList>조회 된 데이터가 없습니다.</EmptyList>
          ) : (
            vDatum.map((data, idx) => (
              <SwiperSlide key={data._id}>
                <Wrapper dr={`row`}>
                  <Image
                    // width={`150px`}
                    // height={`100px`}
                    margin={`10px 0`}
                    bgColor={`${Theme.grey_C}`}
                    border={`1px solid ${Theme.black_C}`}
                    src={data.thumbnail}
                  />
                  {/* <Wrapper width={`auto`}>
                    <Text
                      margin={`0 0 10px`}
                      fontSize={`12px`}
                      color={`${Theme.white_C}`}
                    >
                      {data.title}
                    </Text>
                    <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                      {data.content}
                    </Text>
                  </Wrapper> */}
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
