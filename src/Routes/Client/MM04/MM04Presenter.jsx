import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  CommonSubTitle,
  RsWrapper,
  WholeWrapper,
  Wrapper,
  Image,
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
          가맹절차
        </Wrapper>
        <Wrapper height={`20px`} bgColor={Theme.grey_C} width={`1px`}></Wrapper>
        <Wrapper cursor={`pointer`} width={`150px`} height={`100%`}>
          개설비용
        </Wrapper>
      </Wrapper>
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
        <Wrapper isRelative={true}>
          <Image
            alt="개설비용"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM04%2Fprice.png?alt=media&token=45132959-f351-4ea0-8de9-1e8f4258783d`}
          />
          <Wrapper isAbsolute={true} top={`0`} left={`0`} height={`100%`}>
            <Wrapper
              width={`50%`}
              height={`50%`}
              border={`5px solid ${Theme.subTheme_C}`}
              bgColor={Theme.white_C}
            ></Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM04Presenter);
