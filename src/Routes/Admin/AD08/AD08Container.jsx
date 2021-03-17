import React, { useEffect, useState, useRef } from "react";
import AD08Presenter from "./AD08Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_EVENTBOARD, CREATE_EVENTBOARD } from "./AD08Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fileRef = useRef();

  const [currentThumbnail, setCurrentThumbnail] = useState("");

  const currentTitle = useInput("");
  const [currentDescription, setCurrentDescription] = useState("");
  const currentEventTerm = useInput("");
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  ///////////// - USE MUTATION- /////////////
  const [createEventBoardMutation] = useMutation(CREATE_EVENTBOARD);

  ///////////// - EVENT HANDLER- ////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/eventBoard",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    setCurrentThumbnail(db_path);

    setIsLoading(false);
    fileRef.current.value = null;
  };

  const createEventBoardHandler = async () => {
    if (!currentThumbnail || currentThumbnail.trim() === "") {
      toast.error("상품 이미지는 필수 입니다.");
      return;
    }
    if (!currentTitle.value || currentTitle.value.trim() === "") {
      toast.error("제목은 필수 입니다.");
      return;
    }
    if (!currentDescription || currentDescription.trim() === "") {
      toast.error("게시판 내용은 필수 입니다.");
      return;
    }
    if (!currentEventTerm.value || currentEventTerm.value.trim() === "") {
      toast.error("이벤트 기간은 필수 입니다.");
      return;
    }

    const { data } = await createEventBoardMutation({
      variables: {
        thumbnail: currentThumbnail,
        title: currentTitle.value,
        eventTerm: currentEventTerm.value,
        description: currentDescription,
      },
    });

    if (data.createEventBoard) {
      toast.info("CREATE EVENTBOARD!");

      setCurrentThumbnail("");
      currentTitle.setValue("");
      currentEventTerm.setValue("");
      setCurrentDescription("");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };
  ////////////// - USE EFFECT- //////////////

  return (
    <AD08Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      //
      currentThumbnail={currentThumbnail}
      currentTitle={currentTitle}
      currentDescription={currentDescription}
      setCurrentDescription={setCurrentDescription}
      currentEventTerm={currentEventTerm}
      //

      fileChangeHandler={fileChangeHandler}
      createEventBoardHandler={createEventBoardHandler}
    />
  );
};
