import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  CommonButton,
  Image,
  RsWrapper,
  Text,
  TextInput,
  TextInput2,
  WholeWrapper,
  Wrapper,
} from "../CommonComponents";
import { CREATE_NOTICEBOARD } from "./BoardQueries";
import styled from "styled-components";
import CircularIndeterminate from "../loading/CircularIndeterminate";
import { useMutation, useQuery } from "@apollo/client";
import { withResizeDetector } from "react-resize-detector";
import Theme from "../../Styles/Theme";
import useInput from "../Hooks/useInput";
import Editor from "../editor/Editor";
import { animateScroll as scroll } from "react-scroll";
import { Content, FileInput, FileLabel } from "../AdminCommonComponents";
import storageFn from "../../fsStorage";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { IoIosClose } from "react-icons/io";

const Board_D_title = styled.h2`
  width: 100%;
  padding: 10px;
  font-size: 22px;
  font-weight: 700;
`;

const Board_D = styled.ul`
  width: 100%;
  height: ${(props) => (props.height ? props.height : `40px`)};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.bgColor};
  margin: 10px 0;

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const Board_D_List = styled.li`
  width: ${(props) => props.width};
  line-height: 40px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta || `center`};
  padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
  border-radius: ${(props) => props.radius};
  border-radius: 20px;
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
`;

export default withResizeDetector(({ match, history, width }) => {
  const fileRef = useRef();

  ////////////// - USE STATE- ///////////////

  const inputTitle = useInput("");
  const inputClient = useInput("");
  const inputTel = useInput("");
  const inputDesc = useInput("");
  const inputFile1 = useInput("");
  const inputFilePath1 = useInput("");
  const inputFile2 = useInput("");
  const inputFilePath2 = useInput("");
  const inputFile3 = useInput("");
  const inputFilePath3 = useInput("");

  const [isLoading, setIsLoading] = useState(false);

  ///////////// - USE QUERY- ////////////////

  ///////////// - USE MUTATION- /////////////
  const [createBoardMutation] = useMutation(CREATE_NOTICEBOARD);

  ///////////// - EVENT HANDLER- ////////////
  const fileChangeHandler = async (e, inputFile, inputFilePath) => {
    const file = e.target.files[0];

    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/noticeBoard",
      file.name,
      file
    );

    const db_path = await storageFn.getSotragePath(path);
    inputFilePath.setValue(db_path);
    inputFile.setValue(file.name);

    fileRef.current.value = null;

    setIsLoading(false);
  };

  const moveLinkHandler = () => {
    history.goBack();
  };

  const createBoardHandler = () => {
    if (!inputTitle.value || inputTitle.value.trim() === "") {
      toast.error("제목을 입력해주세요.");
      return;
    }
    if (!inputClient.value || inputClient.value.trim() === "") {
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!inputTel.value || inputTel.value.trim() === "") {
      toast.error("연락처를 입력해주세요.");
      return;
    }
    if (!inputDesc.value || inputDesc.value.trim() === "") {
      toast.error("본문을 입력해주세요.");
      return;
    }

    confirmAlert({
      title: "게시글 작성",
      message: "게시글을 작성하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => createBoardHandlerAfter(),
        },
      ],
    });
  };

  const createBoardHandlerAfter = async () => {
    const { data } = await createBoardMutation({
      variables: {
        title: inputTitle.value,
        client: inputClient.value,
        tel: inputTel.value,
        description: inputDesc.value,

        filePath1: inputFilePath1.value ? inputFilePath1.value : "-",
        fileOriginName1: inputFile1.value ? inputFile1.value : "-",

        filePath2: inputFilePath2.value ? inputFilePath2.value : "-",
        fileOriginName2: inputFile2.value ? inputFile2.value : "-",

        filePath3: inputFilePath3.value ? inputFilePath3.value : "-",
        fileOriginName3: inputFile3.value ? inputFile3.value : "-",

        type: "공지사항",
      },
    });

    if (data.createNoticeBoard) {
      toast.success("게시글 작성이 완료되었습니다.");
      inputTitle.setValue("");
      inputClient.setValue("");
      inputTel.setValue("");
      inputDesc.setValue("");
      inputFilePath1.setValue("");
      inputFile1.setValue("");
      inputFilePath2.setValue("");
      inputFile2.setValue("");
      inputFilePath3.setValue("");
      inputFile3.setValue("");
      history.push("/contact");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <WholeWrapper padding={`100px 0`}>
      <RsWrapper margin={`100px 0 0 `}>
        <Board_D>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={Theme.basicTheme_C}
            color={Theme.white_C}
          >
            제목
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc(100% - 150px )`}>
            <TextInput width={`100%`} {...inputTitle} />
          </Board_D_List>
        </Board_D>

        <Board_D>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={Theme.basicTheme_C}
            color={Theme.white_C}
          >
            이름
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc(100% - 150px )`}>
            <TextInput width={`100%`} {...inputClient} />
          </Board_D_List>
        </Board_D>

        <Board_D>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={Theme.basicTheme_C}
            color={Theme.white_C}
          >
            연락처
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc(100% - 150px )`}>
            <TextInput width={`100%`} {...inputTel} />
          </Board_D_List>
        </Board_D>

        <Wrapper dr={`row`} margin={`50px 0 0 0`}>
          <Wrapper width={`100%`} height={`500px`}>
            <Editor
              value={inputDesc.value}
              componentHeight="h-500"
              editorChangeHandler={(html) => inputDesc.setValue(html)}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper dr={`row`} ju={`flex-start`} margin={`0px 0px 10px`}>
          <FileInput
            id="file-js"
            type="file"
            onChange={(e) => fileChangeHandler(e, inputFile1, inputFilePath1)}
            ref={fileRef}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <FileLabel width={`150px`} htmlFor={`file-js`}>
              첨부파일 등록
            </FileLabel>
          )}

          {inputFile1.value && (
            <Wrapper
              bgColor={Theme.lightGrey_C}
              dr={`row`}
              width={`auto`}
              padding={`0 5px`}
              margin={`0 0 0 10px`}
              cursor={`pointer`}
            >
              <Text margin={`0 10px`} width={`auto`}>
                {inputFile1.value}
              </Text>
              <IoIosClose
                fontSize={`20px`}
                onClick={() => inputFile1.setValue("")}
              />
            </Wrapper>
          )}
        </Wrapper>

        <Wrapper dr={`row`} ju={`flex-start`} margin={`0px 0px 10px`}>
          <FileInput
            id="file2-js"
            type="file"
            onChange={(e) => fileChangeHandler(e, inputFile2, inputFilePath2)}
            ref={fileRef}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <FileLabel width={`150px`} htmlFor={`file2-js`}>
              첨부파일 등록
            </FileLabel>
          )}
          {inputFile2.value && (
            <Wrapper
              bgColor={Theme.lightGrey_C}
              dr={`row`}
              width={`auto`}
              padding={`0 5px`}
              margin={`0 0 0 10px`}
              cursor={`pointer`}
            >
              <Text margin={`0 10px`} width={`auto`}>
                {inputFile2.value}
              </Text>
              <IoIosClose
                fontSize={`20px`}
                onClick={() => inputFile2.setValue("")}
              />
            </Wrapper>
          )}
        </Wrapper>

        <Wrapper dr={`row`} ju={`flex-start`} margin={`0px 0px 10px`}>
          <FileInput
            id="file3-js"
            type="file"
            onChange={(e) => fileChangeHandler(e, inputFile3, inputFilePath3)}
            ref={fileRef}
          />
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <FileLabel width={`150px`} htmlFor={`file3-js`}>
              첨부파일 등록
            </FileLabel>
          )}
          {inputFile3.value && (
            <Wrapper
              bgColor={Theme.lightGrey_C}
              dr={`row`}
              width={`auto`}
              padding={`0 5px`}
              margin={`0 0 0 10px`}
              cursor={`pointer`}
            >
              <Text margin={`0 10px`} width={`auto`}>
                {inputFile3.value}
              </Text>
              <IoIosClose
                fontSize={`20px`}
                onClick={() => inputFile3.setValue("")}
              />
            </Wrapper>
          )}
        </Wrapper>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={moveLinkHandler}
          >
            목록
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            kindOf={`create`}
            onClick={createBoardHandler}
          >
            등록
          </CommonButton>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
});
