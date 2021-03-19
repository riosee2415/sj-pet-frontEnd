import React, { useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  CommonSubTitle,
  RsWrapper,
  Text,
  Image,
  UlWrapper,
  LiWrapper,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import Theme from "../../../Styles/Theme";

const Popup = withSplitting(() =>
  import("../../../Components/popup/Popup.jsx")
);
const MainSlider = withSplitting(() =>
  import("../../../Components/slider/MainSlider.jsx")
);
const ShopSilder = withSplitting(() =>
  import("../../../Components/slider/ShopSilder.jsx")
);
const BrandSilder = withSplitting(() =>
  import("../../../Components/slider/BrandSilder.jsx")
);
const StartSilder = withSplitting(() =>
  import("../../../Components/slider/StartSilder.jsx")
);

const MM00Presenter = ({
  width,
  //
  mobileBannerData,
  mainBannerData,
}) => {
  return (
    <WholeWrapper>
      <Wrapper height={`700px`} bgColor={`${Theme.grey_C}`}>
        <Text fontWeight={`600`}>반려동물 업종 최초</Text>
        <Text fontWeight={`600`} margin={`20px 0`}>
          한국프랜차이즈 대상 수상
        </Text>
        <Text fontSize={`30px`} color={`${Theme.basicTheme_C}`}>
          코로나도 뚫는 돋보적 매출
        </Text>
      </Wrapper>

      {/* <MainSlider
        mainBannerData={width < 700 ? mobileBannerData : mainBannerData}
      /> */}
      <RsWrapper>
        <CommonSubTitle>매장현황</CommonSubTitle>

        <Wrapper margin={`70px 0`}>
          <ShopSilder />
        </Wrapper>

        <CommonSubTitle>업계유일</CommonSubTitle>

        <Text
          width={`80%`}
          margin={`60px 0 40px`}
          fontSize={`20px`}
          fontWeight={`600`}
          textAlign={`center`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          ex deleniti accusamus suscipit nam, impedit quos quidem iste, quis
          velit odit dignissimos quo explicabo quia delectus culpa vel
          accusantium fugiat!
        </Text>
        <Text width={`60%`} textAlign={`center`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          ex deleniti accusamus suscipit nam, impedit quos quidem iste, quis
          velit odit dignissimos quo explicabo quia delectus culpa vel
          accusantium fugiat!
        </Text>

        <Wrapper dr={`row`} margin={`60px 0 100px`}>
          <Wrapper width={`50%`}>
            <Image
              width={`60%`}
              src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2Fgraph.png?alt=media&token=56cf3323-f0cc-4d08-abab-caaac17c53bf`}
            />
          </Wrapper>
          <Wrapper width={`50%`}>
            <UlWrapper
              dr={`row`}
              height={`60px`}
              margin={`0 0 2px`}
              fontSize={`20px`}
              borderTop={`3px solid ${Theme.subTheme_C}`}
              borderBottom={`1px solid ${Theme.subTheme_C}`}
            >
              <LiWrapper width={`20%`}>항목</LiWrapper>
              <LiWrapper width={`60%`}>금액</LiWrapper>
              <LiWrapper width={`20%`}>구성비</LiWrapper>
            </UlWrapper>

            <UlWrapper
              dr={`row`}
              height={`60px`}
              fontSize={`20px`}
              borderTop={`1px solid ${Theme.subTheme_C}`}
              borderBottom={`1px solid ${Theme.subTheme_C}`}
            >
              <LiWrapper width={`20%`}>월 매출</LiWrapper>
              <LiWrapper width={`60%`}>80,000,000</LiWrapper>
              <LiWrapper width={`20%`}>100%</LiWrapper>
            </UlWrapper>

            <UlWrapper dr={`row`} height={`40px`}>
              <LiWrapper width={`20%`}>영업이익</LiWrapper>
              <LiWrapper width={`60%`}>28,000,000</LiWrapper>
              <LiWrapper width={`20%`}>35%</LiWrapper>
            </UlWrapper>

            <UlWrapper
              dr={`row`}
              height={`40px`}
              borderTop={`1px solid ${Theme.subTheme_C}`}
              borderBottom={`1px solid ${Theme.subTheme_C}`}
            >
              <LiWrapper width={`20%`}>임차료</LiWrapper>
              <LiWrapper width={`60%`}>5,000,000</LiWrapper>
              <LiWrapper width={`20%`}>6.3%</LiWrapper>
            </UlWrapper>

            <UlWrapper dr={`row`} height={`40px`}>
              <LiWrapper width={`20%`}>인건비</LiWrapper>
              <LiWrapper width={`60%`}>4,500,000</LiWrapper>
              <LiWrapper width={`20%`}>5.6%</LiWrapper>
            </UlWrapper>

            <UlWrapper
              dr={`row`}
              height={`40px`}
              borderTop={`1px solid ${Theme.subTheme_C}`}
              borderBottom={`1px solid ${Theme.subTheme_C}`}
            >
              <LiWrapper width={`20%`}>제세공과금</LiWrapper>
              <LiWrapper width={`60%`}>1,000,000</LiWrapper>
              <LiWrapper width={`20%`}>1.3%</LiWrapper>
            </UlWrapper>

            <UlWrapper dr={`row`} height={`40px`}>
              <LiWrapper width={`20%`}>기타 재미용</LiWrapper>
              <LiWrapper width={`60%`}>3,500,000</LiWrapper>
              <LiWrapper width={`20%`}>4.3%</LiWrapper>
            </UlWrapper>

            <UlWrapper
              dr={`row`}
              height={`40px`}
              borderTop={`1px solid ${Theme.subTheme_C}`}
              borderBottom={`1px solid ${Theme.subTheme_C}`}
            >
              <LiWrapper width={`20%`}>물류비</LiWrapper>
              <LiWrapper width={`60%`}>24,000,000</LiWrapper>
              <LiWrapper width={`20%`}>30%</LiWrapper>
            </UlWrapper>

            <UlWrapper
              dr={`row`}
              height={`60px`}
              fontSize={`20px`}
              borderBottom={`3px solid ${Theme.subTheme_C}`}
            >
              <LiWrapper width={`20%`}>순 이익 (월)</LiWrapper>
              <LiWrapper width={`60%`}>14,000,000</LiWrapper>
              <LiWrapper width={`20%`}>17.5%</LiWrapper>
            </UlWrapper>
          </Wrapper>
        </Wrapper>

        <CommonSubTitle>펫마트 입점 브랜드</CommonSubTitle>

        <Text margin={`50px 0`}>
          펫마트는 약 700여개의 유명, 신규 브랜드와 5000여개의 품목을 취급하고
          있습니다.
        </Text>

        <BrandSilder />
      </RsWrapper>

      <CommonSubTitle>지금 펫마트를 시작해야 하는 이유 !</CommonSubTitle>

      <Image
        height={`300px`}
        margin={`50px 0 20px`}
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B3.png?alt=media&token=02eeecf3-dfbd-4274-8c90-6d6ce834598e`}
      />
      <Image
        height={`300px`}
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B32.png?alt=media&token=cffd58f0-7688-488b-b05d-663422388207`}
      />
      <Image
        height={`300px`}
        margin={`20px 0`}
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B33.png?alt=media&token=52f9c5da-c020-4861-9ee7-a106f1b2b172`}
      />
      <Image
        height={`300px`}
        src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM00%2F%E1%84%91%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A1%E1%84%90%E1%85%B34.png?alt=media&token=7eb3e81b-935a-4abf-b4e0-af10cdd73a99`}
      />

      <CommonSubTitle>펫마트와 함께 인생 제 2막 시작</CommonSubTitle>

      <Wrapper
        dr={`row`}
        margin={`60px 0 100px`}
        padding={`60px 30px`}
        bgColor={`${Theme.black_C}`}
      >
        <Wrapper
          width={`calc(100% - 1280px)`}
          padding={`0 60px 0 0`}
          al={`flex-start`}
        >
          <Text fontSize={`60px`} color={`${Theme.white_C}`}>
            가맹점
          </Text>
          <Text
            fontSize={`60px`}
            fontWeight={`600`}
            borderBottom={`3px solid ${Theme.kakao_C}`}
            color={`${Theme.white_C}`}
          >
            성공스토리
          </Text>
          <Text margin={`40px 0 30px`} color={`${Theme.white_C}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            porro voluptatibus pariatur. Quisquam nulla atque voluptas officia
            optio explicabo at aut.
          </Text>
          <Text color={`${Theme.white_C}`}>
            ullam nihil quam? Expedita dolorem officia aut excepturi voluptatem!
          </Text>
          <Text margin={`40px 0`} color={`${Theme.white_C}`}>
            68호 군산점
          </Text>
        </Wrapper>

        <Wrapper width={`1280px`} height={`720px`} bgColor={`${Theme.grey_C}`}>
          1280*720
        </Wrapper>

        <Wrapper margin={`100px 0 20px`}>
          <StartSilder />
        </Wrapper>
      </Wrapper>

      <CommonSubTitle>왜 펫마트일까 ?</CommonSubTitle>

      <Wrapper
        height={`100px`}
        margin={`50px 0`}
        fontSize={`40px`}
        fontWeight={`600`}
        bgColor={`${Theme.kakao_C}`}
      >
        예비 창업자들이 펫마트를 선택하는 이유 !
      </Wrapper>

      <Wrapper dr={`row`}>
        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>재고 부담율 제로</Text>
            </Wrapper>
            <Text fontSize={`15px`}>체계적이고 안정적인 물류 시스템으로</Text>
            <Text fontSize={`15px`}>
              일주일에 한번씩 본사 직접배송으로 불필요한 재고를
            </Text>
            <Text fontSize={`15px`}>보유할 필요없음</Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>5000여가지 반려동물 용품 </Text>
            </Wrapper>
            <Text fontSize={`15px`}>
              강아지, 고양이, 소동물까지 펫을 위한 마트
            </Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>실속창업</Text>
            </Wrapper>
            <Text fontSize={`15px`}>가장 많은 비용을 차지하는 인테리어에</Text>
            <Text fontSize={`15px`}>
              비용을 창업자 직접처리로 창업 비용절감
            </Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>자영업자 폐업률 70%시대</Text>
            </Wrapper>
            <Text fontSize={`15px`}>펫마트 실패업률 1.5%</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper dr={`row`}>
        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>다양한 이벤트 기획구성</Text>
            </Wrapper>
            <Text fontSize={`15px`}>
              월별, 분기별, 시즌에 맞는 이벤트 구성 기획
            </Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>담당 S/V 지정 운영</Text>
            </Wrapper>
            <Text fontSize={`15px`}>
              매장 담당자 지정관리로 빠른 피드백은 물론
            </Text>
            <Text fontSize={`15px`}>매장수익분석, 교육 등 컨설팅 가능</Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>월 2회 신상품 입고</Text>
            </Wrapper>
            <Text fontSize={`15px`}>신상품평회를 개최하여</Text>
            <Text fontSize={`15px`}>최신트랜드에 맞는 신상입고</Text>
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} width={`calc(100% / 4 - 20px)`} margin={`10px`}>
          <Wrapper height={`270px`} bgColor={`${Theme.grey_C}`}></Wrapper>
          <Wrapper height={`230px`} border={`1px solid ${Theme.grey_C}`}>
            <Wrapper dr={`row`} margin={`0 0 30px`}>
              <Image alt="아이콘" width={`30px`} />
              <Text fontSize={`20px`}>다양한 광고 진행</Text>
            </Wrapper>
            <Text fontSize={`15px`}>TV, 옥외광고 등 브랜딩, 바이럴,</Text>
            <Text fontSize={`15px`}>신규고객 창출을 위한 마케팅 기획운영</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <RsWrapper>
        <CommonSubTitle>창업문의</CommonSubTitle>

        <Wrapper
          width={`100%`}
          height={`400px`}
          margin={`0 0 100px`}
          bgColor={`${Theme.greyArea_C}`}
          shadow={`3px 3px 3px ${Theme.grey_C}`}
        >
          <Text fontSize={`25px`}>
            펫 마트의 전문 창업상담사 항시대기 1:1문의로
          </Text>
          <Text fontSize={`25px`}>편안하고 빠른 안내를 받아보세요.</Text>

          <Wrapper
            width={`200px`}
            height={`80px`}
            margin={`100px 0 0`}
            fontSize={`25px`}
            color={`${Theme.white_C}`}
            bgColor={`${Theme.subTheme_C}`}
          >
            문의하러가기
          </Wrapper>
        </Wrapper>
      </RsWrapper>
      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
