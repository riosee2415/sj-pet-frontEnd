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
        spaceBetween={2}
        slidesPerView={isColumn ? 1 : 3}
        slidesPerColumn={isColumn ? 2 : 1}
        centeredSlides={isColumn}
        autoplay={true}
        navigation={false}
      >
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper dr={`row`}>
            <Wrapper
              width={`150px`}
              height={`100px`}
              margin={`10px 20px`}
              bgColor={`${Theme.grey_C}`}
              border={`1px solid ${Theme.black_C}`}
            ></Wrapper>
            <Wrapper width={`auto`}>
              <Text
                margin={`0 0 10px`}
                fontSize={`12px`}
                color={`${Theme.white_C}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text fontSize={`12px`} color={`${Theme.white_C}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
