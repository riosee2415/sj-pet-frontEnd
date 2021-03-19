import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import { fullWidth } from "../../../Components/AnimationCommon";

import {
  WholeWrapper,
  CommonSubTitle,
  Wrapper,
  RsWrapper,
  Text,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";

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
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM05Presenter);
