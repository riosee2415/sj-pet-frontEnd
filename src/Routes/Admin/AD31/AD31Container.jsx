import React, { useEffect, useState, useRef } from "react";
import AD31Presenter from "./AD31Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_STORE_ONE,
  UPDATE_STORE_ONE,
  DELETE_STORE_ONE,
} from "./AD31Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history, match }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef();

  const dataId = useInput(``);
  const dataTitle = useInput(``);
  const dataAddress = useInput(``);
  const dataLnt = useInput(``);
  const dataAtt = useInput(``);
  const dataThumbnailPath = useInput(``);
  const dataTel = useInput(``);
  const dataWorkTime = useInput(``);

  const [dataFlag, setDataFlag] = useState(true);

  ////////////// - VARIABLE- ////////////////
  const key = match.params.id;

  ////////////// - USE QUERY- ///////////////
  const { data: sData, loading, refetch: sRefetch } = useQuery(GET_STORE_ONE, {
    variables: {
      id: key,
    },
  });

  if (!loading) {
    if (dataFlag) {
      dataId.setValue(sData.getStoreOne._id);
      dataTitle.setValue(sData.getStoreOne.title);
      dataAddress.setValue(sData.getStoreOne.address);
      dataLnt.setValue(sData.getStoreOne.lnt);
      dataAtt.setValue(sData.getStoreOne.att);
      dataThumbnailPath.setValue(sData.getStoreOne.thumbnailPath);
      dataTel.setValue(sData.getStoreOne.tel);
      dataWorkTime.setValue(sData.getStoreOne.workTime);

      setDataFlag(false);
    }
  }

  ////////////// - USE MUTATION- //////////////
  const [updateStoreOneMutation] = useMutation(UPDATE_STORE_ONE);
  const [deleteStoreOneMutation] = useMutation(DELETE_STORE_ONE);

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/store",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    dataThumbnailPath.setValue(db_path);
    fileRef.current.value = null;

    setIsLoading(false);
  };

  const updateRoadShowHandler = () => {
    confirm(
      `UPDATE`,
      `변경된 내용을 저장하시겠습니까?`,
      updateRoadShowHandlerAfter,
      null
    );
  };

  const updateRoadShowHandlerAfter = async () => {
    if (!emptyCheck(dataTitle.value)) {
      toast.error("가맹점명은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataAddress.value)) {
      toast.error("가맹점주소는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataAtt.value)) {
      toast.error("위도는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataLnt.value)) {
      toast.error("경도는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataTel.value)) {
      toast.error("연락처는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataWorkTime.value)) {
      toast.error("영업시간은 필수 입력사항 입니다.");
      return;
    }

    const { data } = await updateStoreOneMutation({
      variables: {
        id: dataId.value,
        title: dataTitle.value,
        address: dataAddress.value,
        att: dataAtt.value,
        lnt: dataLnt.value,
        thumbnailPath: dataThumbnailPath.value,
        tel: dataTel.value,
        workTime: dataWorkTime.value,
      },
    });

    if (data.updateStoreOne) {
      toast.info("정보가 수정되었습니다.");
      history.push("/admin/storeManagement");
    } else {
      toast.error("잠시 후 다시 시도 해주세요.");
    }
  };

  const moveListPageHandler = () => {
    history.push("/admin/storeManagement");
  };

  const deleteRoadShowHandler = () => {
    confirm(
      `DELETE`,
      `해당 가맹점 정보를 삭제하시겠습니까?`,
      deleteRoadShowHandlerAfter,
      null
    );
  };

  const deleteRoadShowHandlerAfter = async () => {
    const { data } = await deleteStoreOneMutation({
      variables: {
        id: dataId.value,
      },
    });

    if (data.deleteStoreOne) {
      toast.info("가맹점이 삭제되었습니다.");
      history.push("/admin/storeManagement");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    sRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD31Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      dataTitle={dataTitle}
      dataAddress={dataAddress}
      dataLnt={dataLnt}
      dataAtt={dataAtt}
      dataThumbnailPath={dataThumbnailPath}
      dataTel={dataTel}
      dataWorkTime={dataWorkTime}
      //
      fileChangeHandler={fileChangeHandler}
      updateRoadShowHandler={updateRoadShowHandler}
      moveListPageHandler={moveListPageHandler}
      deleteRoadShowHandler={deleteRoadShowHandler}
    />
  );
};
