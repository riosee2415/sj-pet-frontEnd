import React, { useEffect, useState } from "react";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
  Text,
  Image,
} from "../../Components/CommonComponents";
import { Link } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";
import { GET_FOOTER_INFO } from "./LayoutQueries";
import { useQuery } from "@apollo/client";
import Theme from "../../Styles/Theme";

const Footer = ({ width }) => {
  ////////////// - USE STATE - ///////////////

  ////////////// - USE QUERY - ///////////////
  const { data, loading, refetch } = useQuery(GET_FOOTER_INFO);

  return (
    <WholeWrapper
      padding={`100px 0px`}
      bgColor={Theme.darkGrey_C}
      color={Theme.white_C}
    >
      <RsWrapper dr={`row`} ju={`space-around`}>
        <Image
          width={`250px`}
          margin={width < 900 && `0px 0px 20px`}
          alt="logo"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/EBONE%2Fassets%2Fimages%2Flogo%2Flogo-1.png?alt=media&token=4070322e-aa10-4d38-b115-d07e0bb6d11ehttps://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/EBONE%2Fassets%2Fimages%2Flogo%2Flogo-1.png?alt=media&token=4070322e-aa10-4d38-b115-d07e0bb6d11e`}
        />
        <Wrapper
          dr={`row`}
          width={`auto`}
          ju={width < 700 ? `center` : `flex-start`}
        >
          <Wrapper al={width < 700 ? `center` : `flex-start`} width={`auto`}>
            <Text margin={`0px 0px 15px`}>
              상호 {data && data.getFooterInfo.businessName}
            </Text>
            <Text margin={width < 700 && `0px 0px 15px`}>
              대표 {data && data.getFooterInfo.cheifName}
            </Text>
          </Wrapper>
          <Wrapper
            al={width < 700 ? `center` : `flex-start`}
            width={`auto`}
            margin={`0px 35px`}
          >
            <Text margin={`0px 0px 15px`}>
              사업자 등록번호 {data && data.getFooterInfo.businessNumber}
            </Text>
            <Text margin={width < 700 && `0px 0px 15px`}>
              개인정보책임관리자 {data && data.getFooterInfo.privacyOfficer}
            </Text>
          </Wrapper>
          <Wrapper al={width < 700 ? `center` : `flex-start`} width={`auto`}>
            <Text margin={`0px 0px 15px`} display={`flex`} dr={`row`}>
              <a href={`mailto:${data && data.getFooterInfo.email}`}>
                E. {data && data.getFooterInfo.email}
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="tel:">C S. {data && data.getFooterInfo.tel} </a>
            </Text>
            <Text>A. {data && data.getFooterInfo.address}</Text>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(Footer);
