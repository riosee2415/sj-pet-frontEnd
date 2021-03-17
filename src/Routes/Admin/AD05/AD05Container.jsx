import React, { useEffect, useState } from "react";
import AD05Presenter from "./AD05Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_NOTICEBOARD_TYPE,
  CREATE_NOTICEBOARD_TYPE,
  DELETE_NOTICEBOARD_TYPE,
} from "./AD05Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [typeValue, setTypeValue] = useState("");

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const {
    data: typeDatum,
    loading: typeLoading,
    refetch: typeRefetch,
  } = useQuery(GET_NOTICEBOARD_TYPE);

  ///////////// - USE MUTATION- /////////////

  const [createNoticeBoardTypeMutation] = useMutation(CREATE_NOTICEBOARD_TYPE, {
    variables: {
      value: typeValue,
    },
  });
  const [deleteNoticeBoardTypeMutation] = useMutation(DELETE_NOTICEBOARD_TYPE);

  ///////////// - EVENT HANDLER- ////////////
  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      registerTypeHandler();
    }
  };

  const registerTypeHandler = async () => {
    if (typeValue === "" || typeValue.trim() === "") {
      toast.error("NOTICE TYPE IS MUST!");
      return;
    }

    const { data } = await createNoticeBoardTypeMutation();

    if (data.createNoticeBoardType) {
      toast.info("공지사항 유형이 추가되었습니다.");
      typeRefetch();
      setTypeValue("");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const typeDeleteHandler = (id) => {
    confirmAlert({
      title: "DELETE NOTICE BOARD TYPE DATA",
      message: "선택하신 유형을 삭제하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => typeDeleteHandlerAfter(id),
        },
      ],
    });
  };

  const typeDeleteHandlerAfter = async (id) => {
    const { data } = await deleteNoticeBoardTypeMutation({
      variables: {
        id,
      },
    });

    if (data.deleteNoticeBoardType) {
      toast.info("공지사항 유형이 삭제되었습니다.");
      typeRefetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////

  return (
    <AD05Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      typeValue={typeValue}
      setTypeValue={setTypeValue}
      //
      typeDatum={typeDatum && typeDatum.getNoticeBoardType}
      //
      registerTypeHandler={registerTypeHandler}
      keyDownHandler={keyDownHandler}
      typeDeleteHandler={typeDeleteHandler}
    />
  );
};
