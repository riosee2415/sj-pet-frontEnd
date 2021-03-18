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

const tabs = ["가맹점 리스트"];

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileRef,
  //
  fileChangeHandler,
}) => {
  useTitle("ADMIN | 가맹점 관리");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="가맹점 등록관리" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>
      <Fade>
        <TableWrapper>
          <TableHeadColumn width={`5%`}>번호</TableHeadColumn>
          <TableHeadColumn isStart={true} width={`50%`}>
            가맹점명
          </TableHeadColumn>
          <TableHeadColumn width={`35%`}>연락처</TableHeadColumn>
          <TableHeadColumn width={`10%`}>삭제</TableHeadColumn>
        </TableWrapper>

        <Wrapper
          height={`600px`}
          isScroll={true}
          isBorder={true}
          ju={`flex-start`}
        >
          <TableWrapper isData={true}>
            <TableHeadColumn isData={true} width={`5%`}>
              번호
            </TableHeadColumn>
            <TableHeadColumn
              isStart={true}
              isData={true}
              width={`50%`}
              isToday={true}
            >
              가맹점명
            </TableHeadColumn>
            <TableHeadColumn isData={true} width={`35%`}>
              연락처
            </TableHeadColumn>
            <TableHeadColumn isData={true} width={`10%`}>
              삭제
            </TableHeadColumn>
          </TableWrapper>
        </Wrapper>
      </Fade>
    </WholeWrapper>
  );
};
