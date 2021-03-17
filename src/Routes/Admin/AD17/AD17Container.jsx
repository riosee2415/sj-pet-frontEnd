import React, { useEffect, useState } from "react";
import AD17Presenter from "./AD17Presenter";
import { useMutation, useQuery } from "@apollo/client";
import { MODIFY_USER_CURRENT_RIGHT } from "./AD17Queries.js";
import { GET_USERRIGHT } from "../AD12/AD12Queries";
import { GET_ALL_USER } from "../AD10/AD10Queries";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import { emptyCheck } from "../../../commonUtils";

export default ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [currentId, setCurrentId] = useState("");
  const [currentData, setCurrentData] = useState(null);

  const selectRight = useInput("");
  const searchName = useInput("");

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data: rDatum, refetch: rRefetch } = useQuery(GET_USERRIGHT);
  const { data: uDatum, refetch: uRefetch } = useQuery(GET_ALL_USER, {
    variables: {
      searchName: searchName.value,
    },
  });

  ////////////// - USE MUTATION- //////////////
  const [modifyUserCurrentRightMutation] = useMutation(
    MODIFY_USER_CURRENT_RIGHT
  );

  ////////////// - USE HANDLER- //////////////
  const userClickHandler = (data) => {
    setCurrentId(data._id);
    setCurrentData(data);
  };

  const rightChangeHandler = async () => {
    if (currentData.right.rightName === "개발사") {
      toast.error("개발사를 제어할 수 있는 권한이 없습니다.");
      return;
    }

    if (!emptyCheck(selectRight.value)) {
      toast.error("변경할 권한을 선택해주세요.");
      return;
    }

    const { data } = await modifyUserCurrentRightMutation({
      variables: {
        userId: currentData._id,
        rightId: selectRight.value,
      },
    });

    if (data.modifyUserCurrentRight) {
      toast.info(
        `${currentData && currentData.userId}님의 권한이 변경되었습니다.`
      );
      uRefetch();
      rRefetch();
    } else {
      toast.error("잠시 후 다시 시도 해주세요");
    }
  };

  ////////////// - USE EFFECT- ///////////////
  useEffect(() => {
    const isAdmin = sessionStorage.getItem("RDvjdQPDLV%DvQzl");

    console.log(isAdmin);

    if (isAdmin !== "9vjEMAZL3#ZMXLVI") {
      toast.error("권한이 없습니다.");
      history.push("/admin");
      return;
    }

    uRefetch();
    rRefetch();
  }, []);

  return (
    <AD17Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentId={currentId}
      currentData={currentData}
      selectRight={selectRight}
      searchName={searchName}
      //
      rDatum={rDatum && rDatum.getUserRight}
      uDatum={uDatum && uDatum.getAllUser}
      //
      userClickHandler={userClickHandler}
      rightChangeHandler={rightChangeHandler}
    />
  );
};
