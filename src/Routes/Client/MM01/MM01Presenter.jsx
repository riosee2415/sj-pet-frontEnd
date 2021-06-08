import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  RsWrapper,
  Text,
  SpanText,
  CommonSubTitle,
  Image,
  SubjectTitle,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";
const Fade = withSplitting(() => import("react-reveal/Fade"));
const LightSpeed = withSplitting(() => import("react-reveal/LightSpeed"));

const Span = styled(SpanText)`
  background-color: ${(props) => props.theme.basicTheme_C};
`;

const MM01Presenter = ({
  width,
  //
  currentTab,
  setCurrentTab,
  greRef,
  hisRef,
  //
  scrollMoveHandler,
}) => {
  useTitle("회사 | 펫마트");

  return (
    <WholeWrapper>
      <SubBanner
        title={`회사소개`}
        src={
          width < 800
            ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2Fsub_title.png?alt=media&token=176a7d7b-244e-49da-bfa2-a28788974beb`
            : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2Fmm01.png?alt=media&token=81757127-1aa0-4918-80af-9f627b10365f`
        }
      />
      <Wrapper
        dr={`row`}
        height={`70px`}
        borderBottom={`1px solid ${Theme.grey_C}`}
      >
        <Wrapper
          width={`150px`}
          height={`100%`}
          cursor={`pointer`}
          borderBottom={currentTab === 0 && `2px solid ${Theme.basicTheme_C}`}
          fontSize={`16px !important`}
          onClick={() => setCurrentTab(0)}
        >
          CEO 인사말
        </Wrapper>
        <Wrapper height={`20px`} bgColor={Theme.grey_C} width={`1px`}></Wrapper>
        <Wrapper
          cursor={`pointer`}
          width={`150px`}
          height={`100%`}
          borderBottom={currentTab === 1 && `2px solid ${Theme.basicTheme_C}`}
          fontSize={`16px !important`}
          onClick={() => setCurrentTab(1)}
        >
          연혁
        </Wrapper>
      </Wrapper>
      {currentTab === 0 && (
        <RsWrapper padding={`80px 0`}>
          <CommonSubTitle>CEO 인사말</CommonSubTitle>
          <LightSpeed>
            <Wrapper display={width < 900 ? `none` : `flex`}>
              <SubjectTitle>
                반려동물용품 유통분야 전국 매출 1위 (주)선진펫이 지나온
                발자취입니다.
              </SubjectTitle>
            </Wrapper>
          </LightSpeed>

          <LightSpeed>
            <Wrapper display={width < 900 ? `flex` : `none`}>
              <SubjectTitle>반려동물용품 유통분야 전국 매출 1위</SubjectTitle>
              <SubjectTitle>(주)선진펫이 지나온 발자취입니다.</SubjectTitle>
            </Wrapper>
          </LightSpeed>
          <Wrapper
            al={`flex-start`}
            ref={greRef}
            bgColor={`rgb(249, 249, 249)`}
            margin={`60px 0 0`}
            padding={width < 1280 ? `100px 30px` : `100px 80px`}
            isRelative={true}
            display={width < 900 ? `none` : `flex`}
          >
            <Wrapper
              width={`auto`}
              al={`flex-start`}
              padding={`35px 10px 35px 0`}
              borderTop={`2px solid ${Theme.basicTheme_C}`}
              borderBottom={`2px solid ${Theme.basicTheme_C}`}
            >
              <Fade bottom>
                <Text
                  fontSize={width < 900 ? `18px !important` : `48px`}
                  fontWeight={`300`}
                  isBMFont
                >
                  <SpanText color={Theme.basicTheme_C}>선진적</SpanText>&nbsp;
                  반려동물
                </Text>
                <Text
                  fontSize={width < 900 ? `18px !important` : `48px`}
                  fontWeight={`300`}
                  isBMFont
                >
                  <SpanText color={Theme.basicTheme_C}>문화</SpanText>를
                  선도하는 기업
                </Text>
              </Fade>
            </Wrapper>

            <Wrapper color={`#616161`} width={`auto`} al={`flex-start`}>
              <Text fontWeight={`300`} margin={`50px 0 0`}>
                안녕하십니까?
              </Text>
              <Text fontWeight={`300`}>
                주식회사 선진펫의 회장 이상득입니다.
              </Text>
              <Text fontWeight={`300`} margin={`30px 0 0`}>
                코로나19로 인한 경제침체 속에서 펫마트는 지난해 동종업계 전국
                매출 1위라는 성적과
              </Text>
              <Text fontWeight={`300`}>
                2020년 반려동물 관련 업종 최초로 "한국 프랜차이즈 대상"까지
                수상하는 영예를 안게 되었습니다.
              </Text>

              <Text fontWeight={`300`} margin={`30px 0 0`}>
                대구에서 시작한 펫 마트는 경북, 부산, 경남, 광주, 전라를 거쳐
                수도권까지 진출하고 있습니다.
              </Text>

              <Text fontWeight={`300`}>
                저희가 동종업계 선두를 유지할 수 있었던 것은 임직원들의 끊임없는
                노력과 혁신,
              </Text>
              <Text fontWeight={`300`}>
                마진율을 높이기 위한 OEM 공장 설립, 개발과 해외 직수입, 매입을
                통하여 양질의 상품을
              </Text>
              <Text fontWeight={`300`}>
                더욱 저렴하게 공급할 수 있는 경쟁력을 갖추었기 때문입니다.
              </Text>

              <Text fontWeight={`300`} margin={`30px 0 0`}>
                반려인들의 변함없는 신뢰와 사랑에 보답하는 길은 더 좋은 상품과
                제공하는 것과 서비스를
              </Text>
              <Text fontWeight={`300`}>
                더불어 이제 명실상부한 반려동물용품 전문 기업의 리더로서
              </Text>
              <Text fontWeight={`300`}>
                기업의 사회적 책임을 성실히 이행하는 책임 경영의 실천이라고
                생각합니다.
              </Text>

              <Text fontWeight={`300`} margin={`30px 0 0`}>
                앞으로 저희 (주)선진펫은 반려동물의 건강과 행복 그리고 편의를
                위한 노력을 멈추지 않을 것이며,
              </Text>
              <Text fontWeight={`300`}>
                펫마트를 선택해주시는 소상공인과 함께 성장하는 든든한 파트너로서
                힘이 되어드리겠습니다.
              </Text>

              <Text fontWeight={`300`} margin={`30px 0 0`}>
                감사합니다.
              </Text>
            </Wrapper>
            <Wrapper
              width={width < 1100 ? `25%` : `40%`}
              isAbsolute={true}
              bottom={`0`}
              right={`10px`}
            >
              <Fade right>
                <Image
                  alt="CEO"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20595.png?alt=media&token=2c9fc4b9-ff95-4ec7-b1a2-6851602afe6e`}
                />
              </Fade>
            </Wrapper>
          </Wrapper>

          <Image
            margin={`60px 0`}
            display={width < 900 ? `flex` : `none`}
            alt="ceo"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2Fmobile-mm01.png?alt=media&token=e6d65a37-10af-451b-998d-c0de9970f6fe`}
          />

          <Wrapper
            display={width < 900 ? `flex` : `none`}
            color={`#616161`}
            al={`flex-start`}
          >
            <Text fontWeight={`300`}>안녕하십니까?</Text>
            <Text fontWeight={`300`}>주식회사 선진펫의 회장 이상득입니다.</Text>
            <Text fontWeight={`300`} margin={`30px 0 0`}>
              코로나19로 인한 경제침체 속에서 펫마트는 지난해 동종업계 전국 매출
              1위라는 성적과 2020년 반려동물 관련 업종 최초로 "한국 프랜차이즈
              대상"까지 수상하는 영예를 안게 되었습니다.
            </Text>

            <Text fontWeight={`300`} margin={`30px 0 0`}>
              대구에서 시작한 펫 마트는 경북, 부산, 경남, 광주, 전라를 거쳐
              수도권까지 진출하고 있습니다.
            </Text>

            <Text fontWeight={`300`}>
              저희가 동종업계 선두를 유지할 수 있었던 것은 임직원들의 끊임없는
              노력과 혁신, 마진율을 높이기 위한 OEM 공장 설립, 개발과 해외
              직수입, 매입을 통하여 양질의 상품을 더욱 저렴하게 공급할 수 있는
              경쟁력을 갖추었기 때문입니다.
            </Text>

            <Text fontWeight={`300`} margin={`30px 0 0`}>
              반려인들의 변함없는 신뢰와 사랑에 보답하는 길은 더 좋은 상품과
              제공하는 것과 서비스를 더불어 이제 명실상부한 반려동물용품 전문
              기업의 리더로서 기업의 사회적 책임을 성실히 이행하는 책임 경영의
              실천이라고 생각합니다.
            </Text>

            <Text fontWeight={`300`} margin={`30px 0 0`}>
              앞으로 저희 (주)선진펫은 반려동물의 건강과 행복 그리고 편의를 위한
              노력을 멈추지 않을 것이며, 펫마트를 선택해주시는 소상공인과 함께
              성장하는 든든한 파트너로서 힘이 되어드리겠습니다.
            </Text>

            <Text fontWeight={`300`} margin={`30px 0 20px`}>
              감사합니다.
            </Text>
            <Wrapper al={`flex-end`}>
              <Image
                width={`auto`}
                alt="서명"
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%20577.png?alt=media&token=adb30bda-ef26-43bb-a942-4181eee0fec1`}
              />
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      )}

      {currentTab === 1 && (
        <RsWrapper padding={`80px 0`}>
          <Wrapper>
            <CommonSubTitle ref={hisRef}>연혁</CommonSubTitle>
            <LightSpeed>
              <Wrapper display={width < 900 ? `none` : `flex`}>
                <SubjectTitle>
                  반려동물용품 유통분야 전국 매출 1위 (주)선진펫이 지나온
                  발자취입니다.
                </SubjectTitle>
              </Wrapper>
            </LightSpeed>

            <LightSpeed>
              <Wrapper display={width < 900 ? `flex` : `none`}>
                <SubjectTitle>반려동물용품 유통분야 전국 매출 1위</SubjectTitle>
                <SubjectTitle>(주)선진펫이 지나온 발자취입니다.</SubjectTitle>
              </Wrapper>
            </LightSpeed>
          </Wrapper>
          <Wrapper margin={`60px 0 0`}>
            <Image
              alt="연혁"
              src={
                width < 700
                  ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2Fmobile-contents.png?alt=media&token=7d0ac29f-a1e1-4294-b30e-7818e3d72880`
                  : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2Fcontents.png?alt=media&token=2523bd82-d0fb-4aaf-8263-30a2f2d5aa22`
              }
            />
          </Wrapper>
        </RsWrapper>
      )}
    </WholeWrapper>
  );
};

export default withResizeDetector(MM01Presenter);
