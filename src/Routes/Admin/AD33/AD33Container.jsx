import React, { useEffect, useState, useRef } from "react";
import AD33Presenter from "./AD33Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_STORYVIEW_LIST,
  MODIFY_STORYVIEW,
  MODIFY_STORYVIEW_BASIC,
  DELETE_STORYVIEW,
} from "./AD33Queries.js";
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
  const [currentContent, setCurrentContent] = useState();
  const currentThumbnailPath = useInput();
  const currentTitle = useInput();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data, refetch } = useQuery(GET_STORYVIEW_LIST);

  ///////////// - USE MUTATION- /////////////
  const [modifyStoryViewMutation] = useMutation(MODIFY_STORYVIEW);
  const [modifyStoryViewBasicMutation] = useMutation(MODIFY_STORYVIEW_BASIC);
  const [deleteStoryViewMutation] = useMutation(DELETE_STORYVIEW);

  ///////////// - EVENT HANDLER- ////////////
  const storyViewClickHandler = (data) => {
    setCurrentId(data._id);
    setCurrentData(data);
    currentTitle.setValue(data.title);
    currentThumbnailPath.setValue(data.thumbnail);
    setCurrentContent(data.content);
  };

  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/storyView",
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

  const contentSaveHandler = async () => {
    const { data } = await modifyStoryViewMutation({
      variables: {
        id: currentId,
        content: currentContent,
      },
    });

    if (data.modifyStoryView) {
      toast.info("UPDATE CONTENT!");
      refetch();
      dialogToggle();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const basicInfoSaveHandler = async () => {
    const { data } = await modifyStoryViewBasicMutation({
      variables: {
        id: currentId,
        thumbnail: currentThumbnailPath.value,
        title: currentTitle.value,
      },
    });

    if (data.modifyStoryViewBasic) {
      toast.info("UPDATE CONTENT!");
      refetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const deleteHandler = () => {
    confirmAlert({
      title: "DELETE EVENT",
      message: "선택하신 이벤트를 삭제 하시겠습니까 ?",
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
    const { data } = await deleteStoryViewMutation({
      variables: {
        id: currentId,
      },
    });

    if (data.deleteStoryView) {
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
    <AD33Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      currentId={currentId}
      currentData={currentData}
      currentThumbnailPath={currentThumbnailPath}
      currentTitle={currentTitle}
      openDialog={openDialog}
      currentContent={currentContent}
      setCurrentContent={setCurrentContent}
      //
      datum={data && data.getStoryViewList}
      //
      storyViewClickHandler={storyViewClickHandler}
      fileChangeHandler={fileChangeHandler}
      dialogToggle={dialogToggle}
      contentSaveHandler={contentSaveHandler}
      basicInfoSaveHandler={basicInfoSaveHandler}
      deleteHandler={deleteHandler}
    />
  );
};
