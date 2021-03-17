import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Image, RsWrapper, Wrapper, Text } from "../CommonComponents";

export default ({ mainBannerData, width }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const Container = styled.div`
    width: 100%;
    height: 820px;
    margin-top: 86px;
    position: relative;
    overflow: hidden;

    @media (max-width: 700px) {
      margin-top: 59px;
      height: 500px;
    }

    & .slick-slide {
      text-align: center;
    }
    & .slick-next {
      margin: 0 25px 0 0;
    }
    & .slick-prev {
      margin: 0 0 0 25px;
    }
    & .slick-prev,
    & .slick-next {
      z-index: 999;
      color: #eee;
    }
    & .slick-prev:before,
    & .slick-next:before {
      color: #eee;
      font-size: 30px;
    }
    & .slick-next:before {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      border-top: 4px solid #eee;
      border-right: 4px solid #eee;
      transform: rotate(45deg);
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -7px;
    }
    & .slick-prev:before {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      border-top: 4px solid #eee;
      border-left: 4px solid #eee;
      transform: rotate(-45deg);
      position: absolute;
      left: 10px;
      top: 50%;
      margin-top: -7px;
      @media (max-width: 700px) {
        display: none;
      }
    }
  `;

  const MainBanner = styled.div`
    width: 100%;
    height: 820px;
    position: relative;
    cursor: pointer;
    @media (max-width: 700px) {
      height: 500px;
    }
  `;

  const ImgArea = styled.div`
    width: 100%;
    height: 820px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 700px) {
      height: 500px;
    }
  `;

  const DescArea = styled(Wrapper)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.white_C};
  `;

  const DescTitle = styled.h2`
    font-size: 80px;
    font-weight: 900;
    margin-bottom: 20px;
    color: ${(props) => props.theme.subTheme_C};

    @media (max-width: 1000px) {
      font-size: 60px;
    }
    @media (max-width: 800px) {
      font-size: 30px;
    }
    @media (max-width: 700px) {
      font-size: 20px;
    }
  `;

  const DescText = styled.h3`
    font-size: 50px;

    @media (max-width: 1000px) {
      font-size: 40px;
    }
    @media (max-width: 800px) {
      font-size: 25px;
    }
    @media (max-width: 700px) {
      font-size: 20px;
    }
  `;

  return (
    <Container>
      <Slider {...settings}>
        {mainBannerData &&
          mainBannerData.map((data, idx) => {
            return (
              <MainBanner key={data._id}>
                <ImgArea>
                  <Image alt="메인베너" height={`100%`} src={data.imagePath} />
                  <DescArea>
                    <RsWrapper al={`flex-start`}>
                      <DescTitle>{data.title}</DescTitle>
                      {data.content.split("<br />").map((data, idx) => {
                        return (
                          <DescText key={idx}>
                            {data} <br />
                          </DescText>
                        );
                      })}
                    </RsWrapper>
                  </DescArea>
                </ImgArea>
              </MainBanner>
            );
          })}
      </Slider>
    </Container>
  );
};
