import React, { useEffect, useState } from "react";
import {
  WholeWrapper,
  Wrapper,
  Text,
  Image,
  ATag,
  RsWrapper,
} from "../../Components/CommonComponents";
import { Link } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";
import { GET_FOOTER_INFO } from "./LayoutQueries";
import { useQuery } from "@apollo/client";
import Theme from "../../Styles/Theme";
import styled from "styled-components";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";

const TelWrapper = styled(Wrapper)`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  box-shadow: 3px 3px 6px rgb(185, 185, 185);
  background-color: ${(props) => props.theme.white_C};

  & svg {
    font-size: 25px;
  }
`;

const MailWrapper = styled(Wrapper)`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  box-shadow: 3px 3px 6px rgb(185, 185, 185);
  background-color: ${(props) => props.theme.white_C};

  & svg {
    font-size: 18px;
  }
`;

const Footer = ({ width }) => {
  ////////////// - USE STATE - ///////////////

  ////////////// - USE QUERY - ///////////////
  const { data, loading, refetch } = useQuery(GET_FOOTER_INFO);

  return (
    <WholeWrapper
      padding={`50px 0`}
      bgColor={`rgb(34, 34, 34)`}
      color={Theme.white_C}
    >
      <RsWrapper>
        <Wrapper
          al={width < 900 ? `center` : `flex-start`}
          fontWeight={`300`}
          fontSize={`14px`}
        >
          주식회사 선진펫
        </Wrapper>
        <Wrapper
          dr={`row`}
          ju={`space-between`}
          al={`flex-start`}
          fontSize={`14px`}
          display={width < 900 ? `none` : `flex`}
        >
          <Wrapper width={`50%`} margin={`10px 0 0`} al={`flex-start`}>
            <Wrapper al={`flex-start`} dr={`row`} width={`auto`}>
              <Text fontWeight={`300`}>
                주소 :경상북도 청도군 청도읍 송읍길 79 주식회사 선진펫
              </Text>
              <Text fontWeight={`300`} margin={`0 30px`}>
                대표이사 :이권형
              </Text>
              <Text fontWeight={`300`}>대표번호 :053-982-1550</Text>
            </Wrapper>
            <Wrapper
              al={`flex-start`}
              dr={`row`}
              width={`auto`}
              margin={`10px 0 0`}
            >
              <Text fontWeight={`300`}>팩스 :053-986-1545</Text>
              <Text fontWeight={`300`} margin={`0 30px`}>
                통신판매업신고번호 :제2012-대구동구-0113호
              </Text>
            </Wrapper>
            <Wrapper
              al={`flex-start`}
              dr={`row`}
              width={`auto`}
              margin={`10px 0 0`}
            >
              <Text fontWeight={`300`}>사업자등록번호 :502-86-16211</Text>
              <Text margin={`0 5px`}>[사업자정보확인]</Text>
            </Wrapper>
            <Wrapper
              al={`flex-start`}
              dr={`row`}
              width={`auto`}
              margin={`10px 0 0`}
            >
              <Text fontWeight={`300`}>
                Copyright ⓒ 주식회사 선진펫 All rights reserved.
              </Text>
            </Wrapper>
            <Wrapper
              al={`flex-start`}
              dr={`row`}
              width={`auto`}
              margin={`30px 0 0`}
            >
              <Image
                width={`auto`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Fescrow_banner_kcp.png?alt=media&token=3068c5e6-ffef-4460-a2c2-3859eb6fd3b0`}
              />
              <Image
                margin={`0 0 0 40px`}
                width={`auto`}
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo_kftc.png?alt=media&token=3f74a9a4-ae33-4b70-a21f-5fab67d89368`}
              />
            </Wrapper>
          </Wrapper>
          <Wrapper width={`50%`} dr={`row`} ju={`space-between`}>
            <Wrapper width={`auto`}>
              <Text fontWeight={`300`}>창업문의</Text>
              <ATag href="tel:15881684">
                <Text fontSize={`30px`}>1588-1684</Text>
              </ATag>
              <ATag href="mailto:ebajslee@sunjinpet.co.kr">
                <Text fontWeight={`300`}>ebajslee@sunjinpet.co.kr</Text>{" "}
              </ATag>
            </Wrapper>
            <Wrapper width={`auto`}>
              <Text fontWeight={`300`}>서울/수도권 가맹문의</Text>
              <ATag href="tel:15770731">
                <Text fontSize={`30px`}>1577-0731</Text>
              </ATag>
              <ATag href="mailto:vvvkmvvv@sunjinpet.co.kr">
                <Text fontWeight={`300`}>vvvkmvvv@sunjinpet.co.kr</Text>
              </ATag>
            </Wrapper>
            <Wrapper width={`auto`} al={`flex-start`}>
              <Text fontWeight={`300`} margin={`0 0 5px`}>
                평일 : 8:30 - 17:30
              </Text>
              <Text fontWeight={`300`} margin={`0 0 5px`}>
                점심시간: 12:30 - 13:30
              </Text>
              <Text fontWeight={`300`} margin={`0 0 5px`}>
                토,일/공휴일은 휴무
              </Text>
              <Text fontWeight={`300`}>E-Mail : sunjinpf@naver.com</Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper display={width < 900 ? `flex` : `none`}>
          <Text fontWeight={`300`} margin={`10px 0 0`}>
            주소 :경상북도 청도군 청도읍 송읍길 79 주식회사 선진펫
          </Text>
          <Text fontWeight={`300`} margin={`10px 0 0`}>
            대표이사 :이권형 | 대표번호 :053-982-1550
          </Text>
          <Text fontWeight={`300`} margin={`10px 0 0`}>
            팩스 :053-986-1545 | 통신판매업신고번호 : 502-86-16211
          </Text>
          <Wrapper dr={`row`} width={`auto`} margin={`10px 0 0`}>
            <Text fontWeight={`300`}>사업자등록번호 :502-86-16211</Text>
            <Text margin={`0 5px`}>[사업자정보확인]</Text>
          </Wrapper>
          <Text fontWeight={`300`} margin={`15px 0 0`}>
            Copyright ⓒ 주식회사 선진펫 All rights reserved.
          </Text>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(Footer);
