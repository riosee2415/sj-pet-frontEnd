import React from "react";
import {
  WholeWrapper,
  TextInput,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  Content,
  ContentTitle,
  Textarea,
  CommonButton,
  Combo,
  ComboOption,
  GuideBox,
  GuideContent,
  Image,
  FileInput,
  FileLabel,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import useTitle from "@4leaf.ysh/use-title";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { FiAlertCircle } from "react-icons/fi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tabs = ["신규 가맹점"];

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileRef,
  //
  nDatum,
  //
  fileChangeHandler,
  moveDetailPageHandler,
}) => {
  useTitle("ADMIN | 신규 가맹점");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="신규 가맹점 관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Fade>
        <GuideBox margin={`0px 0px 10px 0px`} padding={`5px`}>
          <GuideContent margin={`0px 0px 5px 0px`}>
            가맹점은 가맹점명 순으로 자동정렬 됩니다.
          </GuideContent>
          <GuideContent margin={`0px 0px 0px 0px`}>
            수정/삭제 되는 데이터는 전부 실시간으로 반영되니 주의하시기
            바랍니다.
          </GuideContent>
        </GuideBox>

        <TableWrapper>
          <TableHeadColumn width={`5%`}>번호</TableHeadColumn>
          <TableHeadColumn isStart={true} width={`95%`}>
            가맹점명
          </TableHeadColumn>
        </TableWrapper>

        <Wrapper
          height={`600px`}
          isScroll={true}
          isBorder={true}
          ju={`flex-start`}
        >
          {nDatum ? (
            nDatum.length === 0 ? (
              <TableWrapper isData={true}>
                <TableHeadColumn
                  isData={true}
                  width={`100%`}
                  dr={`row`}
                  isSvg={true}
                >
                  <FiAlertCircle color={Theme.delete_B_C} size={20} /> 조회 된
                  데이터가 없습니다.
                </TableHeadColumn>
              </TableWrapper>
            ) : (
              nDatum.map((data, idx) => {
                return (
                  <TableWrapper isData={true} key={idx}>
                    <TableHeadColumn isData={true} width={`5%`}>
                      {idx + 1}
                    </TableHeadColumn>
                    <TableHeadColumn
                      isStart={true}
                      isData={true}
                      width={`95%`}
                      isToday={true}
                      onClick={() => moveDetailPageHandler(data._id)}
                    >
                      {data.title}
                    </TableHeadColumn>
                  </TableWrapper>
                );
              })
            )
          ) : (
            <CircularIndeterminate />
          )}
        </Wrapper>
      </Fade>
    </WholeWrapper>
  );
};
