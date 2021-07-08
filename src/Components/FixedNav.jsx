import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Text,
  Wrapper,
  Image,
  CommonButton,
  TextInput,
} from "../Components/CommonComponents";
import Theme from "../Styles/Theme";
import { translate } from "../Components/AnimationCommon";
import { withResizeDetector } from "react-resize-detector";
import { CREATE_NAV_STORECONTACT } from "./FixedNavQueries";
import useInput from "./Hooks/useInput";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const FixedWraper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  width: 100%;
  background: ${(props) => props.theme.subTheme_C};
  animation: ${translate} 1s forwards;

  @media (max-width: 900px) {
    height: 55px;
  }

  & input:focus {
    box-shadow: none;
  }
`;

const FixedNav = ({ width }) => {
  ////////////// - USE STATE- ///////////////
  const inputName = useInput("");
  const inputMobile = useInput("");

  ///////////// - USE MUTATION- /////////////
  const [createNavStoreContactMutation] = useMutation(CREATE_NAV_STORECONTACT);

  ///////////// - EVENT HANDLER- ////////////
  const createNavStoreHandler = () => {
    if (!inputName.value || inputName.value.trim() === "") {
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!inputMobile.value || inputMobile.value.trim() === "") {
      toast.error("연락처를 입력해주세요.");
      return;
    }

    confirmAlert({
      title: "신청하기",
      message: "신청하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => createNavStoreHandlerAfter(),
        },
      ],
    });
  };

  const createNavStoreHandlerAfter = async () => {
    const { data } = await createNavStoreContactMutation({
      variables: {
        name: inputName.value,
        mobile: inputMobile.value,
      },
    });

    if (data.createNavStoreContact) {
      toast.success("가맹점 상담을 신청하셨습니다.");
      inputName.setValue("");
      inputMobile.setValue("");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <FixedWraper>
      <Wrapper height={`100%`} dr={`row`}>
        <Image
          alt="로고"
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/SJPET%2Fassets%2FImages%2Flogo%2Flogo.png?alt=media&token=293d0a5b-53e7-446d-bdb8-d74903051e16`}
          width={width < 900 ? `100px` : `200px`}
        />
        <Wrapper
          width={`auto`}
          margin={`0 20px`}
          fontWeight={`800`}
          fontSize={`30px`}
          color={Theme.white_C}
        >
          가맹문의 1588.1684
        </Wrapper>
        <TextInput placeholder={`이름`} type={`text`} {...inputName} />
        <TextInput placeholder={`연락처`} type={`text`} {...inputMobile} />

        <CommonButton
          width={width < 900 ? `100px` : `150px`}
          height={width < 900 ? `30px` : `40px`}
          fontSize={width < 900 ? `15px` : `17px`}
          onClick={createNavStoreHandler}
        >
          신청하기
        </CommonButton>
      </Wrapper>
    </FixedWraper>
  );
};

export default withResizeDetector(FixedNav);
