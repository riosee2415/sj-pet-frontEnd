import React, { useEffect, useState, useRef } from "react";
import AD30Presenter from "./AD30Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {} from "./AD30Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck } from "../../../commonUtils";
import confirm from "../../../Components/confirm/confirm";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "PROJECT_NAME/uploads/FOLDER_NAME",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    currentThumbnailPath.setValue(db_path);
    fileRef.current.value = null;

    setIsLoading(false);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD30Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      //
      fileChangeHandler={fileChangeHandler}
    />
  );
};
