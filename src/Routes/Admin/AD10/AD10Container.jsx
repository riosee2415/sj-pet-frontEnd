import React, { useEffect, useState } from "react";
import AD10Presenter from "./AD10Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_USER,
  MODIFY_EXIT_USER,
  MODIFY_BLACK_USER,
} from "./AD10Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import confirm from "../../../Components/confirm/confirm";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const searchName = useInput("");

  const [currentData, setCurrentData] = useState(null);

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data: uDatum, refetch: uRefetch } = useQuery(GET_ALL_USER, {
    variables: {
      searchName: searchName.value,
    },
  });

  ///////////// - USE MUTATION- /////////////
  const [modifyExitUserMutation] = useMutation(MODIFY_EXIT_USER);
  const [modifyBlackUserMutation] = useMutation(MODIFY_BLACK_USER);

  ///////////// - EVENT HANDLER- ////////////
  const dialogToggle = (data = null) => {
    setOpenDialog(!openDialog);
    setCurrentData(data);
  };

  const blackListHandler = (current) => {
    if (current !== false) {
      toast.error("이미 처리 되어있습니다.");
      return;
    }

    confirm(
      `USER CONTROLL`,
      `현재 사용자를 정지 하시겠습니까?`,
      blackListHandlerAfter,
      currentData._id
    );
  };

  const blackListHandlerAfter = async (id) => {
    const { data } = await modifyBlackUserMutation({
      variables: {
        id,
      },
    });

    if (data.modifyBlackUser) {
      toast.info("처리 완료 되었습니다.");
      dialogToggle();
      uRefetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const exitHandler = (current) => {
    if (current !== false) {
      toast.error("이미 처리 되어있습니다.");
      return;
    }

    confirm(
      `USER CONTROLL`,
      `현재 사용자를 탈퇴 하시겠습니까?`,
      exitHandlerAfter,
      currentData._id
    );
  };

  const exitHandlerAfter = async (id) => {
    const { data } = await modifyExitUserMutation({
      variables: {
        id,
      },
    });

    if (data.modifyExitUser) {
      toast.info("처리 완료 되었습니다.");
      dialogToggle();
      uRefetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    uRefetch();
    setCurrentData(null);
  }, []);

  return (
    <AD10Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      searchName={searchName}
      openDialog={openDialog}
      currentData={currentData}
      //
      uDatum={uDatum && uDatum.getAllUser}
      //
      dialogToggle={dialogToggle}
      blackListHandler={blackListHandler}
      exitHandler={exitHandler}
    />
  );
};
