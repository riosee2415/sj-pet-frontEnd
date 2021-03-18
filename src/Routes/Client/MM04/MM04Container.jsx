import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM04Presenter = withSplitting(() => import("./MM04Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM04Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM04Container = ({ history }) => {

////////////// - USE STATE- ///////////////

////////////// - USE QUERY- ///////////////

///////////// - USE MUTATION- /////////////

///////////// - EVENT HANDLER- ////////////

////////////// - USE EFFECT- //////////////

useEffect(() => {
  scroll.scrollTo(0);
}, []);

return <MM04Presenter />;
};

export default MM04Container;
  