import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  CommonSubTitle,
  RsWrapper,
  WholeWrapper,
  Wrapper,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";

const MM04Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <SubBanner title={`가맹절차`} />
      <CommonSubTitle>가맹절차</CommonSubTitle>
      <RsWrapper>
        <Wrapper dr={`row`}>
          <Wrapper
            width={`calc(100% / 5 - 10px)`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`calc(100% / 5 - 10px)`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`calc(100% / 5 - 10px)`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`calc(100% / 5 - 10px)`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`calc(100% / 5 - 10px)`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
        </Wrapper>
        <Wrapper dr={`row`} padding={`50px 0 0`}>
          <Wrapper
            width={`260px`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`260px`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`260px`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
          <Wrapper
            width={`260px`}
            height={`300px`}
            bgColor={`#666`}
            margin={`5px`}
          ></Wrapper>
        </Wrapper>
        <CommonSubTitle>개설비용</CommonSubTitle>
        <Wrapper height={`900px`} bgColor={`#eee`}>
          <Wrapper
            width={`50%`}
            height={`700px`}
            border={`5px solid ${Theme.subTheme_C}`}
          ></Wrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM04Presenter);
