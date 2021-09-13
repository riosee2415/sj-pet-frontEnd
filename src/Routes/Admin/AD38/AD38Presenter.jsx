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
  FieldsSet,
  DataGuideWrapper,
  DataWrapper,
  InfoText,
  StatusButton,
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

const tabs = ["셈플 텝"];

export default ({
  currentTab,
  setCurrentTab,
  isLoading,
  fileRef,
  dataTitle,
  dataThumbnailPath,
  //
  fileChangeHandler,
  updateRoadShowHandler,
  moveListPageHandler,
}) => {
  useTitle("ADMIN | 신규 가맹점 관리");

  return (
    <WholeWrapper al={`flex-start`} ju={`flex-start`}>
      <Fade right>
        <Title text="신규 가맹점 상세정보" />

        <Wrapper margin={`0px 0px 20px 0px`}>
          <FieldsSet margin={`0px 0px 5px 0px`}>가맹점 기본정보</FieldsSet>
          <Wrapper dr={`row`}>
            <DataGuideWrapper height={`300px`}>썸네일</DataGuideWrapper>
            <DataWrapper height={`300px`}>
              <Image
                src={dataThumbnailPath.value}
                width={`280px`}
                height={`210px`}
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
                  width={`280px`}
                  htmlFor={`file-js`}
                  margin={`0px 0px 15px 0px`}
                >
                  THUMBNAIL UPLOAD
                </FileLabel>
              )}
              <InfoText width={`100%`} size={`13px`}>
                이미지 사이즈는 16:9 비율을 기준으로 합니다. 업로드 시
                주의해주세요.
              </InfoText>
            </DataWrapper>
          </Wrapper>
          <Wrapper dr={`row`}>
            <DataGuideWrapper>가맹점명</DataGuideWrapper>
            <DataWrapper>
              <TextInput height={`25px`} {...dataTitle} />
            </DataWrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper margin={`10px 0px`} al={`flex-end`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            kindOf={`update`}
            margin={`0px 5px`}
            onClick={() => moveListPageHandler()}
          >
            목록으로
          </CommonButton>

          <CommonButton
            kindOf={`create`}
            margin={`0px 5px`}
            onClick={() => updateRoadShowHandler()}
          >
            저장하기
          </CommonButton>
        </Wrapper>
      </Fade>
    </WholeWrapper>
  );
};
