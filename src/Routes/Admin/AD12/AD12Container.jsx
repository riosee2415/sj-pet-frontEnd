import React, { useEffect, useState } from "react";
import AD12Presenter from "./AD12Presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_USERRIGHT,
  GET_DEFAULTUSERRIGHT,
  MODIFY_RIGHT,
  RIGHT_SORT_CHANGE,
  DELETE_USERRIGHT,
  CREATE_USERRIGHT,
  MODIFY_DEFAULTUSERRIGHT,
} from "./AD12Queries.js";
import { toast } from "react-toastify";
import storageFn from "../../../fsStorage";
import useInput from "../../../Components/Hooks/useInput";
import confirm from "../../../Components/confirm/confirm";
import { emptyCheck } from "../../../commonUtils";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const currentRightName = useInput("");
  const currentisAdminLogin = useInput(false);

  const selectDefaultId = useInput("");

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const { data: rDatum, refetch: rRefetch } = useQuery(GET_USERRIGHT);
  const { data: dDatum, refetch: dRefetch } = useQuery(GET_DEFAULTUSERRIGHT);

  ///////////// - USE MUTATION- /////////////
  const [modifyRightMutation] = useMutation(MODIFY_RIGHT);
  const [deleteUserRightMutation] = useMutation(DELETE_USERRIGHT);
  const [rightSortChangeMutation] = useMutation(RIGHT_SORT_CHANGE);
  const [createUserRightMutation] = useMutation(CREATE_USERRIGHT);
  const [modifyDefaultUserRightMutation] = useMutation(MODIFY_DEFAULTUSERRIGHT);

  ///////////// - EVENT HANDLER- ////////////
  const clickRightHandler = (data) => {
    setCurrentId(data._id);
    currentRightName.setValue(data.rightName);
    currentisAdminLogin.setValue(data.isAdminLogin);
  };

  const adminToggleHandler = () => {
    currentisAdminLogin.setValue(!currentisAdminLogin.value);
  };

  const updateRightHandler = async () => {
    if (currentRightName.value === "개발사") {
      toast.error("현재 권한으로 접근할 수 없습니다.");
      return;
    }

    const { data } = await modifyRightMutation({
      variables: {
        id: currentId,
        rightName: currentRightName.value,
        isAdminLogin: Boolean(currentisAdminLogin.value),
      },
    });

    if (data.modifyRight) {
      toast.info("정보가 수정되었습니다.");
      rRefetch();
      dRefetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const rightSortChange = async (type, sort, id) => {
    if (sort === 99) {
      toast.error("현재 권한으로 접근할 수 없습니다.");
      return;
    }

    if (type === 0) {
      const { data } = await rightSortChangeMutation({
        variables: {
          id,
          sort: parseInt(sort + 1),
        },
      });

      if (data.rightSortChange) {
        rRefetch();
        dRefetch();
      } else {
        toast.error("잠시 후 다시 시도해주세요.");
      }
    } else {
      if (sort === 1) {
        toast.error("우선순위를 더 이상 올릴 수 없습니다.");
        return;
      }

      const { data } = await rightSortChangeMutation({
        variables: {
          id,
          sort: parseInt(sort - 1),
        },
      });

      if (data.rightSortChange) {
        rRefetch();
        dRefetch();
      } else {
        toast.error("잠시 후 다시 시도해주세요.");
      }
    }
  };

  const userRightDelete = (id) => {
    confirm(
      `DELETE RIGHT`,
      `선택하신 권한을 삭제하시겠습니까?`,
      userRightDeleteAfter,
      id
    );
  };

  const userRightDeleteAfter = async (id) => {
    if (currentRightName.value === "개발사") {
      toast.error("현재 권한으로 접근할 수 없습니다.");
      return;
    }

    const { data } = await deleteUserRightMutation({
      variables: {
        id,
      },
    });

    if (data.deleteUserRight) {
      toast.info("권한이 삭제되었습니다.");
      rRefetch();
      dRefetch();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const dialogToggle = () => {
    setOpenDialog(!openDialog);
  };

  const createUserRight = async () => {
    if (!emptyCheck(currentRightName.value)) {
      toast.error("권한명은 필수 입니다.");
      return;
    }

    const { data } = await createUserRightMutation({
      variables: {
        rightName: currentRightName.value,
        isAdminLogin: Boolean(currentisAdminLogin.value),
        sort: parseInt(rDatum && rDatum.getUserRight.length + 1),
      },
    });

    if (data.createUserRight) {
      toast.info("권한이 추가 되었습니다.");
      rRefetch();
      dRefetch();
      dialogToggle();
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  const modifyDefaultUserRight = async () => {
    if (!emptyCheck(selectDefaultId.value)) {
      toast.error("권한 선택은 필수 입니다.");
      return;
    }

    const { data } = await modifyDefaultUserRightMutation({
      variables: {
        id: dDatum && dDatum.getDefaultUserRight[0]._id,
        rightId: selectDefaultId.value,
      },
    });

    if (data.modifyDefaultUserRight) {
      toast.info("기본값 설정이 변경되었습니다.");
      rRefetch();
      dRefetch();
      selectDefaultId.setValue("");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    currentisAdminLogin.setValue(false);
    currentRightName.setValue("");
    setCurrentId("");
  }, [openDialog]);

  return (
    <AD12Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      currentId={currentId}
      currentRightName={currentRightName}
      currentisAdminLogin={currentisAdminLogin}
      openDialog={openDialog}
      selectDefaultId={selectDefaultId}
      //
      rDatum={rDatum && rDatum.getUserRight}
      dData={dDatum && dDatum.getDefaultUserRight[0]}
      //
      clickRightHandler={clickRightHandler}
      adminToggleHandler={adminToggleHandler}
      updateRightHandler={updateRightHandler}
      rightSortChange={rightSortChange}
      userRightDelete={userRightDelete}
      dialogToggle={dialogToggle}
      createUserRight={createUserRight}
      modifyDefaultUserRight={modifyDefaultUserRight}
    />
  );
};
