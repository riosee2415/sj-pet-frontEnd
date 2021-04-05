import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  CommonSubTitle,
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Image,
  Text,
  ATag,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";
const Fade = withSplitting(() => import("react-reveal/Fade"));

const BoxWrapper = styled(Wrapper)`
  width: calc(100% / 5);
  margin: 0 0 50px;

  @media (max-width: 1200px) {
    width: calc(100% / 4);
  }

  @media (max-width: 1100px) {
    width: calc(100% / 3);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Step = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.subTheme_C};
  margin-left: -20px;

  @media (max-width: 900px) {
    font-size: 25px !important;
  }
`;

const StepTitle = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  width: auto;
  position: relative;
  padding: 10px 0;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.subTheme_C};
    margin-bottom: 5px;
  }
`;

const MM04Presenter = ({
  width,
  //
  stepRef,
  payRef,
  //
  scrollMoveHandler,
}) => {
  useTitle("가맹절차 | 펫마트");

  return (
    <WholeWrapper>
      <SubBanner title={`가맹절차`} />
      <Wrapper
        dr={`row`}
        height={`70px`}
        borderBottom={`1px solid ${Theme.grey_C}`}
      >
        <Wrapper
          width={`150px`}
          height={`100%`}
          cursor={`pointer`}
          borderBottom={`2px solid ${Theme.basicTheme_C}`}
          onClick={() => scrollMoveHandler("가맹절차")}
        >
          가맹절차
        </Wrapper>
        <Wrapper height={`20px`} bgColor={Theme.grey_C} width={`1px`}></Wrapper>
        <Wrapper
          cursor={`pointer`}
          width={`150px`}
          height={`100%`}
          onClick={() => scrollMoveHandler("개설비용")}
        >
          개설비용
        </Wrapper>
      </Wrapper>
      <CommonSubTitle ref={stepRef}>가맹절차</CommonSubTitle>

      <RsWrapper padding={`0 0 100px`}>
        <Fade bottom>
          <Wrapper dr={`row`}>
            <BoxWrapper>
              <Wrapper dr={`row`}>
                <Wrapper width={`auto`} al={`flex-start`}>
                  <Image
                    width={`140px`}
                    alt="step"
                    margin={`0 0 -1px 0`}
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber01.png?alt=media&token=8b3fb94f-2ddd-4fd9-9ca8-8e85fd634227`}
                  />
                </Wrapper>
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  alt="step1"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-01.png?alt=media&token=f28f0185-f64f-4dc8-aff5-8020f16639f9`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>가맹희망자 상담</StepTitle>
                  <Text>가맹점개설 적합여부</Text>
                  <Text>운용능력, 기타사항</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>

            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step2"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber02.png?alt=media&token=891db61f-3090-4333-8cf6-c50cbbb86fa7`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  alt="step2"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-02.png?alt=media&token=63099004-c70a-4316-898f-739dc742daf8`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>입지,상권조사</StepTitle>
                  <Text>상권분석 프로그램을 이용</Text>
                  <Text>입점후보지 확정</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step3"
                  margin={`0 0 -2px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber03.png?alt=media&token=9a972a7a-4738-48b5-8335-efba9158dd6c`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  alt="step3"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-03.png?alt=media&token=baeec8a1-eb61-4652-a562-bc3e5e0ca672`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>현장실측,도면협의</StepTitle>
                  <Text>현장실측 및 도면협의</Text>
                  <Text>layout확정</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step4"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber04.png?alt=media&token=718e81dd-686d-48ba-bf42-0c4f9a93db2e`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  alt="step4"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-04.png?alt=media&token=12988e0e-48fa-45b5-a616-0b385979d6b7`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>가맹계약,개설일정</StepTitle>
                  <Text>가맹계약서 체결</Text>
                  <Text>개설일정 확정</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step5"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber05.png?alt=media&token=6366a7bf-a10a-4182-8228-ec637998c046`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  width={`120px`}
                  alt="step5"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-05.png?alt=media&token=1cb8f1e4-4fb9-4810-948b-05723aed7c6c`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>매장내,외부 시공</StepTitle>
                  <Text>진열장설치,간판설치</Text>
                  <Text>타운터설치 기타설치</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step6"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber06.png?alt=media&token=b268e6c1-24ae-4e48-9c1a-f2e2d8b86060`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  alt="step6"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-01.png?alt=media&token=6cdbe410-621d-42e2-a5f0-747795491def`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>가맹점 교육</StepTitle>
                  <Text>가맹계약서 체결</Text>
                  <Text>개설일정확정</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step7"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber07.png?alt=media&token=dcf914e4-ddeb-43fe-8ec9-ab9ef80ae3de`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  alt="step7"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-07.png?alt=media&token=8067f50e-83fa-49b3-89d3-397db1dd855e`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>상품진열</StepTitle>
                  <Text>초도상품배송</Text>
                  <Text>코너별 제품 진열</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step8"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber08.png?alt=media&token=272141a9-31e4-4efa-8698-4419826d388a`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  width={`120px`}
                  alt="step8"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-08.png?alt=media&token=a532c41a-0c0c-40d9-9504-a18e56fc54bc`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>OPEN준비</StepTitle>
                  <Text>최종사항 점검완료 확인</Text>
                  <Text>가오픈실시</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
            <BoxWrapper margin={`0 0 50px`}>
              <Wrapper dr={`row`}>
                <Image
                  width={`140px`}
                  alt="step9"
                  margin={`0 0 -1px 0`}
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Ficon%2Fnumber09.png?alt=media&token=9c8e9dad-cb60-4261-90ec-5697a2a884aa`}
                />
                <Step>step</Step>
              </Wrapper>
              <Wrapper
                width={`220px`}
                height={`220px`}
                border={`2px solid ${Theme.subTheme_C}`}
              >
                <Image
                  width={`150px`}
                  alt="step9"
                  src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fstep-09.png?alt=media&token=2cb23144-47cb-49ec-9663-282d54fb0832`}
                />
              </Wrapper>
              <Fade bottom>
                <Wrapper>
                  <StepTitle>OPEN 및 관리</StepTitle>
                  <Text>오픈개점행사 지속적인</Text>
                  <Text>점포현황체크 및 S/V관리</Text>
                </Wrapper>
              </Fade>
            </BoxWrapper>
          </Wrapper>
        </Fade>

        <CommonSubTitle ref={payRef}>개설비용</CommonSubTitle>
        <Wrapper isRelative={true} width={width < 900 ? `100%` : `80%`}>
          <Image
            alt="개설비용"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fprice.png?alt=media&token=45132959-f351-4ea0-8de9-1e8f4258783d`}
          />
          <Wrapper isAbsolute={true} top={`0`} left={`0`} height={`100%`}>
            <Wrapper
              width={width < 900 ? `80%` : `55%`}
              height={width < 900 ? `80%` : `55%`}
              border={`5px solid ${Theme.subTheme_C}`}
              bgColor={Theme.white_C}
              padding={`20px`}
              ju={`space-around`}
            >
              <Fade bottom>
                <Wrapper>
                  <Image
                    width={`40%`}
                    margin={`0 0 20px`}
                    alt="logo"
                    src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
                  />
                  <Text
                    fontSize={
                      width < 1100
                        ? width < 900
                          ? `13px !important`
                          : `16px`
                        : `18px`
                    }
                  >
                    펫마트는 상권별 개설비용이 상이하므로
                  </Text>
                  <Text
                    fontSize={
                      width < 1100
                        ? width < 900
                          ? `13px !important`
                          : `16px`
                        : `18px`
                    }
                  >
                    본사로 문의주시면 보다 저렴한 개설비용을 안내해드리겠습니다.
                  </Text>
                </Wrapper>
              </Fade>
              <Fade bottom>
                <Wrapper>
                  <ATag href="tel:15881684">
                    <Text
                      fontSize={
                        width < 1100
                          ? width < 900
                            ? `20px !importATagnt`
                            : `25px`
                          : `40px`
                      }
                    >
                      문의전화 1588-1684
                    </Text>
                  </ATag>
                </Wrapper>
              </Fade>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM04Presenter);
