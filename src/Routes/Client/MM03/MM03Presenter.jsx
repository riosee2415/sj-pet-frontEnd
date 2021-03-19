import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  CommonSubTitle,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const MM03Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <CommonSubTitle>SELECT STORE NAME</CommonSubTitle>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM03Presenter);
