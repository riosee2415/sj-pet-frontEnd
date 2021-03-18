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
  
  const tabs = ["셈플 텝"];
  
  export default ({ 
    currentTab, 
    setCurrentTab, 
    isLoading,
    fileRef,
    //
    fileChangeHandler
}) => {
    useTitle("ADMIN | 셈플");
  
    return (
      <WholeWrapper al={`flex-start`} ju={`flex-start`}>
        <Fade right>
          <Title text="셈플 텝" />
          <Tabs
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </Fade>
      </WholeWrapper>
    );
  };
  
  