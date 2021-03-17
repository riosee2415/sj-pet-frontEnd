import React, { useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
import { WholeWrapper } from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";

const Popup = withSplitting(() =>
  import("../../../Components/popup/Popup.jsx")
);

const MainSlider = withSplitting(() =>
  import("../../../Components/slider/MainSlider.jsx")
);

const MM00Presenter = ({
  width,
  //
  mobileBannerData,
  mainBannerData,
}) => {
  return (
    <WholeWrapper>
      <MainSlider
        mainBannerData={width < 700 ? mobileBannerData : mainBannerData}
      />
      <h1>Hello 4LEAF</h1>
      <Popup />
    </WholeWrapper>
  );
};

export default withResizeDetector(MM00Presenter);
