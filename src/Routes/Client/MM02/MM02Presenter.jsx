import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  CommonSubTitle,
  RsWrapper,
  SpanText,
  Text,
  WholeWrapper,
  Wrapper,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";
import InteriorSlider from "../../../Components/slider/InteriorSlider";
import { translate10Fixed } from "../../../Components/AnimationCommon";

const Point = styled(SpanText)`
  color: ${Theme.subTheme_C};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Theme.basicTheme_C};
    top: -36%;
    left: 50%;
  }
`;

const MM02Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <SubBanner title={`인테리어`} />
      <RsWrapper>
        <CommonSubTitle>매장 인테리어</CommonSubTitle>
        <Text fontSize={`30px`}>
          불필요한것은 빼고
          <Point color={Theme.lightBasicTheme_c}> 꼭</Point>
          필요한 것만 담았습니다.
        </Text>

        <Wrapper margin={`50px 0 100px`}>
          <InteriorSlider />
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM02Presenter);
