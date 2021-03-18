import React, { useEffect, useState } from "react";
import {
  WholeWrapper,
  Wrapper,
  Text,
  Image,
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
  box-shadow: 0 3px 6px ${(props) => props.theme.grey_C};
  background-color: #fff;

  & svg {
    font-size: 25px;
  }
`;

const MailWrapper = styled(Wrapper)`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  box-shadow: 0 3px 6px ${(props) => props.theme.grey_C};
  background-color: #fff;

  & svg {
    font-size: 18px;
  }
`;

const Footer = ({ width }) => {
  ////////////// - USE STATE - ///////////////

  ////////////// - USE QUERY - ///////////////
  const { data, loading, refetch } = useQuery(GET_FOOTER_INFO);

  return (
    <WholeWrapper padding={`40px`} bgColor={Theme.grey_C} color={Theme.black_C}>
      <Wrapper dr={`row`} ju={width < 900 ? `center` : `flex-start`}>
        <Wrapper width={`auto`} al={width < 900 ? `center` : `flex-start`}>
          <Image
            width={width < 900 ? `200px` : `250px`}
            margin={width < `0 30px 0 0`}
            alt="logo"
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
          />
        </Wrapper>

        <Wrapper
          width={`calc(100% - 250px)`}
          dr={`row`}
          ju={width < 900 ? `center` : `space-between`}
        >
          <Wrapper
            dr={width < 900 ? `column` : `row`}
            width={width < 1100 ? `100%` : `auto`}
          >
            <Wrapper al={width < 900 ? `center` : `flex-start`} width={`auto`}>
              <Text margin={width < 900 && `10px 0 0`}>
                주식회사 선진펫{data && data.getFooterInfo.businessName}
              </Text>
              <Text margin={`10px 0`}>
                주소 {data && data.getFooterInfo.address}
              </Text>
              <Text>Copyright (c) 선진펫. All Rights Reserved</Text>
            </Wrapper>
            <Wrapper
              al={width < 700 ? `center` : `flex-start`}
              width={`auto`}
              margin={width < 900 ? `10px 0 0` : `0px 0px 0px 35px`}
            >
              <Text>평일 : 08:30 ~ 17:30</Text>
              <Text margin={`10px 0`}>점심시간 : 12:30 ~ 13:30</Text>
              <Text>토,일/공휴일은 휴무</Text>
            </Wrapper>
          </Wrapper>

          <Wrapper
            dr={width < 900 ? `column` : `row`}
            width={width < 1100 ? `100%` : `auto`}
            padding={width < 1100 && `30px 0 0`}
            al={width < 1100 && `center`}
          >
            <Wrapper width={`auto`} margin={width < 900 ? `0` : `0 0 0 50px`}>
              <Text
                fontSize={width < 900 ? `16px !important` : `18px`}
                fontWeight={`700`}
              >
                펫마트 가맹문의
              </Text>

              <Wrapper ju={`flex-start`} dr={`row`} padding={`10px 0`}>
                <Wrapper width={`50px`} margin={`0 10px 0 0`}>
                  <TelWrapper>
                    <BiPhoneCall />
                  </TelWrapper>
                </Wrapper>
                <a href="tel:15881684">
                  <Text
                    al={`flex-start`}
                    fontSize={width < 900 ? `20px !important` : `25px`}
                    fontWeight={`700`}
                  >
                    1588-1684
                  </Text>
                </a>
              </Wrapper>
              <Wrapper ju={`flex-start`} dr={`row`}>
                <Wrapper width={`50px`} margin={`0 10px 0 0`}>
                  <MailWrapper>
                    <BiMailSend />
                  </MailWrapper>
                </Wrapper>
                <a href={`mailto:ebajslee@sunjinpet.co.kr`}>
                  <Text al={`flex-start`} color={`#868686`}>
                    ebajslee@sunjinpet.co.kr
                  </Text>
                </a>
              </Wrapper>
            </Wrapper>

            <Wrapper
              width={`auto`}
              margin={width < 900 ? `30px 0 0 35px` : `0 0 0 50px`}
            >
              <Text
                fontSize={width < 900 ? `16px !important` : `18px`}
                fontWeight={`700`}
              >
                수도권/경기창업문의
              </Text>

              <Wrapper dr={`row`} ju={`flex-start`} padding={`10px 0`}>
                <Wrapper width={`50px`} margin={`0 10px 0 0`}>
                  <TelWrapper>
                    <BiPhoneCall />
                  </TelWrapper>
                </Wrapper>
                <a href="tel:15770731">
                  <Text
                    fontSize={width < 900 ? `20px !important` : `25px`}
                    fontWeight={`700`}
                  >
                    1577-0731
                  </Text>
                </a>
              </Wrapper>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <Wrapper width={`50px`} margin={`0 10px 0 0`}>
                  <MailWrapper>
                    <BiMailSend />
                  </MailWrapper>
                </Wrapper>
                <a href={`mailto:vvvkmvvv@sunjinpet.co.kr`}>
                  <Text color={`#868686`}>vvvkmvvv@sunjinpet.co.kr</Text>
                </a>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(Footer);
