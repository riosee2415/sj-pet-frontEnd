import React, { useEffect, useState, useRef } from "react";
import AD37Presenter from "./AD37Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_NEW_STORE_ADMIN } from "./AD37Queries.js";
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
  const { data: nDatum, refetch: nRefetch } = useQuery(GET_NEW_STORE_ADMIN);

  ////////////// - USE MUTATION- //////////////

  ////////////// - USE HANDLER- //////////////
  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/store",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);
    currentThumbnailPath.setValue(db_path);
    fileRef.current.value = null;

    setIsLoading(false);
  };

  const moveDetailPageHandler = (id) => {
    history.push(`/admin/newStoreDetailManagement/${id}`);
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    nRefetch();
  }, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD37Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      //
      nDatum={nDatum && nDatum.getNewStoreAdmin}
      //
      fileChangeHandler={fileChangeHandler}
      moveDetailPageHandler={moveDetailPageHandler}
    />
  );
};
