import React from "react";
import {
  EmptyList,
  SearchWrapper,
  TableBody,
  TableBodyLIST,
  TableWrapper,
  Wrapper,
  WholeWrapper,
  TextInput,
  TableHead,
  TableHeadLIST,
  PagenationWrapper,
  PagenationBtn,
  Pagenation,
  Combo,
  ComboOption,
  MobileTable,
  MobileTableWrapper,
  CommonButton,
} from "../CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { FaUserCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { withRouter } from "react-router-dom";
import CircularIndeterminate from "../loading/CircularIndeterminate";
import Theme from "../../Styles/Theme";

const Board = ({
  inputSearch,
  pages,
  currentNoticeList,
  currentNoticePage,
  limit,
  sortValue,
  //
  noticeDatum,
  pageCnt,
  //
  moveLinkHandler,
  moveWriteHandler,
  noticePrevAndNextPageChangeHandler,
  noticeFirstPageChangeHandler,
  noticeEndPageChangeHandler,
  changeNoticePageHandler,
  searchHandler,
  width,
}) => {
  return (
    <WholeWrapper>
      <Wrapper margin={`20px 0px 80px`}>
        {/* <Wrapper
          padding={`40px 0`}
          width={`auto`}
          fontSize={`40px`}
          isNanumFont={true}
          borderTop={`6px solid ${Theme.basicTheme_C}`}
        >
          공지사항
        </Wrapper>
        <Wrapper dr={`row`} ju={`space-between`}>
          <SearchWrapper width={`auto`} dr={`row`} isRelative={true}>
            <TextInput
              type="text"
              width={`190px`}
              padding={`0px 30px 0px 5px`}
              {...inputSearch}
              placeholder="Search"
              onKeyDown={(e) => e.keyCode === 13 && searchHandler()}
            />

            <AiOutlineSearch onClick={searchHandler} />
          </SearchWrapper>

          <Combo
            width={`140px`}
            value={sortValue.value}
            onChange={(e) => sortValue.setValue(e.target.value)}
          >
            <ComboOption value={"createdAt"}>등록순</ComboOption>
            <ComboOption value={"hit"}>조회수</ComboOption>
          </Combo>
        </Wrapper> */}
        <TableWrapper>
          <TableHead>
            <TableHeadLIST width={`100px`}>번호</TableHeadLIST>
            <TableHeadLIST
              fontWeight={`800`}
              width={`calc(100% - 100px - 150px - 200px - 160px)`}
              ju={`flex-start`}
            >
              제목
            </TableHeadLIST>
            <TableHeadLIST width={`150px`}>작성자</TableHeadLIST>
            <TableHeadLIST width={`200px`}>등록일</TableHeadLIST>
            <TableHeadLIST width={`160px`}>조회수</TableHeadLIST>
          </TableHead>

          {noticeDatum ? (
            noticeDatum.length === 0 ? (
              <EmptyList>등록된 게시글이 없습니다.</EmptyList>
            ) : (
              noticeDatum.map((data, idx) => {
                return (
                  <TableBody
                    key={data._id}
                    onClick={() => moveLinkHandler(data._id)}
                  >
                    <TableBodyLIST width={`100px`}>
                      {pageCnt - (currentNoticePage * limit + idx) + ""}
                    </TableBodyLIST>
                    <TableBodyLIST
                      fontWeight={`800`}
                      width={`calc(100% - 100px - 150px - 200px - 160px)`}
                      ju={`flex-start`}
                    >
                      {data && data.title.length > 90
                        ? data.title.substring(0, 90) + `…`
                        : data.title}
                    </TableBodyLIST>
                    <TableHeadLIST width={`150px`}>
                      {data && data.client}
                    </TableHeadLIST>
                    <TableBodyLIST width={`200px`}>
                      {data.createdAt.substring(0, 10)}
                    </TableBodyLIST>
                    <TableBodyLIST width={`160px`}>{data.hit}</TableBodyLIST>
                  </TableBody>
                );
              })
            )
          ) : (
            <CircularIndeterminate />
          )}
        </TableWrapper>

        <MobileTable>
          {noticeDatum ? (
            noticeDatum.length === 0 ? (
              <EmptyList>등록된 게시글이 없습니다.</EmptyList>
            ) : (
              noticeDatum.map((data, idx) => {
                return (
                  <MobileTableWrapper
                    key={data._id}
                    onClick={() => moveLinkHandler(data._id)}
                  >
                    <TableBody>
                      <TableBodyLIST
                        fontWeight={`800`}
                        width={`100%`}
                        ju={`flex-start`}
                      >
                        {data && data.title.length > 90
                          ? data.title.substring(0, 90) + `…`
                          : data.title}
                      </TableBodyLIST>
                    </TableBody>

                    <TableBody>
                      <TableBodyLIST
                        color={`rgb(170, 170, 170)`}
                        ju={`flex-start`}
                        width={`calc(100% / 3)`}
                      >
                        {data && data.client}
                      </TableBodyLIST>
                      <TableBodyLIST
                        color={`rgb(170, 170, 170)`}
                        ju={`flex-start`}
                        width={`calc(100% / 3)`}
                      >
                        {data.createdAt.substring(0, 10)}
                      </TableBodyLIST>
                      <TableBodyLIST
                        color={`rgb(170, 170, 170)`}
                        ju={`flex-start`}
                        width={`calc(100% / 3)`}
                      >
                        {data.hit}
                      </TableBodyLIST>
                    </TableBody>
                  </MobileTableWrapper>
                );
              })
            )
          ) : (
            <CircularIndeterminate />
          )}
        </MobileTable>

        <Wrapper al={width < 800 ? `center` : `flex-end`}>
          <CommonButton
            width={`150px`}
            height={`50px`}
            kindOf={`black`}
            onClick={moveWriteHandler}
          >
            글쓰기
          </CommonButton>
        </Wrapper>

        {pages && pages.length > 0 && (
          <PagenationWrapper width={`auto`}>
            <PagenationBtn onClick={() => noticeFirstPageChangeHandler(0)}>
              <AiOutlineDoubleLeft />
            </PagenationBtn>
            <PagenationBtn
              onClick={() =>
                noticePrevAndNextPageChangeHandler(currentNoticePage - 1)
              }
            >
              <IoIosArrowBack />
            </PagenationBtn>
            {pages.map((data, idx) => {
              return (
                (currentNoticeList + 1) * (width < 900 ? 5 : 10) > idx &&
                currentNoticeList * (width < 900 ? 5 : 10) <= idx && (
                  <Pagenation
                    className={data === currentNoticePage ? `active` : ``}
                    key={data}
                    onClick={() => changeNoticePageHandler(data)}
                  >
                    {data + 1}
                  </Pagenation>
                )
              );
            })}
            <PagenationBtn
              onClick={() =>
                noticePrevAndNextPageChangeHandler(currentNoticePage + 1)
              }
            >
              <IoIosArrowForward />
            </PagenationBtn>
            <PagenationBtn onClick={() => noticeEndPageChangeHandler(pageCnt)}>
              <AiOutlineDoubleRight />
            </PagenationBtn>
          </PagenationWrapper>
        )}
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(Board);
