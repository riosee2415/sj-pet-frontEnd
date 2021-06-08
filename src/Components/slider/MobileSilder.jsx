import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "rs-swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { EmptyList, Image, SpanText, Text, Wrapper } from "../CommonComponents";
import { numberWithCommas } from "../../commonUtils";
import { FaStar } from "react-icons/fa";
import Theme from "../../Styles/Theme";
import CircularIndeterminate from "../loading/CircularIndeterminate";

const MobileText = styled(Text)`
  color: rgb(34, 34, 34);
`;
const Container = styled.div`
  width: 100%;
  position: relative;

  .swiper-container-multirow-column > .swiper-wrapper {
    flex-direction: ${(props) => (props.isColumn ? `row` : `column`)};
  }
  .swiper-slide {
    margin-left: ${(props) => (props.isColumn ? `0 !important` : `10px`)};
  }
`;

export default ({ width, vDatum, isColumn, moveLinkHandler }) => {
  return (
    <Container isColumn={isColumn}>
      <Swiper
        spaceBetween={2}
        slidesPerView={isColumn ? 1 : width > 1000 ? 3 : width > 800 ? 2 : 1.2}
        slidesPerColumn={isColumn ? 2 : 1}
        centeredSlides={isColumn}
        autoplay={true}
        navigation={false}
      >
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`50%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle.png?alt=media&token=54662563-5a1e-4495-a5cd-70b136bb9db6`}
            />
            <MobileText fontSize={`14px !important`}>
              체계적이고 안정적인 물류 시스템으로 일주일에
            </MobileText>
            <MobileText fontSize={`14px !important`}>
              한번씩 본사 직접 배송으로 불필요한 재고를
            </MobileText>
            <MobileText fontSize={`14px !important`}>
              보유할 필요없음 (업계최초)
            </MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`70%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmobile-02.png?alt=media&token=2324d95b-435f-4c48-8e91-ef28a7c1135c`}
            />

            <MobileText fontSize={`14px !important`}>
              강아지, 고양이, 소동물까지 펫을 위한 마트!
            </MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`70%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmobile-03.png?alt=media&token=06f218d5-3f8e-4831-950e-15ae9160b94d`}
            />
            <MobileText fontSize={`14px !important`}>
              가장 많은 비용을 차지하는 인테리어 비용을
            </MobileText>
            <MobileText fontSize={`14px !important`}>
              창업자 직접처리로 창업 비용 절감
            </MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`70%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmobile-04.png?alt=media&token=b53d1a7e-da5f-4b63-8479-b17d80280ec2`}
            />
            <MobileText fontSize={`14px !important`}>
              코로나로 인해 폐업률이 높은 자영업계
            </MobileText>
            <MobileText fontSize={`14px !important`}>
              낮은 폐업률을 자랑하는 펫마트!
            </MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`60%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmobile-05.png?alt=media&token=5812959e-412b-4e02-aa0f-fb17174ff752`}
            />
            <MobileText fontSize={`14px !important`}>
              월별, 분기별, 시즌에 맞는 이벤트 기획 운영
            </MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`65%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmobile-06.png?alt=media&token=e166947d-da3a-4956-8244-bbdf4437edbd`}
            />
            <MobileText fontSize={`14px !important`}>
              매장 담당자 지정관리로 빠른 피드백은 물론
            </MobileText>
            <MobileText fontSize={`14px !important`}>
              매장수익분석, 교육 등 컨설팅 가능
            </MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`70%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fmobile-07.png?alt=media&token=6e2a2a5b-2d7d-4550-a68f-1268b2a8be7f`}
            />
            <MobileText fontSize={`14px !important`}>
              신상품평회를 개최하여 최신 트렌드에 맞는
            </MobileText>
            <MobileText fontSize={`14px !important`}>신상입고</MobileText>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper al={`flex-start`}>
            <Image
              alt="image"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fimg-00.png?alt=media&token=a0e54868-4bab-457d-8790-f9210397334d`}
            />
            <Image
              width={`55%`}
              margin={`20px 0`}
              alt="title"
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Ftitle-08.png?alt=media&token=1342bc6d-6bd8-4d0e-8de3-04762d72192e`}
            />
            <MobileText fontSize={`14px !important`}>
              TV, 옥외광고 등 브랜딩, 바이럴,
            </MobileText>
            <MobileText fontSize={`14px !important`}>
              신규고객 창출을 위한 마케팅 기획운영
            </MobileText>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
