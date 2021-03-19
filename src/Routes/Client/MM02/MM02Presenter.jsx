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

const MM02Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <SubBanner title={`인테리어`} />
      <RsWrapper>
        <CommonSubTitle>매장 인테리어</CommonSubTitle>
        <Text fontSize={`30px`}>
          불필요한것은 빼고
          <SpanText color={Theme.lightBasicTheme_c}> 꼭</SpanText> 필요한 것만
          담았습니다.
        </Text>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM02Presenter);
