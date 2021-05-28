import React, { useEffect, useState, useRef } from "react";
import AD35Presenter from "./AD35Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BRAND, CREATE_BRAND } from "./AD35Queries.js";
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
  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  ///////////// - USE MUTATION- /////////////
  const [createBrandMutation] = useMutation(CREATE_BRAND);

  ///////////// - EVENT HANDLER- ////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/brand",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    setCurrentThumbnail(db_path);

    setIsLoading(false);
    fileRef.current.value = null;
  };

  const createBrandHandler = async () => {
    if (!currentThumbnail || currentThumbnail.trim() === "") {
      toast.error("썸네일 이미지는 필수 입니다.");
      return;
    }
    if (!currentTitle.value || currentTitle.value.trim() === "") {
      toast.error("제목은 필수 입니다.");
      return;
    }

    const { data } = await createBrandMutation({
      variables: {
        thumbnail: currentThumbnail,
        title: currentTitle.value,
      },
    });

    if (data.createBrand) {
      toast.info("CREATE BRAND!");

      setCurrentThumbnail("");
      currentTitle.setValue("");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };
  ////////////// - USE EFFECT- //////////////

  return (
    <AD35Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      //
      currentThumbnail={currentThumbnail}
      currentTitle={currentTitle}
      //

      fileChangeHandler={fileChangeHandler}
      createBrandHandler={createBrandHandler}
    />
  );
};
