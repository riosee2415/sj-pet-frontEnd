import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  Wrapper,
  RsWrapper,
  Text,
  SpanText,
  CommonSubTitle,
  Image,
  DotTitle,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const Span = styled(SpanText)`
  background-color: ${(props) => props.theme.basicTheme_C};
`;

const MM01Presenter = ({ width }) => {
  useTitle("셈플");

  return (
    <WholeWrapper>
      <Wrapper height={`450px`} bgColor={`#666`}></Wrapper>
      <RsWrapper dr={`row`} ju={`space-between`} padding={`100px 0`}>
        <Wrapper width={width < 900 ? `100%` : `60%`} al={`flex-start`}>
          <Text fontSize={width < 900 ? `18px !important` : `35px`}>
            선진적 반려동물 문화를 선도하는 기업
          </Text>

          <Text margin={`50px 0 0`}>안녕하십니까?</Text>
          <Text>주식회사 선진펫의 회장 이상득입니다.</Text>
          <Text>코로나19로 인한 경제침체 속에서 펫마트는 지난해</Text>
          <Text>
            동종업계 전국 매출 1위라는 성적과 2020년 반려동물 관련 업종 최초로
          </Text>
          <Text>
            <Span>“제21회 한국프랜차이즈 대상 협회장 표창”</Span> 까지 수상하는
            영예를 안게 되었습니다.
          </Text>

          <Text margin={`30px 0`}>
            대구에서 시작한 펫 마트는 경북, 부산, 경남, 광주, 전라를 거쳐
          </Text>
          <Text>수도권까지 진출하고 있습니다.</Text>

          <Text margin={`30px 0`}>
            저희가 동종업계 선두를 유지할 수 있었던 것은 임직원들의 끊임없는
          </Text>
          <Text>
            노력과 혁신, 마진율을 높이기 위한 OEM 공장 설립, 개발과 해외 직수입,
            매입을 통하여
          </Text>
          <Text>
            양질의 상품을 더욱 저렴하게 공급할 수 있는 경쟁력을 갖추었기
            때문입니다.
          </Text>

          <Text margin={`30px 0`}>
            반려인들의 변함없는 신뢰와 사랑에 보답하는 길은 더 좋은 상품과
            서비스를
          </Text>
          <Text>
            제공하는 것과 더불어 이제 명실상부한 반려동물용품 전문 기업의
            리더로서
          </Text>
          <Text>
            기업의 사회적 책임을 성실히 이행하는 책임 경영의 실천이라고
            생각합니다.
          </Text>

          <Text margin={`30px 0`}>
            앞으로 저희 (주)선진펫은 반려동물의 건강과 행복 그리고 편의를 위한
          </Text>
          <Text>
            노력을 멈추지 않을 것이며, 펫마트를 선택해주시는 소상공인과 함께
            성장하는
          </Text>
          <Text>든든한 파트너로서 힘이 되어드리겠습니다.</Text>

          <Text margin={`0 0 30px`}>감사합니다.</Text>
          <Text>
            회장 <SpanText fontSize={`25px`}>이상득</SpanText>
          </Text>
        </Wrapper>
        <Image
          width={width < 900 ? `100%` : `40%`}
          alt="CEO"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM01%2Fabout-01.png?alt=media&token=6832c9e0-94d3-41d2-8198-6b283ec5215f`}
        />
      </RsWrapper>
      <Wrapper padding={`0 0 150px`}>
        <CommonSubTitle>연혁</CommonSubTitle>
        <Text fontSize={`30px`}>
          반려동물용품 유통분야 전국 매출 1위 (주)선진펫이 지나온 발자취입니다.
        </Text>
      </Wrapper>

      <Wrapper fontSize={`45px`}>
        지금 펫마트를 시작해야 하는&nbsp;
        <DotTitle>이유</DotTitle> !
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM01Presenter);
