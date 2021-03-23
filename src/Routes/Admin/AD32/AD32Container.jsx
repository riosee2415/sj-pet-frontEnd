import React, { useEffect, useState, useRef } from "react";
import AD32Presenter from "./AD32Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_STORYVIEW, CREATE_STORYVIEW } from "./AD32Queries.js";
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
  const currentContent = useInput("");
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  ///////////// - USE MUTATION- /////////////
  const [createStoryViewMutation] = useMutation(CREATE_STORYVIEW);

  ///////////// - EVENT HANDLER- ////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/storyView",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    setCurrentThumbnail(db_path);

    setIsLoading(false);
    fileRef.current.value = null;
  };

  const createStoryViewHandler = async () => {
    if (!currentThumbnail || currentThumbnail.trim() === "") {
      toast.error("썸네일 이미지는 필수 입니다.");
      return;
    }
    if (!currentTitle.value || currentTitle.value.trim() === "") {
      toast.error("제목은 필수 입니다.");
      return;
    }
    if (!currentContent || currentContent.value.trim() === "") {
      toast.error("스토리 내용은 필수 입니다.");
      return;
    }

    const { data } = await createStoryViewMutation({
      variables: {
        thumbnail: currentThumbnail,
        title: currentTitle.value,
        content: currentContent.value,
      },
    });

    if (data.createStoryView) {
      toast.info("CREATE STORYVIEW!");

      setCurrentThumbnail("");
      currentTitle.setValue("");
      currentContent.setValue("");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };
  ////////////// - USE EFFECT- //////////////

  return (
    <AD32Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      //
      currentThumbnail={currentThumbnail}
      currentTitle={currentTitle}
      currentContent={currentContent}
      //

      fileChangeHandler={fileChangeHandler}
      createStoryViewHandler={createStoryViewHandler}
    />
  );
};
