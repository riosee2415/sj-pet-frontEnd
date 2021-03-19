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

const Title = styled(Wrapper)`
  width: auto;
  height: auto;
  font-size: 18px;
  position: relative;
  margin: 0 0 20px;

  &:before {
    content: "";
    position: absolute;
    bottom: -25%;
    left: 0;
    width: 150%;
    height: 15px;
    border-radius: 10px;
    background-color: ${Theme.basicTheme_C};
    z-index: -1;
  }
`;

const MM05Presenter = ({ width }) => {
  useTitle("셈플");

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

        <Wrapper dr={`row`} ju={`space-around`}>
          <Wrapper margin={`10px 0`} width={`50%`}>
            <Wrapper al={`flex-start`} margin={`0 0 10px`}>
              <Title margin={`10px 0`}>이름</Title>
              <TextInput
                width={`70%`}

                // {...inputName}
              />
            </Wrapper>

            <Wrapper al={`flex-start`} margin={`40px 0`}>
              <Title margin={`10px 0`}>연락처</Title>
              <TextInput
                width={`70%`}

                // {...inputManager}
              />
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Title margin={`10px 0`}>이메일</Title>
              <Wrapper dr={`row`} ju={`space-between`} width={`70%`}>
                <TextInput
                  width={`33%`}

                  // {...inputManager}
                />
                &nbsp;@&nbsp;
                <TextInput
                  width={`33%`}

                  // {...inputManager}
                />
                <Combo width={`25%`}>
                  <ComboOption value={`-`}>-</ComboOption>
                  <ComboOption value={`naver.com`}>naver.com</ComboOption>
                  <ComboOption value={`gmail.com`}>gmail.com</ComboOption>
                  <ComboOption value={`hanmail.net`}>hanmail.net</ComboOption>
                  <ComboOption value={`직접 입력`}>직접 입력</ComboOption>
                </Combo>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper margin={`10px 0`} width={`50%`}>
            <Wrapper al={`flex-start`} margin={`0 0 10px`}>
              <Title margin={`10px 0`}>창업희망지역</Title>
              <TextInput
                width={`70%`}

                // {...inputName}
              />
            </Wrapper>

            <Wrapper al={`flex-start`} margin={`40px 0`}>
              <Title margin={`10px 0`}>예상창업비용</Title>
              <TextInput
                width={`70%`}

                // {...inputManager}
              />
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Title margin={`10px 0`}>점포보유유무</Title>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <CommonButton width={`60px`} height={`30px`}>
                  없음
                </CommonButton>
                <CommonButton width={`60px`} height={`30px`} margin={`0 10px`}>
                  있음
                </CommonButton>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper margin={`10px 0`} al={`flex-start`} margin={`40px 0`}>
            <Title margin={`10px 0`}>문의 내용</Title>
            <TextArea width={`100%`} height={`250px`} />
          </Wrapper>

          <Wrapper
            dr={`row`}
            padding={`10px 20px`}
            margin={`10px 0`}
            ju={`space-between`}
            border={`1px solid ${Theme.black_C}`}
          >
            <Wrapper width={`auto`} dr={`row`}>
              <Text display={`flex`} ju={`center`} margin={`0 15px `}>
                <FaRegCheckCircle />
              </Text>
              <Text>개인정보취급방침을 읽었으며 이에 동의합니다.</Text>
            </Wrapper>
            <CommonButton width={`100px`}>자세히 보기</CommonButton>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM05Presenter);
