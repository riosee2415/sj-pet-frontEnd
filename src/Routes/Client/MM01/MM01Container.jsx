import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM01Presenter = withSplitting(() => import("./MM01Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM01Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM01Container = ({ history }) => {

////////////// - USE STATE- ///////////////

////////////// - USE QUERY- ///////////////

///////////// - USE MUTATION- /////////////

///////////// - EVENT HANDLER- ////////////

////////////// - USE EFFECT- //////////////

useEffect(() => {
  scroll.scrollTo(0);
}, []);

return <MM01Presenter />;
};

export default MM01Container;
  