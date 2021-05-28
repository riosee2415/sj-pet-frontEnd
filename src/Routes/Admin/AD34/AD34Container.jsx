import React, { useEffect, useState, useRef } from "react";
import AD34Presenter from "./AD34Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STORE_ONE } from "./AD34Queries.js";
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

  const dataTitle = useInput(``);
  const dataAddress = useInput(``);
  const dataLnt = useInput(``);
  const dataAtt = useInput(``);
  const dataThumbnailPath = useInput(``);
  const dataTel = useInput(``);
  const dataWorkTime = useInput(``);

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////

  ////////////// - USE MUTATION- //////////////
  const [createStoreOneMutation] = useMutation(CREATE_STORE_ONE);

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

  const moveListPageHandler = () => {
    history.push("/admin/storeManagement");
  };

  const createRoadShowHandler = () => {
    confirm(
      `CREATE`,
      `입력하신 정보의 가맹점을 추가하시겠습니까?`,
      createRoadShowHandlerAfter,
      null
    );
  };

  const createRoadShowHandlerAfter = async () => {
    if (!emptyCheck(dataThumbnailPath.value)) {
      toast.error("썸네일 이미지는 필수 선택사항 입니다.");
      return;
    }
    if (!emptyCheck(dataTitle.value)) {
      toast.error("가맹점명은 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataAddress.value)) {
      toast.error("가맹점주소는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataAtt.value)) {
      toast.error("위도는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataLnt.value)) {
      toast.error("경도는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataTel.value)) {
      toast.error("연락처는 필수 입력사항 입니다.");
      return;
    }

    if (!emptyCheck(dataWorkTime.value)) {
      toast.error("영업시간은 필수 입력사항 입니다.");
      return;
    }

    const { data } = await createStoreOneMutation({
      variables: {
        title: dataTitle.value,
        address: dataAddress.value,
        lnt: dataLnt.value,
        att: dataAtt.value,
        thumbnailPath: dataThumbnailPath.value,
        tel: dataTel.value,
        workTime: dataWorkTime.value,
      },
    });

    if (data.createStoreOne) {
      toast.info("새로운 가맹점이 등록되었습니다.");
      history.push("/admin/storeManagement");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {}, []);

  useEffect(() => {}, [currentTab]);

  return (
    <AD34Presenter
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
      moveListPageHandler={moveListPageHandler}
      createRoadShowHandler={createRoadShowHandler}
    />
  );
};
