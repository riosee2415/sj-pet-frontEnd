import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM05Presenter = withSplitting(() => import("./MM05Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {
  CREATE_DIRECTREQUEST,
  GET_FAQ,
  GET_FAQ_TOTALPAGE,
  GET_NOTICEBOARD,
  GET_NOTICEBOARD_TOTALPAGE,
  GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT,
} from "./MM05Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const MM05Container = ({ history }) => {
  ////////////// - USE REF- ///////////////
  const conRef = useRef();
  const faqRef = useRef();

  ////////////// - USE STATE- ///////////////
  const inputName = useInput("");
  const inputMobile = useInput("");
  const inputEmail = useInput("");
  const inputLoc = useInput("");
  const inputMayPay = useInput("");
  const inputIsStore = useInput("");
  const inputDesc = useInput("");

  const [isAgree, setIsAgree] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  //
  const [currentTab, setCurrentTab] = useState(0);
  const [actionFaqView, setActionFaqView] = useState(null);
  const [currentType, setCurrentType] = useState(0);
  const [currentFaqPage, setCurrentFaqPage] = useState(0);
  const [currentFaqList, setCurrentFaqList] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(null);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");

  //
  const [currentNoticePage, setCurrentNoticePage] = useState(0);
  const [currentNoticeList, setCurrentNoticeList] = useState(0);
  const sortValue = useInput("createdAt");
  ////////////// - USE QUERY- ///////////////

  const { data: faqDatum, refetch: faqRefetch } = useQuery(GET_FAQ, {
    variables: {
      limit,
      currentPage: currentFaqPage,
      searchValue,
    },
  });

  const { data: pData, refetch: pRefetch } = useQuery(GET_FAQ_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const { data: nDatum, refetch: nRefetch } = useQuery(GET_NOTICEBOARD, {
    variables: {
      searchValue,
      limit,
      currentPage: currentNoticePage,
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

  const { data: pgData, refetch: pgRefetch } = useQuery(
    GET_NOTICEBOARD_TOTALPAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  ///////////// - USE MUTATION- /////////////
  const [createDirectRequestMutation] = useMutation(CREATE_DIRECTREQUEST);

  ///////////// - EVENT HANDLER- ////////////
  const createRequestHandler = () => {
    if (!inputName.value || inputName.value.trim() === "") {
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!inputMobile.value || inputMobile.value.trim() === "") {
      toast.error("연락처를 입력해주세요.");
      return;
    }
    if (!inputLoc.value || inputLoc.value.trim() === "") {
      toast.error("창업희망지역을 입력해주세요.");
      return;
    }
    if (!inputMayPay.value || inputMayPay.value.trim() === "") {
      toast.error("예상 창업 비용을 입력해주세요.");
      return;
    }
    if (!inputDesc.value || inputDesc.value.trim() === "") {
      toast.error("문의 내용을 입력해주세요.");
      return;
    }
    if (!isAgree) {
      toast.error("개인정보취급방침에 동의해주세요.");
      return;
    }

    confirmAlert({
      title: "가맹 상담",
      message: "가맹점 상담을 작성하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => createRequestHandlerAfter(),
        },
      ],
    });
  };

  const createRequestHandlerAfter = async () => {
    const { data } = await createDirectRequestMutation({
      variables: {
        name: inputName.value,
        loc: inputLoc.value,
        mobile: inputMobile.value,
        mayPay: inputMayPay.value,
        email: inputEmail.value,
        isExistStore: inputIsStore.value,
        description: inputDesc.value,
        isAgreement: true,
      },
    });

    if (data.createStoreContact) {
      toast.success("가맹점 상담을 신청하셨습니다.");
      inputName.setValue("");
      inputMobile.setValue("");
      inputEmail.setValue("");
      inputLoc.setValue("");
      inputMayPay.setValue("");
      inputIsStore.setValue("");
      inputDesc.setValue("");
      setIsAgree(false);
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

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

  const faqPrevAndNextPageChangeHandler = (page) => {
    let list = currentFaqList;

    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > pages.length - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    if ((currentFaqList + 1) * 10 === page) {
      list += 1;
    } else if (currentFaqList * 10 - 1 === page) {
      list -= 1;
    }

    setCurrentFaqList(list);
    setCurrentFaqPage(page);
  };

  const faqFirstPageChangeHandler = (page) => {
    let list = currentFaqList;

    if (parseInt(page / 10) <= currentFaqList) {
      list = 0;
    }
    setCurrentFaqList(list);
    setCurrentFaqPage(page);
  };

  const faqEndPageChangeHandler = (page) => {
    let list = currentFaqList;

    if (page) {
      list = parseInt((pages.length - 1) / 10);
    }

    setCurrentFaqList(list);
    setCurrentFaqPage(page - 1);
  };

  const noticePrevAndNextPageChangeHandler = (page) => {
    let list = currentNoticeList;

    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > pages.length - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    if ((currentNoticeList + 1) * 10 === page) {
      list += 1;
    } else if (currentNoticeList * 10 - 1 === page) {
      list -= 1;
    }

    setCurrentNoticeList(list);
    setCurrentNoticePage(page);
  };

  const noticeFirstPageChangeHandler = (page) => {
    let list = currentNoticeList;

    if (parseInt(page / 10) <= currentNoticeList) {
      list = 0;
    }
    setCurrentNoticeList(list);
    setCurrentNoticePage(page);
  };

  const noticeEndPageChangeHandler = (page) => {
    let list = currentNoticeList;

    if (page) {
      list = parseInt((pages.length - 1) / 10);
    }

    setCurrentNoticeList(list);
    setCurrentNoticePage(page - 1);
  };

  const changeFaqPageHandler = (page) => {
    setCurrentFaqPage(page);
  };

  const changeNoticePageHandler = (page) => {
    setCurrentNoticePage(page);
  };

  const searchHandler = () => {
    setCurrentFaqPage(0);
    setCurrentNoticePage(0);
    setSearchValue(inputSearch.value);
  };

  const scrollMoveHandler = (type) => {
    if (type === "가맹상담" && conRef.current) {
      scroll.scrollTo(conRef.current.offsetTop - 100);
    } else if (type === "가맹FAQ" && faqRef.current) {
      scroll.scrollTo(faqRef.current.offsetTop - 100);
    }
  };

  const moveLinkHandler = (link) => {
    history.push(`/contact/${link}`);
  };

  const moveWriteHandler = () => {
    history.push(`/contact-write`);
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    faqRefetch();
    pRefetch();
    nRefetch();
    tRefetch();
    pgRefetch();
    scroll.scrollTo(0);
  }, []);

  useEffect(() => {
    setActionFaqView(null);
  }, [currentFaqPage]);

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

  useEffect(() => {
    if (pgData) {
      const temp = [];

      for (let i = 0; i < pgData.getNoticeBoardTotalPageClient; i++)
        temp.push(i);

      setPages(temp);
    }
  }, [pgData]);

  return (
    <MM05Presenter
      conRef={conRef}
      faqRef={faqRef}
      //
      inputName={inputName}
      inputMobile={inputMobile}
      inputEmail={inputEmail}
      inputLoc={inputLoc}
      inputMayPay={inputMayPay}
      inputIsStore={inputIsStore}
      inputDesc={inputDesc}
      isAgree={isAgree}
      setIsAgree={setIsAgree}
      isToggle={isToggle}
      setIsToggle={setIsToggle}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      //
      createRequestHandler={createRequestHandler}
      ///////////////////// FAQ
      pages={pages}
      inputSearch={inputSearch}
      actionFaqView={actionFaqView}
      currentType={currentType}
      currentFaqList={currentFaqList}
      currentFaqPage={currentFaqPage}
      //
      faqDatum={faqDatum && faqDatum.getFaqDetail}
      pData={pData && pData.getFaqTotalPage}
      //
      toggleFaqAnswer={toggleFaqAnswer}
      changeFaqTypeHandler={changeFaqTypeHandler}
      faqPrevAndNextPageChangeHandler={faqPrevAndNextPageChangeHandler}
      faqFirstPageChangeHandler={faqFirstPageChangeHandler}
      faqEndPageChangeHandler={faqEndPageChangeHandler}
      changeFaqPageHandler={changeFaqPageHandler}
      searchHandler={searchHandler}
      scrollMoveHandler={scrollMoveHandler}
      /////////////// NOTICE
      currentNoticeList={currentNoticeList}
      currentNoticePage={currentNoticePage}
      limit={limit}
      sortValue={sortValue}
      //
      noticeDatum={nDatum && nDatum.getNoticeBoardClient}
      pageCnt={tData && tData.getNoticeBoardTotalPageOnlyCntClient}
      //
      moveLinkHandler={moveLinkHandler}
      moveWriteHandler={moveWriteHandler}
      noticePrevAndNextPageChangeHandler={noticePrevAndNextPageChangeHandler}
      noticeFirstPageChangeHandler={noticeFirstPageChangeHandler}
      noticeEndPageChangeHandler={noticeEndPageChangeHandler}
      changeNoticePageHandler={changeNoticePageHandler}
    />
  );
};

export default MM05Container;
