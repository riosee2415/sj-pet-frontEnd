import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import { fullWidth } from "../../../Components/AnimationCommon";

import {
  WholeWrapper,
  CommonSubTitle,
  Wrapper,
  RsWrapper,
  Text,
  TextInput,
  Combo,
  ComboOption,
  CommonButton,
  TextArea,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const Board = withSplitting(() => import("../../../Components/faq/Board"));

const Fade = withSplitting(() => import("react-reveal/Fade"));

const Title = styled(Wrapper)`
  width: auto;
  height: auto;
  font-size: 18px;
  position: relative;
  margin: 0 0 20px;
  padding-left: 40px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 2px;
    background: ${(props) => props.theme.subTheme_C};
    /* bottom: -25%;
    left: 0;
    width: 150%;
    height: 15px;
    border-radius: 10px;
    background-color: ${Theme.basicTheme_C};
    z-index: -1; */
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const MM05Presenter = ({
  width,
  //
  inputName,
  inputMobile,
  inputEmail,
  inputEmailDomain,
  selectEmailDomain,
  inputLoc,
  inputMayPay,
  inputIsStore,
  inputDesc,
  isAgree,
  setIsAgree,
  createRequestHandler,
  //
  inputSearch,
  pages,
  currentPage,
  actionFaqView,
  currentType,
  faqDatum,
  toggleFaqAnswer,
  changeFaqTypeHandler,
  prevAndNextPageChangeHandler,
  changePageHandler,
  searchHandler,
  scrollMoveHandler,
}) => {
  useTitle("가맹상담 | 펫마트");

  return (
    <WholeWrapper>
      <SubBanner title={`가맹상담`} />

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
        >
          가맹상담
        </Wrapper>
        <Wrapper height={`20px`} bgColor={Theme.grey_C} width={`1px`}></Wrapper>
        <Wrapper cursor={`pointer`} width={`150px`} height={`100%`}>
          가맹FAQ
        </Wrapper>
      </Wrapper>

      <RsWrapper>
        <CommonSubTitle>가맹상담</CommonSubTitle>
        <Wrapper>
          <Fade left>
            <Wrapper dr={`row`} ju={`space-around`}>
              <Wrapper
                al={width < 700 ? `center` : `flex-start`}
                width={width < 700 ? `100%` : `40%`}
              >
                <Wrapper al={`flex-start`} width={`100%`}>
                  <Title margin={`10px 0`}>이름</Title>
                </Wrapper>
                <TextInput width={`100%`} {...inputName} />
              </Wrapper>

              <Wrapper
                al={width < 700 ? `center` : `flex-start`}
                margin={`30px 0`}
                width={width < 700 ? `100%` : `40%`}
              >
                <Wrapper al={`flex-start`} width={`100%`}>
                  <Title margin={`10px 0`}>창업희망지역</Title>
                </Wrapper>
                <TextInput width={`100%`} {...inputLoc} />
              </Wrapper>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper>
          <Fade right>
            <Wrapper dr={`row`} ju={`space-around`}>
              <Wrapper
                al={width < 700 ? `center` : `flex-start`}
                width={width < 700 ? `100%` : `40%`}
              >
                <Wrapper al={`flex-start`} width={`100%`}>
                  <Title margin={`10px 0`}>연락처</Title>
                </Wrapper>
                <TextInput width={`100%`} {...inputMobile} />
              </Wrapper>
              <Wrapper
                al={width < 700 ? `center` : `flex-start`}
                width={width < 700 ? `100%` : `40%`}
                margin={width < 700 ? `30px 0` : `0`}
              >
                <Wrapper width={`100%`} dr={`row`} ju={`flex-start`}>
                  <Wrapper al={`flex-start`} width={`auto`}>
                    <Title margin={`10px 0`}>예상창업비용</Title>
                  </Wrapper>
                  <Text
                    margin={`0 0 20px 10px`}
                    fontSize={`13px`}
                    color={Theme.darkGrey_C}
                  >
                    (숫자만 입력)
                  </Text>
                </Wrapper>
                <Wrapper isRelative={true} width={`100%`}>
                  <TextInput width={`100%`} {...inputMayPay} />
                  <Wrapper
                    width={`auto`}
                    isAbsolute={true}
                    top={`50%`}
                    right={`0`}
                    color={Theme.darkGrey_C}
                    margin={`-7px 10px 0`}
                  >
                    만원
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper>
          <Fade left>
            <Wrapper dr={`row`} ju={`space-around`}>
              <Wrapper
                al={width < 700 ? `center` : `flex-start`}
                width={width < 700 ? `100%` : `40%`}
                margin={width < 700 ? `0` : `30px 0`}
              >
                <Wrapper al={`flex-start`} width={`100%`}>
                  <Title margin={`10px 0`}>이메일</Title>
                </Wrapper>
                <Wrapper dr={`row`} ju={`space-between`} width={`100%`}>
                  <TextInput
                    width={width < 1100 ? `30%` : `33%`}
                    {...inputEmail}
                  />
                  &nbsp;@&nbsp;
                  <TextInput
                    width={width < 1100 ? `30%` : `33%`}
                    readOnly={selectEmailDomain.value !== "직접 입력"}
                    {...inputEmailDomain}
                  />
                  <Combo width={`25%`} {...selectEmailDomain}>
                    <ComboOption value={`선택`}>선택</ComboOption>
                    <ComboOption value={`naver.com`}>naver.com</ComboOption>
                    <ComboOption value={`gmail.com`}>gmail.com</ComboOption>
                    <ComboOption value={`hanmail.net`}>hanmail.net</ComboOption>
                    <ComboOption value={`직접 입력`}>직접 입력</ComboOption>
                  </Combo>
                </Wrapper>
              </Wrapper>

              <Wrapper
                al={width < 700 ? `center` : `flex-start`}
                width={width < 700 ? `100%` : `40%`}
                margin={width < 700 ? `30px 0` : `0`}
              >
                <Wrapper al={`flex-start`} width={`100%`}>
                  <Title margin={`10px 0`}>점포보유유무</Title>
                </Wrapper>
                <Wrapper dr={`row`} ju={`flex-start`} width={`100%`}>
                  <CommonButton
                    width={width < 800 ? `100px` : `120px`}
                    height={width < 800 ? `35px` : `40px`}
                    kindOf={!inputIsStore.value ? `subTheme` : `subTheme2`}
                    onClick={() => inputIsStore.setValue(false)}
                  >
                    없음
                  </CommonButton>
                  <CommonButton
                    width={width < 800 ? `100px` : `120px`}
                    height={width < 800 ? `35px` : `40px`}
                    margin={`0 10px`}
                    kindOf={inputIsStore.value ? `subTheme` : `subTheme2`}
                    onClick={() => inputIsStore.setValue(true)}
                  >
                    있음
                  </CommonButton>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper width={width < 700 ? `100%` : `90%`}>
          <Fade right>
            <Wrapper
              margin={width < 700 ? `0 0 10px` : `30px 0`}
              al={width < 700 ? `center` : `flex-start`}
            >
              <Wrapper al={`flex-start`} width={width < 700 ? `100%` : `70%`}>
                <Title margin={`10px 0`}>문의 내용</Title>
              </Wrapper>
              <TextArea {...inputDesc} width={`100%`} height={`250px`} />
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper width={width < 700 ? `100%` : `90%`}>
          <Fade left>
            <Wrapper
              cursor={`pointer`}
              dr={`row`}
              padding={`10px 20px`}
              margin={`10px 0`}
              ju={`space-between`}
              border={`1px solid ${Theme.grey_C}`}
            >
              <Wrapper
                width={`auto`}
                dr={`row`}
                onClick={() => setIsAgree(!isAgree)}
              >
                {isAgree ? (
                  <Wrapper
                    width={width < 700 ? `20px` : `25px`}
                    height={width < 700 ? `20px` : `25px`}
                    radius={`50%`}
                    bgColor={Theme.subTheme_C}
                    margin={`0 10px 0 0`}
                  >
                    <FiCheck color={Theme.white_C} />
                  </Wrapper>
                ) : (
                  <Wrapper
                    width={width < 700 ? `20px` : `25px`}
                    height={width < 700 ? `20px` : `25px`}
                    radius={`50%`}
                    bgColor={Theme.white_C}
                    margin={`0 10px 0 0`}
                    border={`1px solid ${Theme.subTheme_C}`}
                  >
                    <FiCheck color={Theme.subTheme_C} />
                  </Wrapper>
                )}

                <Text display={width < 700 ? `none` : `flex`}>
                  개인정보취급방침을 읽었으며 이에 동의합니다.
                </Text>
                <Wrapper
                  width={`auto`}
                  display={width < 700 ? `flex` : `none`}
                  al={`flex-start`}
                >
                  <Text>개인정보취급방침을 읽었으며</Text>
                  <Text>이에 동의합니다.</Text>
                </Wrapper>
              </Wrapper>
              <CommonButton
                width={width < 700 ? `80px` : `100px`}
                kindOf={`subTheme2`}
                fontSize={width < 700 ? `11px` : `24ㅔㅌ`}
              >
                자세히 보기
              </CommonButton>
            </Wrapper>
          </Fade>
        </Wrapper>

        <Wrapper width={`150px`}>
          <Fade bottom>
            <CommonButton
              width={`100%`}
              height={`40px`}
              kindOf={`subTheme`}
              margin={`50px 0 100px`}
              onClick={createRequestHandler}
            >
              신청하기
            </CommonButton>
          </Fade>
        </Wrapper>

        <Wrapper>
          <Board
            inputSearch={inputSearch}
            pages={pages}
            currentPage={currentPage}
            currentType={currentType}
            actionFaqView={actionFaqView}
            //
            faqDatum={faqDatum}
            //
            toggleFaqAnswer={toggleFaqAnswer}
            changeFaqTypeHandler={changeFaqTypeHandler}
            prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
            changePageHandler={changePageHandler}
            searchHandler={searchHandler}
          />
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM05Presenter);
