import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { Wrapper } from "./CommonComponents";
import Fade from "react-reveal/Fade";

const CustomWrapper = styled(Wrapper)`
  .react-reveal {
    width: ${(props) => props.fadeWidth || `auto`};
    backdrop-filter: ${(props) => (props.isFilter ? `blur(5px)` : ``)};
  }
`;

const CustomFade = ({ option, type, children }) => {
  return (
    <CustomWrapper {...option}>
      <Fade {...type}>{children}</Fade>
    </CustomWrapper>
  );
};

export default withResizeDetector(withRouter(CustomFade));
