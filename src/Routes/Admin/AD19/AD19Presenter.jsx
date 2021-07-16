import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  StatusText,
  CommonButton,
} from "../../../Components/AdminCommonComponents";
import withSplitting from "../../../Lib/withSplitting";
const Fade = withSplitting(() => import("react-reveal/Fade"));
const Title = withSplitting(() => import("../Components/Title"));
const Tabs = withSplitting(() => import("../Components/Tabs"));
const CircularIndeterminate = withSplitting(() =>
  import("../../../Components/loading/CircularIndeterminate")
);
const Editor = withSplitting(() =>
  import("../../../Components/editor/Editor.jsx")
);

const tabs = ["미처리 문의사항", "처리완료"];

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  currentData,
  setCurrentData,
  descRef,
  canEditor,
  currentId,
  currentMemo,
  setCurrentMemo,
  //
  dqDatum,
  //
  getDetailDataHandler,
  completeHandler,
}) => {
  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="DIRECT REQUEST MANAGEMENT" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Wrapper>
        <TableWrapper>
          <TableHeadColumn width={`5%`}>번호</TableHeadColumn>
          <TableHeadColumn width={`10%`}>이름</TableHeadColumn>
          <TableHeadColumn width={`10%`}>연락처</TableHeadColumn>
          <TableHeadColumn width={`15%`}>이메일</TableHeadColumn>
          <TableHeadColumn width={`10%`}>창업희망지역</TableHeadColumn>
          <TableHeadColumn width={`10%`}>예상창업비용</TableHeadColumn>
          <TableHeadColumn width={`15%`}>점포보유유무</TableHeadColumn>
          <TableHeadColumn width={`10%`}>처리상태</TableHeadColumn>
          <TableHeadColumn width={`15%`}>작성일</TableHeadColumn>
        </TableWrapper>

        <Wrapper
          isBorder={true}
          height={`250px`}
          margin={`0px 0px 10px 0px`}
          al={`flex-start`}
          ju={`flex-start`}
          isScroll={true}
        >
          {dqDatum ? (
            dqDatum.length === 0 ? (
              <TableWrapper isData={true}>
                <TableHeadColumn isData={true} width={`100%`}>
                  조회 된 데이터가 없습니다.
                </TableHeadColumn>
              </TableWrapper>
            ) : (
              dqDatum.map((data, idx) => {
                return (
                  <Fade key={data._id} delay={30 * idx}>
                    <TableWrapper
                      isActive={currentId === data._id}
                      isData={true}
                      onClick={() =>
                        getDetailDataHandler(
                          data.description,
                          data.memo,
                          data._id
                        )
                      }
                    >
                      <TableHeadColumn isData={true} width={`5%`}>
                        {idx + 1}
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`10%`}>
                        {data.name}
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`10%`}>
                        {data.mobile}
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`15%`}>
                        {data.email}
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`10%`}>
                        {data.loc}
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`10%`}>
                        {data.mayPay}원
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`15%`}>
                        {data.isExistStore ? "있음" : "없음"}
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`10%`}>
                        <StatusText status={data.isComplete ? false : true}>
                          {data.isComplete ? `처리완료` : `미처리`}
                        </StatusText>
                      </TableHeadColumn>
                      <TableHeadColumn isData={true} width={`15%`}>
                        {data.createdAt}
                      </TableHeadColumn>
                    </TableWrapper>
                  </Fade>
                );
              })
            )
          ) : (
            <CircularIndeterminate />
          )}
        </Wrapper>

        <Wrapper dr={`row`}>
          <Wrapper
            width={`50%`}
            height={`370px`}
            isBorder={true}
            margin={`0px 10px 0px 0px`}
            al={`flex-start`}
            ju={`flex-start`}
          >
            <TableWrapper>
              <TableHeadColumn width={`100%`}>문의내용</TableHeadColumn>
            </TableWrapper>

            <Wrapper
              padding={`20px`}
              height={`80%`}
              ref={descRef}
              al={`flex-start`}
              ju={`flex-start`}
              isScroll={true}
            ></Wrapper>
          </Wrapper>
          <Wrapper
            width={`50%`}
            height={`370px`}
            isBorder={true}
            al={`flex-start`}
            ju={`flex-start`}
          >
            <TableWrapper>
              <TableHeadColumn width={`100%`}>메모</TableHeadColumn>
            </TableWrapper>
            {canEditor ? (
              <Editor
                value={currentMemo}
                componentHeight="h-300"
                editorChangeHandler={(html) => setCurrentMemo(html)}
              />
            ) : (
              <Wrapper padding={`20px`}> 문의를 선택해주세요. </Wrapper>
            )}

            {canEditor ? (
              <Wrapper al={`flex-end`} ju={`flex-end`}>
                <CommonButton kindOf={`update`} onClick={completeHandler}>
                  처리완료
                </CommonButton>
              </Wrapper>
            ) : null}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </WholeWrapper>
  );
};
