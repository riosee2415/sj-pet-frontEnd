import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM05Presenter = withSplitting(() => import("./MM05Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { GET_FAQ, GET_FAQ_TOTALPAGE } from "./MM05Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";

const MM05Container = ({ history }) => {
  ////////////// - USE REF- ///////////////
  const conRef = useRef();
  const faqRef = useRef();

  ////////////// - USE STATE- ///////////////
  const inputName = useInput("");
  const inputMobile = useInput("");
  const inputEmail = useInput("");
  const inputEmailDomain = useInput("");
  const selectEmailDomain = useInput("");
  const inputLoc = useInput("");
  const inputMayPay = useInput("");
  const inputIsStore = useInput("");
  const inputDesc = useInput("");

  const [isAgree, setIsAgree] = useState(false);

  //
  const [actionFaqView, setActionFaqView] = useState(null);
  const [currentType, setCurrentType] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(15);
  const [pages, setPages] = useState(null);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");

  ////////////// - USE QUERY- ///////////////

  const { data: faqDatum, refetch: faqRefetch } = useQuery(GET_FAQ, {
    variables: {
      limit,
      currentPage,
      searchValue,
    },
  });

  const { data: pData, refetch: pRefetch } = useQuery(GET_FAQ_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  ///////////// - USE MUTATION- /////////////

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
    if (!inputEmail.value || inputEmail.value.trim() === "") {
      toast.error("이메일을 입력해주세요.");
      return;
    }
    if (!selectEmailDomain.value || selectEmailDomain.value.trim() === "") {
      toast.error("이메일을 선택해주세요.");
      return;
    }
    if (
      selectEmailDomain.value === "직접 입력" &&
      (!inputEmailDomain.value || inputEmailDomain.value.trim() === "")
    ) {
      toast.error("이메일을 입력해주세요.");
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
    if (!isAgree.value || isAgree.value.trim() === "") {
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
      variable: {
        name: inputName.value,
        loc: inputLoc.value,
        mobile: inputMobile.value,
        mayPay: inputMayPay.value,
        email:
          inputEmail.value + `@` + selectEmailDomain.value === "직접 입력"
            ? inputEmailDomain.value
            : selectEmailDomain.value,
        isExistStore: inputIsStore.value,
        description: inputDesc.value,
        isAgreement: true,
      },
    });

    if (data.createDirectRequest) {
      toast.error("가맹점 상담을 신청하셨습니다.");
      inputName.setValue("");
      inputMobile.setValue("");
      inputEmail.setValue("");
      inputEmailDomain.setValue("");
      selectEmailDomain.setValue("");
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

  const scrollMoveHandler = (type) => {
    if (type === "가맹상담" && conRef.current) {
      scroll.scrollTo(conRef.current.offsetTop - 85);
    } else if (type === "가맹FAQ" && faqRef.current) {
      scroll.scrollTo(faqRef.current.offsetTop - 100);
    }
  };

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    faqRefetch();
    pRefetch();
    scroll.scrollTo(0);
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
    <MM05Presenter
      conRef={conRef}
      faqRef={faqRef}
      //
      inputName={inputName}
      inputMobile={inputMobile}
      inputEmail={inputEmail}
      inputEmailDomain={inputEmailDomain}
      selectEmailDomain={selectEmailDomain}
      inputLoc={inputLoc}
      inputMayPay={inputMayPay}
      inputIsStore={inputIsStore}
      inputDesc={inputDesc}
      isAgree={isAgree}
      setIsAgree={setIsAgree}
      //
      createRequestHandler={createRequestHandler}
      ///////////////////// FAQ
      inputSearch={inputSearch}
      pages={pages}
      currentPage={currentPage}
      actionFaqView={actionFaqView}
      currentType={currentType}
      //
      faqDatum={faqDatum && faqDatum.getFaqDetail}
      //
      toggleFaqAnswer={toggleFaqAnswer}
      changeFaqTypeHandler={changeFaqTypeHandler}
      prevAndNextPageChangeHandler={prevAndNextPageChangeHandler}
      changePageHandler={changePageHandler}
      searchHandler={searchHandler}
      scrollMoveHandler={scrollMoveHandler}
    />
  );
};

export default MM05Container;
