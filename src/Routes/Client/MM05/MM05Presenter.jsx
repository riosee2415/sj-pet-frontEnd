import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import { fullWidth } from "../../../Components/AnimationCommon";

import {
  WholeWrapper,
  CommonSubTitle,
  Wrapper,
  RsWrapper,
  Text,
  TextInput,
  Combo,
  ComboOption,
  CommonButton,
  TextArea,
  SubjectTitle,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import SubBanner from "../../../Components/SubBanner";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Board = withSplitting(() => import("../../../Components/faq/Board"));

const NoticeBoard = withSplitting(() =>
  import("../../../Components/notice/Board")
);

const Fade = withSplitting(() => import("react-reveal/Fade"));
const LightSpeed = withSplitting(() => import("react-reveal/LightSpeed"));

const Title = styled(Wrapper)`
  width: auto;
  height: auto;
  font-size: 18px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const MM05Presenter = ({
  width,
  //
  conRef,
  faqRef,
  //
  inputName,
  inputMobile,
  inputEmail,
  inputLoc,
  inputMayPay,
  inputIsStore,
  inputDesc,
  isAgree,
  setIsAgree,
  isToggle,
  setIsToggle,
  currentTab,
  setCurrentTab,
  //
  createRequestHandler,
  //
  inputSearch,
  pages,
  currentPage,
  actionFaqView,
  currentType,
  faqDatum,
  pData,
  toggleFaqAnswer,
  //
  changeFaqTypeHandler,
  prevAndNextPageChangeHandler,
  firstPageChangeHandler,
  endPageChangeHandler,
  changePageHandler,
  searchHandler,
  scrollMoveHandler,
  //
  currentList,
  limit,
  sortValue,
  //
  noticeDatum,
  pageCnt,
  //
  moveLinkHandler,
}) => {
  useTitle("가맹상담 / FAQ | 펫마트");

  return (
    <WholeWrapper>
      <SubBanner
        src={
          width < 800
            ? `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM05%2Fsub_title-mm05-m.png?alt=media&token=e978d18d-85e4-4a8c-9019-c4110f179bef`
            : `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2FMM05%2Fmm05.png?alt=media&token=d3d3cdf9-7f91-49b1-ae41-18bae14d6323`
        }
        title={`가맹상담 / FAQ`}
      />
      <Wrapper
        dr={`row`}
        height={`70px`}
        borderBottom={`1px solid ${Theme.grey_C}`}
      >
        <Wrapper
          width={`150px`}
          height={`100%`}
          cursor={`pointer`}
          borderBottom={currentTab === 0 && `2px solid ${Theme.basicTheme_C}`}
          onClick={() => setCurrentTab(0)}
        >
          가맹문의
        </Wrapper>
        <Wrapper height={`20px`} bgColor={Theme.grey_C} width={`1px`}></Wrapper>
        <Wrapper
          cursor={`pointer`}
          width={`150px`}
          height={`100%`}
          borderBottom={currentTab === 1 && `2px solid ${Theme.basicTheme_C}`}
          onClick={() => setCurrentTab(1)}
        >
          FAQ / Q&#38;A
        </Wrapper>
      </Wrapper>
      {currentTab === 0 && (
        <RsWrapper padding={`80px 0`}>
          <CommonSubTitle>가맹문의</CommonSubTitle>
          <LightSpeed>
            <Wrapper>
              <SubjectTitle>펫마트 가맹문의를 올려주세요.</SubjectTitle>
            </Wrapper>
          </LightSpeed>
          <Wrapper>
            <Wrapper
              al={`flex-start`}
              fontSize={`24px`}
              fontWeight={`600`}
              margin={`60px 0 15px`}
            >
              상담자 정보
            </Wrapper>
            <Wrapper
              al={`flex-start`}
              fontSize={`14px`}
              color={Theme.red_C}
              borderBottom={`3px solid ${Theme.black_C}`}
              padding={`0 0 20px`}
              margin={`0 0 10px`}
            >
              ★ 필수 입력 항목입니다.
            </Wrapper>
            <Fade bottom>
              <Wrapper dr={`row`}>
                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  padding={`10px 0`}
                  borderBottom={`1px solid rgb(204, 204, 204)`}
                >
                  <Wrapper
                    ju={`flex-start`}
                    width={width < 900 ? `130px` : `165px`}
                    dr={`row`}
                    al={`flex-start`}
                  >
                    <SpanText
                      color={Theme.red_C}
                      fontSize={`7px`}
                      margin={`0 10px 0 0`}
                    >
                      ★
                    </SpanText>
                    <Title>이름</Title>
                  </Wrapper>
                  <TextInput
                    width={width < 900 ? `calc(100% - 130px)` : `50%`}
                    {...inputName}
                  />
                </Wrapper>

                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  padding={`10px 0`}
                  borderBottom={`1px solid rgb(204, 204, 204)`}
                >
                  <Wrapper
                    ju={`flex-start`}
                    width={width < 900 ? `130px` : `165px`}
                    dr={`row`}
                    al={`flex-start`}
                  >
                    <SpanText
                      color={Theme.red_C}
                      fontSize={`7px`}
                      margin={`0 10px 0 0`}
                    >
                      ★
                    </SpanText>
                    <Title>연락처</Title>
                  </Wrapper>
                  <TextInput
                    width={width < 900 ? `calc(100% - 130px)` : `50%`}
                    {...inputMobile}
                  />
                </Wrapper>

                <Wrapper
                  ju={`flex-start`}
                  dr={`row`}
                  ju={`flex-start`}
                  padding={`10px 0`}
                  borderBottom={`1px solid rgb(204, 204, 204)`}
                >
                  <Wrapper
                    ju={`flex-start`}
                    width={width < 900 ? `130px` : `165px`}
                    dr={`row`}
                    al={`flex-start`}
                  >
                    <SpanText
                      color={Theme.white_C}
                      fontSize={`7px`}
                      margin={`0 10px 0 0`}
                    >
                      ★
                    </SpanText>
                    <Title>이메일</Title>
                  </Wrapper>
                  <TextInput
                    width={width < 900 ? `calc(100% - 130px)` : `50%`}
                    {...inputEmail}
                  />
                  {/* <Wrapper dr={`row`} ju={`space-between`} width={width < 900 ? `130px`:`165px`}>
                    <TextInput
                      width={width < 1100 ? `30%` : `33%`}
                      {...inputEmail}
                    />
                    &nbsp;@&nbsp;
                    <TextInput
                      width={width < 1100 ? `30%` : `33%`}
                      readOnly={selectEmailDomain.value !== "직접 입력"}
                      {...inputEmailDomain}
                    />
                    <Combo width={`25%`} {...selectEmailDomain}>
                      <ComboOption value={`선택`}>선택</ComboOption>
                      <ComboOption value={`naver.com`}>naver.com</ComboOption>
                      <ComboOption value={`gmail.com`}>gmail.com</ComboOption>
                      <ComboOption value={`hanmail.net`}>
                        hanmail.net
                      </ComboOption>
                      <ComboOption value={`직접 입력`}>직접 입력</ComboOption>
                    </Combo>
                  </Wrapper> */}
                </Wrapper>

                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  padding={`10px 0`}
                  borderBottom={`1px solid rgb(204, 204, 204)`}
                >
                  <Wrapper
                    ju={`flex-start`}
                    width={width < 900 ? `130px` : `165px`}
                    dr={`row`}
                    al={`flex-start`}
                  >
                    <SpanText
                      color={Theme.red_C}
                      fontSize={`7px`}
                      margin={`0 10px 0 0`}
                    >
                      ★
                    </SpanText>
                    <Title>창업희망지역</Title>
                  </Wrapper>
                  <TextInput
                    width={width < 900 ? `calc(100% - 130px)` : `50%`}
                    {...inputLoc}
                  />
                </Wrapper>
              </Wrapper>
            </Fade>
          </Wrapper>
          <Wrapper>
            <Fade bottom>
              <Wrapper dr={`row`}>
                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  padding={`10px 0`}
                  borderBottom={`1px solid rgb(204, 204, 204)`}
                >
                  <Wrapper
                    dr={`row`}
                    ju={`flex-start`}
                    al={`flex-start`}
                    width={width < 900 ? `130px` : `165px`}
                  >
                    <SpanText
                      color={Theme.red_C}
                      fontSize={`7px`}
                      margin={`0 10px 0 0`}
                    >
                      ★
                    </SpanText>
                    <Title>예상창업비용</Title>
                  </Wrapper>
                  <Wrapper
                    dr={`row`}
                    width={
                      width < 900 ? `calc(100% - 130px)` : `calc(100% - 165px)`
                    }
                    ju={`flex-start`}
                    isRelative={true}
                  >
                    <TextInput
                      width={width < 900 ? `100%` : `calc(50% + 82px)`}
                      placeholder={`숫자만 입력`}
                      {...inputMayPay}
                      padding={width < 900 && `0 26px 0 5px`}
                    />
                    <Wrapper
                      isAbsolute={width < 900 && true}
                      top={width < 900 && `15px`}
                      right={width < 900 && `0`}
                      width={`auto`}
                      color={Theme.darkGrey_C}
                      margin={width < 900 ? `0 10px` : `-7px 10px 0`}
                    >
                      만원
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Fade>
          </Wrapper>
          <Wrapper>
            <Fade bottom>
              <Wrapper dr={`row`}>
                <Wrapper
                  dr={`row`}
                  ju={`flex-start`}
                  padding={`10px 0`}
                  borderBottom={`1px solid rgb(204, 204, 204)`}
                >
                  <Wrapper
                    ju={`flex-start`}
                    width={width < 900 ? `130px` : `165px`}
                    dr={`row`}
                    al={`flex-start`}
                  >
                    <SpanText
                      color={Theme.red_C}
                      fontSize={`7px`}
                      margin={`0 10px 0 0`}
                    >
                      ★
                    </SpanText>
                    <Title>점포보유유무</Title>
                  </Wrapper>
                  <Wrapper
                    dr={`row`}
                    ju={`flex-start`}
                    width={width < 900 ? `calc(100% - 130px)` : `50%`}
                  >
                    <CommonButton
                      width={`50%`}
                      height={width < 800 ? `35px` : `40px`}
                      kindOf={!inputIsStore.value ? `black` : `subTheme2`}
                      onClick={() => inputIsStore.setValue(false)}
                    >
                      없음
                    </CommonButton>
                    <CommonButton
                      width={`50%`}
                      height={width < 800 ? `35px` : `40px`}
                      kindOf={inputIsStore.value ? `black` : `subTheme2`}
                      onClick={() => inputIsStore.setValue(true)}
                    >
                      있음
                    </CommonButton>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Fade>
          </Wrapper>
          <Wrapper>
            <Fade bottom>
              <Wrapper al={`flex-start`} padding={`10px 0`} dr={`row`}>
                <Wrapper
                  ju={`flex-start`}
                  width={width < 900 ? `130px` : `165px`}
                  dr={`row`}
                  al={`flex-start`}
                  padding={`20px 0`}
                >
                  <SpanText
                    color={Theme.red_C}
                    fontSize={`7px`}
                    margin={`0 10px 0 0`}
                  >
                    ★
                  </SpanText>
                  <Title>문의 내용</Title>
                </Wrapper>
                <TextArea
                  {...inputDesc}
                  width={
                    width < 900 ? `calc(100% - 130px)` : `calc(100% - 165px)`
                  }
                  height={`250px`}
                />
              </Wrapper>
            </Fade>
          </Wrapper>
          <Wrapper>
            <Fade bottom>
              <Wrapper
                cursor={`pointer`}
                dr={`row`}
                margin={`30px 0 0`}
                ju={`space-between`}
              >
                <Wrapper
                  width={`auto`}
                  dr={`row`}
                  onClick={() => setIsAgree(!isAgree)}
                >
                  {isAgree ? (
                    <Wrapper
                      width={width < 700 ? `20px` : `25px`}
                      height={width < 700 ? `20px` : `25px`}
                      bgColor={Theme.basicTheme_C}
                      margin={`0 10px 0 0`}
                    >
                      <FiCheck color={Theme.white_C} />
                    </Wrapper>
                  ) : (
                    <Wrapper
                      width={width < 700 ? `20px` : `25px`}
                      height={width < 700 ? `20px` : `25px`}
                      bgColor={Theme.white_C}
                      margin={`0 10px 0 0`}
                      border={`1px solid ${Theme.basicTheme_C}`}
                    >
                      <FiCheck color={Theme.basicTheme_C} />
                    </Wrapper>
                  )}

                  <Text
                    fontWeight={`300`}
                    display={width < 700 ? `none` : `flex`}
                  >
                    개인정보취급방침을 읽었으며 이에 동의합니다.
                  </Text>
                  <Wrapper
                    width={`auto`}
                    display={width < 700 ? `flex` : `none`}
                    al={`flex-start`}
                  >
                    <Text fontWeight={`300`}>개인정보취급방침을 읽었으며</Text>
                    <Text fontWeight={`300`}>이에 동의합니다.</Text>
                  </Wrapper>
                </Wrapper>
                <CommonButton
                  width={width < 700 ? `80px` : `100px`}
                  height={`50px`}
                  kindOf={`subTheme2`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsToggle(true);
                  }}
                >
                  자세히 보기
                </CommonButton>
              </Wrapper>
            </Fade>
          </Wrapper>
          <CommonButton
            width={`350px`}
            height={`50px`}
            margin={`60px 0 0`}
            onClick={createRequestHandler}
          >
            신청하기
          </CommonButton>
        </RsWrapper>
      )}
      {currentTab === 1 && (
        <RsWrapper padding={`80px 0`}>
          <CommonSubTitle> FAQ</CommonSubTitle>
          <LightSpeed>
            <Wrapper>
              <SubjectTitle>자주 묻는 질문입니다.</SubjectTitle>
            </Wrapper>
          </LightSpeed>

          <Wrapper ref={faqRef}>
            <Board
              inputSearch={inputSearch}
              pages={pages}
              currentPage={currentPage}
              currentType={currentType}
              actionFaqView={actionFaqView}
              //
              faqDatum={faqDatum}
              pData={pData}
              //
              toggleFaqAnswer={toggleFaqAnswer}
              changeFaqTypeHandler={changeFaqTypeHandler}
              prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
              firstPageChangeHandler={firstPageChangeHandler}
              endPageChangeHandler={endPageChangeHandler}
              changePageHandler={changePageHandler}
              searchHandler={searchHandler}
            />
          </Wrapper>

          <CommonSubTitle> Q&amp;A</CommonSubTitle>
          <LightSpeed></LightSpeed>
          <NoticeBoard
            inputSearch={inputSearch}
            pages={pages}
            currentPage={currentPage}
            currentList={currentList}
            limit={limit}
            sortValue={sortValue}
            //
            noticeDatum={noticeDatum}
            pageCnt={pageCnt}
            //
            moveLinkHandler={moveLinkHandler}
            prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
            firstPageChangeHandler={firstPageChangeHandler}
            endPageChangeHandler={endPageChangeHandler}
            changePageHandler={changePageHandler}
            searchHandler={searchHandler}
          />
        </RsWrapper>
      )}
      <Dialog
        open={isToggle}
        keepMounted
        onClose={() => setIsToggle(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={`lg`}
      >
        <DialogTitle id="alert-dialog-slide-title">{`개인정보취급방침`}</DialogTitle>
        <DialogContent>
          <Wrapper
            height={`400px`}
            overflow={`auto`}
            className="scroll"
            ju={`flex-start`}
          >
            <pre>{`(이하 '회사’라 함)은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. 본 방침은 년 월 일부터 시행됩니다.
1. 개인정보의 수집 및 이용 목적
① 회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
가. 고객상담 : 가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
나. 정보제공 : 회사에서 주최하는 프로그램에 대한 정보 제공 등의 목적으로 개인정보를 처리합니다.
② 회사는 다음과 같은 방법으로 개인정보를 수집합니다.
- 홈페이지

2. 처리하는 개인정보 항목
① 회사는 다음의 개인정보 항목을 처리하고 있습니다.
가. 고객상담
- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)
- 선택항목 : 없음
나. 정보제공
- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)
- 선택항목 : 없음

