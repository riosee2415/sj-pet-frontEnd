import React from "react";
import {
  TableWrapper,
  TableHeadColumn,
  WholeWrapper,
  Wrapper,
  FileInput,
  FileLabel,
  Content,
  TextInput,
  CommonButton,
  Image,
  Textarea,
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
import Editor from "../../../Components/editor/Editor.jsx";

const tabs = ["브랜드 리스트"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileRef,
  currentId,
  currentData,
  currentTitle,
  currentThumbnailPath,
  openDialog,
  //
  datum,
  //
  brandClickHandler,
  fileChangeHandler,
  basicInfoSaveHandler,
  deleteHandler,
}) => {
  useTitle("ADMIN | 브랜드리스트");
  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="브랜드 리스트" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Wrapper dr={`row`}>
        <Wrapper width={`1000px`} margin={`0px 10px 0px 0px`}>
          <Fade left>
            <TableWrapper>
              <TableHeadColumn width={`30%`}>번호</TableHeadColumn>
              <TableHeadColumn width={`70%`}>브랜드명</TableHeadColumn>
            </TableWrapper>

            {/* LEFT CONTENT */}

            <Wrapper
              height={`600px`}
              isBorder={true}
              isScroll={true}
              al={`flex-start`}
              ju={`flex-start`}
            >
              {datum ? (
                datum.length === 0 ? (
                  <TableWrapper isData={true}>
                    <TableHeadColumn isData={true} width={`100%`}>
                      조회 된 데이터가 없습니다.
                    </TableHeadColumn>
                  </TableWrapper>
                ) : (
                  datum.map((data, idx) => {
                    return (
                      <Fade left delay={idx * 30} key={data._id}>
                        <TableWrapper
                          isActive={currentId === data._id}
                          isData={true}
                          onClick={() => brandClickHandler(data)}
                        >
                          <TableHeadColumn isData={true} width={`30%`}>
                            {idx + 1}
                          </TableHeadColumn>
                          <TableHeadColumn isData={true} width={`70%`}>
                            {data.title.length > 20
                              ? data.title.substring(0, 18) + `...`
                              : data.title}
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
          </Fade>
        </Wrapper>

        <Fade right>
          <Wrapper>
            <TableWrapper>
              <TableHeadColumn width={`100%`}>브랜드 정보</TableHeadColumn>
            </TableWrapper>

            {/* RIGHT CONTENT */}

            <Wrapper
              height={`600px`}
              isBorder={true}
              isScroll={true}
              padding={`10px`}
              al={`flex-start`}
              ju={`flex-start`}
            >
              {currentData ? (
                <Wrapper padding={`15px`}>
                  <Wrapper dr={`row`} margin={`0px 0px 20px 0px`}>
                    <Content>제목</Content>
                    <TextInput type="text" {...currentTitle} />
                  </Wrapper>

                  <Image
                    margin={`0px 0px 20px 0px`}
                    src={currentThumbnailPath && currentThumbnailPath.value}
                    width={`300px`}
                    height={`300px`}
                    isBorder={true}
                  />

                  <FileInput
                    id="file-js"
                    type="file"
                    accept="image/jpeg,image/gif,image/png"
                    onChange={fileChangeHandler}
                    ref={fileRef}
                  />

                  {isLoading ? (
                    <CircularIndeterminate />
                  ) : (
                    <FileLabel
                      width={`300px`}
                      htmlFor={`file-js`}
                      margin={`0px 0px 55px 0px`}
                    >
                      THUMBNAIL UPLOAD
                    </FileLabel>
                  )}

                  <Wrapper dr={`row`} al={`flex-end`} ju={`flex-end`}>
                    <CommonButton
                      margin={`0px 10px 0px 0px`}
                      kindOf={`delete`}
                      onClick={deleteHandler}
                    >
                      브랜드 삭제
                    </CommonButton>
                    <a
                      href={`/#/brand-detail/${currentData && currentData._id}`}
                      target="_blank"
                    >
                      <CommonButton margin={`0px 10px 0px 0px`}>
                        게시글 보러가기
                      </CommonButton>
                    </a>

                    <CommonButton
                      kindOf={`create`}
                      onClick={basicInfoSaveHandler}
                    >
                      정보저장
                    </CommonButton>
                  </Wrapper>
                </Wrapper>
              ) : (
                <Wrapper padding={`20px`}>좌측 브랜드를 선택해주세요.</Wrapper>
              )}
            </Wrapper>
          </Wrapper>
        </Fade>
      </Wrapper>
    </WholeWrapper>
  );
};
