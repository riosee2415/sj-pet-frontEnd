import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TableHeadColumn,
  TableWrapper,
  Content,
  FileInput,
  FileLabel,
  InputContent,
  TextInput,
  CommonButton,
  GuideBox,
  GuideContent,
  Image,
  Textarea,
} from "../../../Components/AdminCommonComponents";
import { Title, Tabs } from "../Components";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";
import Editor from "../../../Components/editor/Editor.jsx";

const tabs = ["브랜드 관리"];

const ImgBox = styled(Wrapper)`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
`;

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileRef,
  //
  currentThumbnail,
  currentTitle,

  //
  fileChangeHandler,
  createBrandHandler,
}) => {
  useTitle("ADMIN | 브랜드 등록");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="브랜드 등록" />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Fade>

      <Wrapper dr={`row`} al={`flex-start`} ju={`flex-start`}>
        <Wrapper width={`100%`} minWidth={`400px`} margin={`0px 10px 0px 0px`}>
          <TableWrapper>
            <TableHeadColumn width={`100%`}>브랜드 이미지 정보</TableHeadColumn>
          </TableWrapper>

          <Wrapper
            height={`630px`}
            isBorder={true}
            padding={`15px`}
            ju={`flex-start`}
          >
            <GuideBox margin={`0px 0px 40px 0px`}>
              <GuideContent padding={`5px`}>
                이미지 사이즈는 1 : 1 비율로 업로드해주세요.
              </GuideContent>
              <GuideContent padding={`5px`}>
                비율이 상이할 경우 화면에 비정상적으로 보일 수 있습니다.
              </GuideContent>
            </GuideBox>

            <Content margin={`0px 0px 20px 0px`}>썸네일 이미지</Content>
            <Image
              src={currentThumbnail}
              width={`350px`}
              height={`350px`}
              isBorder={true}
              margin={`0px 0px 5px 0px`}
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
                width={`350px`}
                htmlFor={`file-js`}
                margin={`0px 0px 55px 0px`}
              >
                THUMBNAIL UPLOAD
              </FileLabel>
            )}

            <Wrapper width={`500px`} margin={`0px 75px 0px 0px`} dr={`row`}>
              <InputContent>제목</InputContent>
              <TextInput {...currentTitle} type="text" />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper al={`flex-end`} ju={`flex-end`} margin={`20px 0px`}>
        <CommonButton kindOf={`create`} onClick={createBrandHandler}>
          브랜드 등록
        </CommonButton>
      </Wrapper>
    </WholeWrapper>
  );
};
