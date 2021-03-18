import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM02Presenter = withSplitting(() => import("./MM02Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM02Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM02Container = ({ history }) => {

////////////// - USE STATE- ///////////////

////////////// - USE QUERY- ///////////////

///////////// - USE MUTATION- /////////////

///////////// - EVENT HANDLER- ////////////

////////////// - USE EFFECT- //////////////

useEffect(() => {
  scroll.scrollTo(0);
}, []);

return <MM02Presenter />;
};

export default MM02Container;
  