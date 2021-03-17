import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  WholeWrapper,
  RsWrapper,
  Wrapper,
} from "../../../Components/CommonComponents";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";

const Board = withSplitting(() => import("../../../Components/faq/Board"));

const MMPresenter = ({
  inputSearch,
  pages,
  currentPage,
  currentType,
  actionFaqView,
  //
  faqTypeDatum,
  faqDatum,
  //
  toggleFaqAnswer,
  changeFaqTypeHandler,
  prevAndNextPageChangeHandler,
  changePageHandler,
  searchHandler,
}) => {
  useTitle("자주 묻는 질문 | ");
  return (
    <WholeWrapper>
      <RsWrapper padding={`0 0 100px`}>
        <Wrapper>
          <Board
            inputSearch={inputSearch}
            pages={pages}
            currentPage={currentPage}
            currentType={currentType}
            actionFaqView={actionFaqView}
            //
            faqTypeDatum={faqTypeDatum}
            faqDatum={faqDatum}
            //
            toggleFaqAnswer={toggleFaqAnswer}
            changeFaqTypeHandler={changeFaqTypeHandler}
            prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
            changePageHandler={changePageHandler}
            searchHandler={searchHandler}
          />
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MMPresenter);
