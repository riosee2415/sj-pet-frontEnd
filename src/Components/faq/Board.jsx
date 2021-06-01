import React from "react";
import {
  EmptyList,
  Wrapper,
  WholeWrapper,
  UlWrapper,
  LiWrapper,
  SearchWrapper,
  TextInput,
  PagenationBtn,
  Pagenation,
  PagenationWrapper,
  Text,
  TabWrapper,
  TabBtn,
} from "../CommonComponents";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import CircularIndeterminate from "../loading/CircularIndeterminate";
import { withResizeDetector } from "react-resize-detector";
import {
  AiOutlineSearch,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Theme from "../../Styles/Theme";

const Board = ({
  width,
  currentType,
  actionFaqView,
  inputSearch,
  pages,
  currentPage,
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
  return (
    <WholeWrapper>
      {/* <SearchWrapper width={`auto`} dr={`row`} isRelative={true}>
        <TextInput
          type="text"
          width={`190px`}
          padding={`0px 30px 0px 5px`}
          {...inputSearch}
          placeholder="Search"
          onKeyDown={(e) => e.keyCode === 13 && searchHandler()}
        />

        <AiOutlineSearch onClick={searchHandler} />
      </SearchWrapper> */}

      {/* <TabWrapper
        dr={`row`}
        isWrap={true}
        ju={width < 700 ? `center` : `flex-start`}
        margin={`20px 0px 60px`}
      >
        {faqTypeDatum &&
          faqTypeDatum.map((data, idx) => {
            return (
              <TabBtn
                key={data._id}
                minWidth={width < 700 ? `175px` : `168px`}
                height={`35px`}
                kindOf={idx === currentType ? `activeBtn` : `white`}
                margin={`0px 10px 0px 0px`}
                bgColor={idx === currentType && Theme.basicTheme_C}
                color={idx === currentType && Theme.white_C}
                border={
                  idx === currentType ? `` : `1px solid ${Theme.basicTheme_C}`
                }
                onClick={() => changeFaqTypeHandler(idx)}
              >
                {data.typeName}
              </TabBtn>
            );
          })}
      </TabWrapper> */}

      <Wrapper borderTop={`3px solid ${Theme.black_C}`} margin={`60px 0 0`}>
        {faqDatum ? (
          faqDatum.length === 0 ? (
            <EmptyList>등록된 FAQ가 없습니다.</EmptyList>
          ) : (
            faqDatum.map((data, idx) => {
              return (
                <Wrapper
                  className="faqBoard"
                  key={data._id}
                  borderBottom={`1px solid rgb(238, 238, 238)`}
                >
                  <Wrapper
                    display={`flex`}
                    padding={`15px`}
                    al={`center`}
                    ju={`flex-start`}
                    dr={`row`}
                    cursor={`pointer`}
                    isBgHover={true}
                    margin={`15px 0 0`}
                    onClick={() => toggleFaqAnswer(idx, data.answer)}
                  >
                    <Wrapper
                      width={
                        width < 800 ? `calc(100% - 40px)` : `calc(100% - 60px)`
                      }
                      ju={`space-between`}
                      dr={`row`}
                      color={Theme.white_C}
                    >
                      <Wrapper
                        height={width < 800 ? `40px` : `60px`}
                        width={width < 800 ? `40px` : `60px`}
                        minWidth={width < 800 ? `40px` : `60px`}
                        radius={`50%`}
                        bgColor={Theme.black_C}
                      >
                        <Text
                          fontSize={width < 700 ? `16px` : `24px`}
                          fontWeight={`300`}
                          color={Theme.white_C}
                        >
                          Q
                        </Text>
                      </Wrapper>
                      <Wrapper
                        width={
                          width < 800
                            ? `calc(100% - 40px)`
                            : `calc(100% - 60px)`
                        }
                        al={`flex-start`}
                        padding={width < 900 ? `0 0 0 10px` : `0 0 0 50px`}
                      >
                        <Text
                          color={Theme.black_C}
                          padding={`10px`}
                          fontSize={width < 700 ? `16px` : `20px`}
                        >
                          {data.question}
                        </Text>
                      </Wrapper>
                    </Wrapper>

                    <Wrapper width={width < 800 ? `40px` : `60px`}>
                      {actionFaqView && actionFaqView[idx] ? (
                        <RiArrowUpSLine size={25} />
                      ) : (
                        <RiArrowDownSLine size={25} />
                      )}
                    </Wrapper>
                  </Wrapper>

                  <Wrapper
                    display={
                      actionFaqView && actionFaqView[idx] ? `flex` : `none`
                    }
                    padding={`20px`}
                    ju={`flex-start`}
                    dr={`row`}
                    wrap={`initial`}
                  >
                    <Wrapper
                      height={width < 800 ? `40px` : `60px`}
                      width={width < 800 ? `40px` : `60px`}
                      minWidth={width < 800 ? `40px` : `60px`}
                      radius={`50%`}
                      bgColor={Theme.basicTheme_C}
                    >
                      <Text
                        fontSize={width < 700 ? `16px` : `24px`}
                        fontWeight={`300`}
                        color={Theme.white_C}
                      >
                        A
                      </Text>
                    </Wrapper>
                    <Wrapper
                      width={
                        width < 800 ? `calc(100% - 40px)` : `calc(100% - 60px)`
                      }
                      padding={width < 900 ? `0 0 0 10px` : `0 0 0 50px`}
                      color={`rgb(97, 97, 97)`}
                    >
                      <Wrapper
                        className={`ql-editor`}
                        id={`faq-answer-${idx}`}
                        padding={`10px`}
                        width={`100%`}
                        fontSize={width < 700 ? `16px` : `18px`}
                        al={`flex-start`}
                        fontWeight={`300`}
                        lineHeight={`1.4`}
                      ></Wrapper>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              );
            })
          )
        ) : (
          <CircularIndeterminate />
        )}
      </Wrapper>

      {pages && pages.length > 0 && (
        <PagenationWrapper width={`auto`} margin={`60px 0 100px`}>
          <PagenationBtn>
            <AiOutlineDoubleLeft />
          </PagenationBtn>
          <PagenationBtn
            onClick={() => prevAndNextPageChangeHandler(currentPage - 1)}
          >
            <IoIosArrowBack />
          </PagenationBtn>
          {pages.map((data) => {
            return (
              <Pagenation
                className={data === currentPage ? `active` : ``}
                key={data}
                onClick={() => changePageHandler(data)}
              >
                {data + 1}
              </Pagenation>
            );
          })}
          <PagenationBtn
            onClick={() => prevAndNextPageChangeHandler(currentPage + 1)}
          >
            <IoIosArrowForward />
          </PagenationBtn>
          <PagenationBtn>
            <AiOutlineDoubleRight />
          </PagenationBtn>
        </PagenationWrapper>
      )}
    </WholeWrapper>
  );
};

export default withResizeDetector(Board);
