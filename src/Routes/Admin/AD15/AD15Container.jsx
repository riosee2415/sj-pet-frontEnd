import React, { useEffect, useState } from "react";
import AD15Presenter from "./AD15Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_USERS,
  EXIT_USER,
  GET_USERS_BY_BLACK,
  CANCEL_BLACK_USER,
} from "./AD15Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const [currentData, setCurrentData] = useState(null);

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const {
    data: userDatum,
    loading: userLoading,
    refetch: userRefetch,
  } = useQuery(GET_USERS_BY_BLACK, {
    variables: {
      searchValue,
    },
  });

  ///////////// - USE MUTATION- /////////////
  const [cancelBlackUserMutation] = useMutation(CANCEL_BLACK_USER);

  ///////////// - EVENT HANDLER- ////////////
  const blackCancleHandler = (id) => {
    confirmAlert({
      title: "CANCEL BLACKLIST",
      message: "선택하신 블랙리스트 회원을 정상처리 하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => blackCancleHandlerAfter(id),
        },
      ],
    });
  };

  const blackCancleHandlerAfter = async (id) => {
    const { data } = await cancelBlackUserMutation({
      variables: {
        id,
      },
    });

    if (data.cancelblackUser) {
      toast.info("CANCLE BLACKLIST!");
      userRefetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    userRefetch();
  }, []);

  return (
    <AD15Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      openDialog={openDialog}
      currentData={currentData}
      //
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      //
      userDatum={userDatum && userDatum.getUsersByBlack}
      //
      blackCancleHandler={blackCancleHandler}
    />
  );
};
