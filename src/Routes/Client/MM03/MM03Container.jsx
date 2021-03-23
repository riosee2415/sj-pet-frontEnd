import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM03Presenter = withSplitting(() => import("./MM03Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { GET_STORE, GET_STORE_ONE, GET_STORE_TOTALPAGE } from "./MM03Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM03Container = ({ history, match }) => {
  ////////////// - USE STATE- ///////////////
  const [limit, setLimit] = useState(9);
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentList, setCurrentList] = useState(0);
  const [store, setStore] = useState("");

  const [scale, setScale] = useState(4);

  ////////////// - USE QUERY- ///////////////
  const { data: sDatum, refetch: sRefetch } = useQuery(GET_STORE, {
    variables: {
      currentPage,
      limit,
    },
  });

  const { data: pData, refetch: pRefetch } = useQuery(GET_STORE_TOTALPAGE, {
    variables: {
      limit,
    },
  });

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const prevAndNextPageChangeHandler = (page) => {
    let list = currentList;

    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > pages.length - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    if ((currentList + 1) * 5 === page) {
      list += 1;
    } else if (currentList * 5 - 1 === page) {
      list -= 1;
    }

    setCurrentList(list);
    setCurrentPage(page);
  };

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const changeScaleHandler = (idx) => {
    setScale(idx);
  };
  const dataLinkHandler = () => {
    setStore;
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    sRefetch();
    pRefetch();

    scroll.scrollTo(0);
  }, []);

  useEffect(() => {
    if (pData) {
      const temp = [];

      for (let i = 0; i < pData.getStoreTotalPageClient; i++) temp.push(i);

      setPages(temp);
    }
  }, [pData]);

  return (
    <MM03Presenter
      limit={limit}
      pages={pages}
      currentPage={currentPage}
      currentList={currentList}
      scale={scale}
      setStore={setStore}
      //
      sDatum={sDatum && sDatum.getAllStore}
      //
      changePageHandler={changePageHandler}
      prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
      changeScaleHandler={changeScaleHandler}
      dataLinkHandler={dataLinkHandler}
    />
  );
};

export default MM03Container;
