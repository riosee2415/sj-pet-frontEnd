import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM01Presenter = withSplitting(() => import("./MM01Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM01Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM01Container = ({ history }) => {
  ////////////// - USE REF- ///////////////
  const greRef = useRef();
  const hisRef = useRef();

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const scrollMoveHandler = (type) => {
    if (type === "인사말" && greRef.current) {
      scroll.scrollTo(greRef.current.offsetTop - 85);
    } else if (type === "연혁" && hisRef.current) {
      scroll.scrollTo(hisRef.current.offsetTop - 100);
    }
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM01Presenter
      greRef={greRef}
      hisRef={hisRef}
      //
      scrollMoveHandler={scrollMoveHandler}
    />
  );
};

export default MM01Container;