3. 개인정보의 처리 및 보유 기간
① 회사는 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
가. 고객상담 : 사이트 이용자의 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
나. 정보제공 : 회사에서 주최하는 프로그램에 대한 정보 제공 등의 목적으로 개인정보를 처리합니다.
다. 개인정보 보유기간 : 5년

4. 개인정보의 파기
① 회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 보유기간을 거친 후 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
- 파기절차 : 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
- 파기기한 : 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
- 파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.

5. 개인정보의 제3자 제공에 관한 사항
① 회사는 원칙적으로 이용자의 개인정보를 1. 개인정보의 수집 및 이용 목적에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
단, 다음의 경우에는 개인정보를 처리할 수 있습니다.
- 이용자가 사전에 제3자 제공 및 공개에 동의한 경우
- 법령 등에 의해 제공이 요구되는 경우
- 서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적/기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우
- 개인을 식별하기에 특정할 수 없는 상태로 가공하여 이용하는 경우
② 개인정보를 제3자에게 제공하게 될 시 개인정보 취급방침을 통하여 반드시 제공받는 자, 이용목적, 제공하는 개인정보 항목, 보유 및 이용기간 등에 대한 내용을 고지합니다.
③ 단, 이용자가 제3자 제공 및 공개에 동의하지 않은 경우 회사에서 제공하는 서비스의 제한 혹은 정보 습득에 있어 불이익을 얻을 수 있습니다.

