const fs = require("fs");
const args = process.argv.slice(2);

fs.mkdirSync(`./src/Routes/Admin/AD${args[0]}`);
fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/AD${args[0]}Container.jsx`,

  `import React, { useEffect, useState, useRef } from "react";
  import AD${args[0]}Presenter from "./AD${args[0]}Presenter";
  import { useMutation, useQuery } from "@apollo/client";
  import {} from "./AD${args[0]}Queries.js";
  import { toast } from "react-toastify";
  import storageFn from "../../../fsStorage";
  import useInput from "../../../Components/Hooks/useInput";
  import { emptyCheck } from "../../../commonUtils";
  import confirm from "../../../Components/confirm/confirm";
  
  export default ({ history }) => {
    ////////////// - USE STATE- ///////////////
    const [currentTab, setCurrentTab] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const fileRef = useRef();
  
    ////////////// - VARIABLE- ////////////////
  
    ////////////// - USE QUERY- ///////////////
  
    ////////////// - USE MUTATION- //////////////
  
    ////////////// - USE HANDLER- //////////////
    const fileChangeHandler = async (e) => {
      setIsLoading(true);
      const path = await storageFn.uploadFile(
        "PROJECT_NAME/uploads/FOLDER_NAME",
        e.target.files[0].name,
        e.target.files[0]
      );
  
      const db_path = await storageFn.getSotragePath(path);
      currentThumbnailPath.setValue(db_path);
      fileRef.current.value = null;
  
      setIsLoading(false);
    };
  
    ////////////// - USE EFFECT- ///////////////
    useEffect(() => {}, []);
  
    useEffect(() => {}, [currentTab]);
  
    return (
      <AD${args[0]}Presenter
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isLoading={isLoading}
        fileRef={fileRef}
        //
        fileChangeHandler={fileChangeHandler}
      />
    );
  };
  
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);

fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/AD${args[0]}Presenter.jsx`,

  `import React from "react";
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
      <WholeWrapper al={\`flex-start\`} ju={\`flex-start\`}>
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
  
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);

fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/AD${args[0]}Queries.js`,

  `import { gql } from '@apollo/client';
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);

fs.writeFile(
  `./src/Routes/Admin/AD${args[0]}/index.js`,

  `import AD${args[0]}Container from "./AD${args[0]}Container.jsx";
  
  export default AD${args[0]}Container;
  `,
  function (err) {
    if (err === null) {
      console.log("🍀 4LEAF SOFTWARE - DEV ENV - COMMAND SYSTEM CLEAR RUN!");
    } else {
      console.log(err);
      console.log("fail");
    }
  }
);
