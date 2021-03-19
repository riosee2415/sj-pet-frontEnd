import React, { useEffect, useState, useRef } from "react";
import AD31Presenter from "./AD31Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { GET_STORE_ONE } from "./AD31Queries.js";
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

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

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
    />
  );
};
