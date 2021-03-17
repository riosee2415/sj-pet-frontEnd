import React, { useEffect, useState, useRef } from "react";
import AD09Presenter from "./AD09Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_EVENTBOARD_LIST,
  MODIFY_EVENTBOARD,
  MODIFY_EVENTBOARD_BASIC,
  DELETE_EVNET,
} from "./AD09Queries.js";
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
  const [currentDescription, setCurrentDescription] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const currentThumbnailPath = useInput();
  const currentTitle = useInput();
  const currentTerm = useInput();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data, refetch } = useQuery(GET_EVENTBOARD_LIST);

  ///////////// - USE MUTATION- /////////////
  const [modifyEventBoardMutation] = useMutation(MODIFY_EVENTBOARD);
  const [modifyEventBoardBasicMutation] = useMutation(MODIFY_EVENTBOARD_BASIC);
  const [deleteEventMutation] = useMutation(DELETE_EVNET);

  ///////////// - EVENT HANDLER- ////////////
  const eventClickHandler = (data) => {
    setCurrentId(data._id);
    setCurrentData(data);
    currentTitle.setValue(data.title);
    currentTerm.setValue(data.eventTerm);
    currentThumbnailPath.setValue(data.thumbnail);
    setCurrentDescription(data.description);
  };

  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/eventBoard",
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

  const descriptionSaveHandler = async () => {
    console.log(currentDescription);
    console.log(currentId);

    const { data } = await modifyEventBoardMutation({
      variables: {
        id: currentId,
        description: currentDescription,
      },
    });

    if (data.modifyEventBoard) {
      toast.info("UPDATE CONTENT!");
      refetch();
      dialogToggle();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const basicInfoSaveHandler = async () => {
    const { data } = await modifyEventBoardBasicMutation({
      variables: {
        id: currentId,
        thumbnail: currentThumbnailPath.value,
        title: currentTitle.value,
        eventTerm: currentTerm.value,
      },
    });

    if (data.modifyEventBoardBasic) {
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
    const { data } = await deleteEventMutation({
      variables: {
        id: currentId,
      },
    });

    if (data.deleteEvent) {
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
    <AD09Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      currentId={currentId}
      currentData={currentData}
      currentThumbnailPath={currentThumbnailPath}
      currentTitle={currentTitle}
      currentTerm={currentTerm}
      openDialog={openDialog}
      currentDescription={currentDescription}
      setCurrentDescription={setCurrentDescription}
      //
      datum={data && data.getEventBoardList}
      //
      eventClickHandler={eventClickHandler}
      fileChangeHandler={fileChangeHandler}
      dialogToggle={dialogToggle}
      descriptionSaveHandler={descriptionSaveHandler}
      basicInfoSaveHandler={basicInfoSaveHandler}
      deleteHandler={deleteHandler}
    />
  );
};
