import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM04Presenter = withSplitting(() => import("./MM04Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM04Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM04Container = ({ history }) => {
  ////////////// - USE REF- ///////////////
  const stepRef = useRef();
  const payRef = useRef();

  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const scrollMoveHandler = (type) => {
    if (type === "가맹절차" && stepRef.current) {
      scroll.scrollTo(stepRef.current.offsetTop - 85);
    } else if (type === "개설비용" && payRef.current) {
      scroll.scrollTo(payRef.current.offsetTop - 100);
    }
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM04Presenter
      stepRef={stepRef}
      payRef={payRef}
      //
      scrollMoveHandler={scrollMoveHandler}
    />
  );
};

export default MM04Container;
