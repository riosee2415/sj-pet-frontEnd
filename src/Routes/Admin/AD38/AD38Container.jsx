import React, { useEffect, useState, useRef } from "react";
import AD38Presenter from "./AD38Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_NEW_STORE_ONE, UPDATE_NEW_STORE_ONE } from "./AD38Queries.js";
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
  const dataThumbnailPath = useInput(``);

  const [dataFlag, setDataFlag] = useState(true);

  ////////////// - VARIABLE- ////////////////
  const key = match.params.id;

  ////////////// - USE QUERY- ///////////////
  const {
    data: nData,
    loading,
    refetch: nRefetch,
  } = useQuery(GET_NEW_STORE_ONE, {
    variables: {
      id: key,
    },
  });

  if (!loading) {
    if (dataFlag) {
      dataId.setValue(nData.getNewStoreAdminOne._id);
      dataTitle.setValue(nData.getNewStoreAdminOne.title);
      dataThumbnailPath.setValue(nData.getNewStoreAdminOne.thumbnailPath);

      setDataFlag(false);
    }
  }

  ////////////// - USE MUTATION- //////////////
  const [updateNewStoreOneMutation] = useMutation(UPDATE_NEW_STORE_ONE);

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "PROJECT_NAME/uploads/FOLDER_NAME",
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

    const { data } = await updateNewStoreOneMutation({
      variables: {
        id: dataId.value,
        title: dataTitle.value,
        thumbnailPath: dataThumbnailPath.value,
      },
    });

    if (data.updateNewStoreOne) {
      toast.info("정보가 수정되었습니다.");
      history.push("/admin/newStoreManagement");
    } else {
      toast.error("잠시 후 다시 시도 해주세요.");
    }
  };

  const moveListPageHandler = () => {
    history.push("/admin/newStoreManagement");
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD38Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      dataTitle={dataTitle}
      dataThumbnailPath={dataThumbnailPath}
      //
      fileChangeHandler={fileChangeHandler}
      updateRoadShowHandler={updateRoadShowHandler}
      moveListPageHandler={moveListPageHandler}
    />
  );
};
