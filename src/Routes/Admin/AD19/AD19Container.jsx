import React, { useEffect, useRef, useState } from "react";
import AD19Presenter from "./AD19Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_STORECONTACT,
  MODIFY_STORECONTACT_COMPLETE,
} from "./AD19Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [currentData, setCurrentData] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [currentMemo, setCurrentMemo] = useState("");
  const [currentFiles, setCurrentFiles] = useState(null);

  const descRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const {
    data: dqDatum,
    loading: dqLoading,
    refetch: dqRefetch,
  } = useQuery(GET_STORECONTACT, {
    variables: {
      isComplete: currentTab === 0 ? false : true,
    },
  });

  ///////////// - USE MUTATION- /////////////
  const [modifyStoreContactCompleteMutation] = useMutation(
    MODIFY_STORECONTACT_COMPLETE,
    {
      variables: {
        id: currentId,
      },
    }
  );

  ///////////// - EVENT HANDLER- ////////////
  const getDetailDataHandler = (description, id) => {
    setCurrentId(id);
    descRef.current.innerHTML = description;
  };

  const completeHandler = () => {
    confirmAlert({
      title: "COMPLETE STORECONTACT",
      message: "문의 처리를 완료하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => completeHandlerAfter(),
        },
      ],
    });
  };

  const completeHandlerAfter = async () => {
    const { data } = await modifyStoreContactCompleteMutation({
      variables: {
        id: currentId,
      },
    });

    if (data.modifyStoreContactComplete) {
      toast.info("UPDATE STORECONTACT!");
      dqRefetch();
      descRef.current.innerHTML = "";
    } else {
      toast.error("잠시 후 다시 시도 해주세요");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    if (sessionStorage.getItem("CXKLJHQOUASDLJKX") === "LJHUQKLJHALXKJDH") {
      history.goBack();
    }
  }, []);

  useEffect(() => {
    descRef.current.innerHTML = "";
    dqRefetch();
  }, [currentTab]);

  return (
    <AD19Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentData={currentData}
      setCurrentData={setCurrentData}
      currentId={currentId}
      currentMemo={currentMemo}
      setCurrentMemo={setCurrentMemo}
      currentFiles={currentFiles}
      //
      descRef={descRef}
      //
      dqDatum={dqDatum && dqDatum.getStoreContact}
      //
      getDetailDataHandler={getDetailDataHandler}
      completeHandler={completeHandler}
    />
  );
};
