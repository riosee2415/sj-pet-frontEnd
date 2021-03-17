import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import withSplitting from "../../../Lib/withSplitting";
const MMPresenter = withSplitting(() => import("./MMPresenter"));
import useInput from "../../../Components/Hooks/useInput";

import {
  GET_NOTICEBOARD,
  GET_NOTICEBOARD_TOTALPAGE,
  GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT,
  GET_NOTICEBOARD_TYPE,
} from "./MMQueries";

const MMContainer = ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentPage, setCurrentPage] = useState(0);
  const [currentList, setCurrentList] = useState(0);
  const [limit, setLimit] = useState(15);
  const [pages, setPages] = useState(null);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");
  const sortValue = useInput("createdAt");

  ////////////// - USE QUERY- ///////////////
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_NOTICEBOARD, {
    variables: {
      searchValue,
      limit,
      currentPage: currentPage,
      sort: sortValue.value,
    },
  });

  const { data: tData, refetch: tRefetch } = useQuery(
    GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT,
    {
      variables: {
        searchValue,
      },
    }
  );

  const { data: pData, refetch: pRefetch } = useQuery(
    GET_NOTICEBOARD_TOTALPAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  // const { data: typeData, refetch: typeRefetch } = useQuery(
  //   GET_NOTICEBOARD_TYPE
  // );

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const moveLinkHandler = (link) => {
    history.push(link);
  };
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

  const searchHandler = () => {
    setCurrentPage(0);
    setSearchValue(inputSearch.value);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    nRefetch();
    tRefetch();
    pRefetch();
  }, []);

  useEffect(() => {
    if (pData) {
      const temp = [];

      for (let i = 0; i < pData.getNoticeBoardTotalPageClient; i++)
        temp.push(i);

      setPages(temp);
    }
  }, [pData]);

  return (
    <MMPresenter
      inputSearch={inputSearch}
      pages={pages}
      currentPage={currentPage}
      currentList={currentList}
      limit={limit}
      sortValue={sortValue}
      //
      noticeDatum={nDatum && nDatum.getNoticeBoardClient}
      pageCnt={tData && tData.getNoticeBoardTotalPageOnlyCntClient}
      //
      moveLinkHandler={moveLinkHandler}
      prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
      changePageHandler={changePageHandler}
      searchHandler={searchHandler}
    />
  );
};

export default MMContainer;
