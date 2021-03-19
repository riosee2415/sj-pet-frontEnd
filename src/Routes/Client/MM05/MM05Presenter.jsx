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

const Teb = styled(Wrapper)`
  width: 100px;
  padding: 20px 0;
  font-size: 18px;
  color: ${Theme.darkGrey_C};
  border-bottom: 1px solid transparent;
  position: relative;
  cursor: pointer;
  margin: 0 30px;

  &:before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${Theme.basicTheme_C};
  }

  &:hover:before {
    animation: ${fullWidth} 1s forwards;
  }
`;

const MM05Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <SubBanner title={`가맹상담`} />

      <Wrapper borderBottom={`1px solid ${Theme.lightGrey_C}`}>
        <Teb>
          <Text borderRight={`1px solid ${Theme.darkGrey_C}`}>가맹상담</Text>
        </Teb>
      </Wrapper>

      <RsWrapper>
        <CommonSubTitle>가맹상담</CommonSubTitle>

        <Wrapper dr={`row`}>
          <Wrapper margin={`10px 0`} width={`50%`}>
            <Wrapper al={`flex-start`} margin={`0 0 10px`}>
              <Text margin={`10px 0`}>이름</Text>
              <TextInput
                width={`70%`}
                height={`30px`}
                // {...inputName}
              />
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Text margin={`10px 0`}>연락처</Text>
              <TextInput
                width={`70%`}
                height={`30px`}
                // {...inputManager}
              />
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Text margin={`10px 0`}>이메일</Text>
              <Wrapper dr={`row`} ju={`space-between`} width={`70%`}>
                <TextInput
                  width={`33%`}
                  height={`30px`}
                  // {...inputManager}
                />
                &nbsp;@&nbsp;
                <TextInput
                  width={`33%`}
                  height={`30px`}
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
              <Text margin={`10px 0`}>창업희망지역</Text>
              <TextInput
                width={`70%`}
                height={`30px`}
                // {...inputName}
              />
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Text margin={`10px 0`}>예상창업비용</Text>
              <TextInput
                width={`70%`}
                height={`30px`}
                // {...inputManager}
              />
            </Wrapper>

            <Wrapper al={`flex-start`}>
              <Text margin={`10px 0`}>점포보유유무</Text>
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

          <Wrapper margin={`10px 0`} al={`flex-start`}>
            <Text margin={`10px 0`}>문의 내용</Text>
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
