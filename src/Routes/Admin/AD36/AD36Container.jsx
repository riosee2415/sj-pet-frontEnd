import React, { useEffect, useState, useRef } from "react";
import AD36Presenter from "./AD36Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_BRAND_LIST,
  MODIFY_BRAND_BASIC,
  DELETE_BRAND,
} from "./AD36Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef();

  const [currentId, setCurrentId] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const currentThumbnailPath = useInput();
  const currentTitle = useInput();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data, refetch } = useQuery(GET_BRAND_LIST);

  ///////////// - USE MUTATION- /////////////
  const [modifyBrandBasicMutation] = useMutation(MODIFY_BRAND_BASIC);
  const [deleteBrandMutation] = useMutation(DELETE_BRAND);

  ///////////// - EVENT HANDLER- ////////////
  const brandClickHandler = (data) => {
    setCurrentId(data._id);
    setCurrentData(data);
    currentTitle.setValue(data.title);
    currentThumbnailPath.setValue(data.thumbnail);
  };

  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/brand",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    currentThumbnailPath.setValue(db_path);

    setIsLoading(false);
    fileRef.current.value = null;
  };

  const dialogToggle = () => {
    setOpenDialog(!openDialog);
  };

  const basicInfoSaveHandler = async () => {
    const { data } = await modifyBrandBasicMutation({
      variables: {
        id: currentId,
        thumbnail: currentThumbnailPath.value,
        title: currentTitle.value,
      },
    });

    if (data.modifyBrandBasic) {
      toast.info("UPDATE CONTENT!");
      refetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const deleteHandler = () => {
    confirmAlert({
      title: "DELETE EVENT",
      message: "선택하신 브랜드를 삭제 하시겠습니까 ?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => deleteHandlerAfter(),
        },
      ],
    });
  };

  const deleteHandlerAfter = async () => {
    const { data } = await deleteBrandMutation({
      variables: {
        id: currentId,
      },
    });

    if (data.deleteBrand) {
      toast.info("DELETE CONTENT!");
      refetch();
      setCurrentData(null);
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    refetch();
  }, []);

  return (
    <AD36Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      currentId={currentId}
      currentData={currentData}
      currentThumbnailPath={currentThumbnailPath}
      currentTitle={currentTitle}
      openDialog={openDialog}
      //
      datum={data && data.getBrandList}
      //
      brandClickHandler={brandClickHandler}
      fileChangeHandler={fileChangeHandler}
      dialogToggle={dialogToggle}
      basicInfoSaveHandler={basicInfoSaveHandler}
      deleteHandler={deleteHandler}
    />
  );
};
