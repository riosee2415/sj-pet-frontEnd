import React from "react";
import { WholeWrapper, RsWrapper } from "../../../Components/CommonComponents";
import withSplitting from "../../../Lib/withSplitting";
import useTitle from "@4leaf.ysh/use-title";

const Board = withSplitting(() => import("../../../Components/notice/Board"));

const MMPresenter = ({
  inputSearch,
  pages,
  currentPage,
  currentList,
  limit,
  sortValue,
  //
  noticeDatum,
  pageCnt,
  //
  moveLinkHandler,
  prevAndNextPageChangeHandler,
  changePageHandler,
  searchHandler,
}) => {
  useTitle("공지사항 | ");
  return (
    <WholeWrapper>
      <RsWrapper>
        <Board
          inputSearch={inputSearch}
          pages={pages}
          currentPage={currentPage}
          currentList={currentList}
          limit={limit}
          sortValue={sortValue}
          //
          noticeDatum={noticeDatum}
          pageCnt={pageCnt}
          //
          moveLinkHandler={moveLinkHandler}
          prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
          changePageHandler={changePageHandler}
          searchHandler={searchHandler}
        />
      </RsWrapper>
    </WholeWrapper>
  );
};

export default MMPresenter;
