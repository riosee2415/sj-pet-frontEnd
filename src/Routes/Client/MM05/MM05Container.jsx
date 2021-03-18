import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM05Presenter = withSplitting(() => import("./MM05Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM05Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM05Container = ({ history }) => {

////////////// - USE STATE- ///////////////

////////////// - USE QUERY- ///////////////

///////////// - USE MUTATION- /////////////

///////////// - EVENT HANDLER- ////////////

////////////// - USE EFFECT- //////////////

useEffect(() => {
  scroll.scrollTo(0);
}, []);

return <MM05Presenter />;
};

export default MM05Container;
  