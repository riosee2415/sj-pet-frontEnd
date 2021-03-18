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
      <Fade>
        <Title text="가맹정 상세정보" />
      </Fade>
    </WholeWrapper>
  );
};
