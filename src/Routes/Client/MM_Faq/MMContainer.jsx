import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { withRouter } from "react-router-dom";
import withSplitting from "../../../Lib/withSplitting";
import { GET_FAQ, GET_FAQTYPE, GET_FAQ_TOTALPAGE } from "./MMQueries";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
const MMPresenter = withSplitting(() => import("./MMPresenter"));

const MMContainer = () => {
  ////////////// - USE STATE- ///////////////
  const [actionFaqView, setActionFaqView] = useState(null);
  const [currentType, setCurrentType] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(15);
  const [pages, setPages] = useState(null);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");

  ////////////// - USE QUERY- ///////////////
  const { data: faqTypeDatum, refetch: faqTypeRefetch } = useQuery(GET_FAQTYPE);
  // const { data: faqDatum, refetch: faqRefetch } = useQuery(GET_FAQ, {
  //   variables: {
  //     typeName: faqTypeDatum
  //       ? faqTypeDatum.getFaqType[currentType].typeName
  //       : "",
  //   },
  //   skip: !faqTypeDatum,
  // });

  const { data: faqDatum, refetch: faqRefetch } = useQuery(GET_FAQ, {
    variables: {
      typeName: faqTypeDatum
        ? faqTypeDatum.getFaqType[currentType].typeName
        : "",
      limit,
      currentPage,
      searchValue,
    },
    skip: !faqTypeDatum,
  });

  const { data: pData, refetch: pRefetch } = useQuery(GET_FAQ_TOTALPAGE, {
    variables: {
      typeName: faqTypeDatum
        ? faqTypeDatum.getFaqType[currentType].typeName
        : "",
      searchValue,
      limit,
    },
    skip: !faqTypeDatum,
  });

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////
  const toggleFaqAnswer = (id, content) => {
    let currentFaqAction = actionFaqView.map((action, idx) =>
      idx === id ? !action : action
    );
    const answer = document.getElementById(`faq-answer-${id}`);
    answer.innerHTML = content;
    setActionFaqView(currentFaqAction);
  };

  const changeFaqTypeHandler = (type) => {
    setActionFaqView(null);
    setCurrentType(type);
  };

  const prevAndNextPageChangeHandler = (page) => {
    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > pages.length - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

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
    faqTypeRefetch();
    faqRefetch();
    pRefetch();
  }, []);

  useEffect(() => {
    setActionFaqView(null);
  }, [currentPage]);

  useEffect(() => {
    if (faqDatum && !actionFaqView) {
      let defaultAction = faqDatum.getFaqDetail.map(() => {
        return false;
      });

      setActionFaqView(defaultAction);
    }
  }, [faqDatum]);

  useEffect(() => {
    if (pData) {
      const temp = [];

      for (let i = 0; i < pData.getFaqTotalPage; i++) temp.push(i);

      setPages(temp);
    }
  }, [pData]);

  return (
    <MMPresenter
      inputSearch={inputSearch}
      pages={pages}
      currentPage={currentPage}
      actionFaqView={actionFaqView}
      currentType={currentType}
      //
      faqTypeDatum={faqTypeDatum && faqTypeDatum.getFaqType}
      faqDatum={faqDatum && faqDatum.getFaqDetail}
      //
      toggleFaqAnswer={toggleFaqAnswer}
      changeFaqTypeHandler={changeFaqTypeHandler}
      prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
      changePageHandler={changePageHandler}
      searchHandler={searchHandler}
    />
  );
};

export default withRouter(MMContainer);
