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

const PointWrapper = styled(Wrapper)`
  width: auto;
  animation: ${translate10Fixed} 1.5s forwards;
`;

const Point = styled(SpanText)`
  color: ${Theme.subTheme_C};
  position: relative;
  font-weight: 800;
  font-size: 40px;

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Theme.basicTheme_C};
    top: -36%;
    left: 50%;
    margin: 0 0 0 -5px;
    transform: translateY(-10px);
    transition: 1.5s;

    @media (max-width: 700px) {
      width: 7px;
      height: 7px;
      margin: 0 0 0 -3px;
    }
  }

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

const MM02Presenter = ({ width }) => {
  useTitle("인테리어 | 펫마트");

  return (
    <WholeWrapper>
      <SubBanner title={`인테리어`} />
      <RsWrapper>
        <CommonSubTitle>매장 인테리어</CommonSubTitle>
        <Wrapper fontSize={`25px`} dr={`row`}>
          불필요한것은 빼고
          <PointWrapper>
            <Point color={Theme.lightBasicTheme_c}>&nbsp;꼭&nbsp;</Point>
          </PointWrapper>
          필요한 것만 담았습니다.
        </Wrapper>

        <Wrapper margin={`50px 0 100px`}>
          <InteriorSlider />
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM02Presenter);