6. 개인정보 처리의 위탁
① 회사는 개인정보를 위탁하지 않으며, 개인정보를 위탁하게 될 시 최소 15일 전에 별도로 공지사항을 통해 공지한 뒤 개인정보 취급방침을 개정합니다.

7. 정보주체의 권리, 의무 및 행사방법
① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
가. 개인정보 열람요구
나. 오류 등이 있을 경우 정정 요구
다. 삭제요구
라. 처리정지 요구
② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, FAX 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

8. 개인정보 수집 장치의 설치, 운영 및 거부에 관한 사항
① 회사는 고객님의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다.
가. 쿠키란?
- 회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
- 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자 컴퓨터의 하드디스크에 저장됩니다. 이후 이용자가 웹 사이트에 방문할 경우 웹 사이트 서버는 이용자의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 맞춤화된 서비스를 제공하기 위해 이용됩니다.
- 쿠키는 개인을 식별하는 정보를 자동적/능동적으로 수집하지 않으며, 이용자는 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
나. 회사의 쿠키 사용 목적
- 이용자들이 방문한 회사의 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 이용자 규모 등을 파악하여 이용자에게 광고를 포함한 최적화된 맞춤형 정보를 제공하기 위해 사용합니다.
다. 쿠키의 설치/운영 및 거부
- 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
- 다만, 쿠키의 저장을 거부할 경우에는 일부 서비스는 이용에 어려움이 있을 수 있습니다.
- 쿠키 설치 허용 여부를 지정하는 방법 (Internet Explorer의 경우)은 다음과 같습니다.
(1) [도구] 메뉴에서 [인터넷 옵션]을 선택합니다.
(2) [개인정보 탭]을 클릭합니다.
(3) [개인정보취급 수준]을 설정하시면 됩니다.

9. 개인정보관리책임자
① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
▶ 개인정보 보호 책임자
- 부서명: 관리팀 
- 담당자: 이찬희 팀장
- 연락처: cyjh1022@sunjinpet.co.kr
② 정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.`}</pre>
          </Wrapper>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsToggle(false)} color="secondary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM05Presenter);
