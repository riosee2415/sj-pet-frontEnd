import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Text,
  Wrapper,
  Image,
  CommonButton,
} from "../Components/CommonComponents";
import Theme from "../Styles/Theme";
import { translate } from "../Components/AnimationCommon";
import { withResizeDetector } from "react-resize-detector";

const FixedWraper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  width: 100%;
  background: ${(props) => props.theme.subTheme_C};
  animation: ${translate} 1s forwards;

  @media (max-width: 900px) {
    height: 55px;
  }
`;

const FixedNav = ({ width }) => {
  return (
    <FixedWraper>
      <Wrapper height={`100%`} dr={`row`}>
        <Image
          alt="로고"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
          width={width < 900 ? `100px` : `200px`}
        />
        <Wrapper
          width={`auto`}
          margin={`0 20px`}
          fontWeight={`800`}
          fontSize={`30px`}
          color={Theme.white_C}
        >
          가맹문의 1588.1684
        </Wrapper>
        <Link to="/contect">
          <CommonButton
            width={width < 900 ? `100px` : `150px`}
            height={width < 900 ? `30px` : `40px`}
            fontSize={width < 900 ? `15px` : `17px`}
          >
            신청하기
          </CommonButton>
        </Link>
      </Wrapper>
    </FixedWraper>
  );
};

export default withResizeDetector(FixedNav);
