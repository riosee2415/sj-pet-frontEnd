import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TableWrapper,
  TableHeadColumn,
  TextInput,
  InfoText,
  CommonButton,
  CheckInput,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { FiEdit } from "react-icons/fi";

const tabs = ["사업회원 탈퇴 리스트"];

const StatusText = styled.div`
  color: ${(props) => (props.status ? Theme.delete_B_C : Theme.update_B_C)};
`;

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  //
  searchValue,
  setSearchValue,
  //
  userDatum,
  //
  blackCancleHandler,
}) => {
  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="탈퇴리스트 목록" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>
      <Wrapper
        isSearchBox={true}
        height={`35px`}
        margin={`0px 0px 10px 0px`}
        padding={`0px 5px`}
        al={`flex-start`}
      >
        <TextInput
          type="text"
          width={`300px`}
          placeholder={`회원 이름...`}
          height={`25px`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Wrapper>
      <Wrapper margin={`0px 0px 5px 0px`}>
        <TableWrapper>
          <TableHeadColumn width={`10%`}>번호</TableHeadColumn>
          <TableHeadColumn width={`15%`}>이름</TableHeadColumn>
          <TableHeadColumn width={`25%`}>아이디</TableHeadColumn>
          <TableHeadColumn width={`20%`}>연락처</TableHeadColumn>

          <TableHeadColumn width={`30%`}>탈퇴일</TableHeadColumn>
        </TableWrapper>
      </Wrapper>
      <Wrapper
        isBorder={true}
        al={`flex-start`}
        ju={`flex-start`}
        height={`600px`}
        isScroll={true}
      >
        {userDatum ? (
          userDatum.length === 0 ? (
            <TableWrapper isData={true}>
              <TableHeadColumn isData={true} width={`100%`}>
                조회 된 데이터가 없습니다.
              </TableHeadColumn>
            </TableWrapper>
          ) : (
            userDatum.map((data, idx) => {
              return (
                <Fade key={data._id} delay={idx * 30}>
                  <TableWrapper isData={true}>
                    <TableHeadColumn isData={true} width={`10%`}>
                      {idx + 1}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`15%`}>
                      {data.username}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`25%`}>
                      {data.userId}
                    </TableHeadColumn>
                    <TableHeadColumn isData={true} width={`20%`}>
                      {data.mobile}
                    </TableHeadColumn>

                    <TableHeadColumn isData={true} width={`30%`}>
                      <StatusText status={true}>{data.exitedAt}</StatusText>
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
    </WholeWrapper>
  );
};
