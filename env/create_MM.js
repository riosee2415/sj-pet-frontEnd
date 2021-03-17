const fs = require("fs");
const args = process.argv.slice(2);

fs.mkdirSync(`./src/Routes/Client/MM${args[0]}`);
fs.writeFile(
  `./src/Routes/Client/MM${args[0]}/MM${args[0]}Container.jsx`,

  `import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM${args[0]}Presenter = withSplitting(() => import("./MM${args[0]}Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM${args[0]}Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM${args[0]}Container = ({ history }) => {

////////////// - USE STATE- ///////////////

////////////// - USE QUERY- ///////////////

///////////// - USE MUTATION- /////////////

///////////// - EVENT HANDLER- ////////////

////////////// - USE EFFECT- //////////////

useEffect(() => {
  scroll.scrollTo(0);
}, []);

return <MM${args[0]}Presenter />;
};

export default MM${args[0]}Container;
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
  `./src/Routes/Client/MM${args[0]}/MM${args[0]}Presenter.jsx`,

  `import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import { WholeWrapper } from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const MM${args[0]}Presenter = ({ width }) => {
  useTitle("셈플");

  return <WholeWrapper>Hello World!</WholeWrapper>;
};

export default withResizeDetector(MM${args[0]}Presenter);
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
  `./src/Routes/Client/MM${args[0]}/MM${args[0]}Queries.js`,

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
  `./src/Routes/Client/MM${args[0]}/index.js`,

  `import MM${args[0]}Container from "./MM${args[0]}Container.jsx";
  
  export default MM${args[0]}Container;
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
