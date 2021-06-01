import React, { useEffect, useState } from "react";
import {
  GET_NOTICEBOARD_DETAIL,
  GET_NOTICEBOARD_BEFORE_ID,
  GET_NOTICEBOARD_NEXT_ID,
} from "./BoardQueries";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import {
  WholeWrapper,
  RsWrapper,
  CommonButton,
  Wrapper,
  SpanText,
} from "../CommonComponents";
import CircularIndeterminate from "../loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../Styles/Theme";
import { animateScroll as scroll } from "react-scroll";
import { saveAs } from "file-saver";

const Board_D_title = styled.h2`
  width: 100%;
  padding: 20px;
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
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
`;

export default withResizeDetector(({ match, history, width }) => {
  ////////////// - USE CONTEXT- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentData, setCurrentData] = useState(null);
  const [currentFile, setCurrentFile] = useState([]);
  ///////////// - USE QUERY- ////////////////

  const { data: nData, refetch: nRefetch } = useQuery(GET_NOTICEBOARD_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  const { data: nextData, refetch: nextRefetch } = useQuery(
    GET_NOTICEBOARD_NEXT_ID,
    {
      variables: {
        id: match.params.key,
      },
    }
  );

  const { data: beforeData, refetch: beforeRefetch } = useQuery(
    GET_NOTICEBOARD_BEFORE_ID,
    {
      variables: {
        id: match.params.key,
      },
    }
  );

  ///////////// - EVENT HANDLER- ////////////
  const downloadHandler = async (filePath, fileName) => {
    if (filePath === `-`) {
      toast.info("다운받을 파일이 없습니다.");
      return;
    }

    let blobData = await fetch(filePath).then((response) => response.blob());

    const element = document.createElement("a");
    const file = new Blob([blobData]);

    saveAs(file, fileName);
  };

  const _moveBeforeBoard = () => {
    if (beforeData.getNoticeBoardBeforeId === null) {
      toast.error("첫번째 글 입니다.");

      return null;
    }
    history.push(`/contact/${beforeData.getNoticeBoardBeforeId._id}`);
  };

  const _moveNextBoard = () => {
    if (nextData.getNoticeBoardNextId === null) {
      toast.error("마지막 글 입니다.");

      return null;
    }

    history.push(`/contact/${nextData.getNoticeBoardNextId._id}`);
  };

  const _moveListBoard = () => {
    history.push(`/contact`);
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    if (nData && nData.getNoticeBoardDetail) {
      let tempData = nData.getNoticeBoardDetail;
      const data = nData.getNoticeBoardDetail;

      const desc = document.getElementById("notice_description-js");

      const tempArr = [];
      if (data.fileOriginName1 !== "-") {
        tempArr.push({
          file: data.filePath1,
          name: data.fileOriginName1,
        });
      }
      if (data.fileOriginName2 !== "-") {
        tempArr.push({
          file: data.filePath2,
          name: data.fileOriginName2,
        });
      }
      if (data.fileOriginName3 !== "-") {
        tempArr.push({
          file: data.filePath3,
          name: data.fileOriginName3,
        });
      }

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }

      setCurrentFile(tempArr);
    }
  }, [nData]);

  useEffect(() => {
    nRefetch();
    nextRefetch();
    beforeRefetch();

    scroll.scrollTo(0);
  }, []);

  useTitle(``);
  return (
    <WholeWrapper margin={`150px 0 0 0`}>
      <RsWrapper padding={`100px 0`}>
        <Board_D_title>
          {currentData ? currentData.title : <CircularIndeterminate />}
        </Board_D_title>

        <Board_D dr={`row`}>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={Theme.grey_C}
          >
            작성자
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData.client : <CircularIndeterminate />}
          </Board_D_List>

          <Board_D_List
            width={width < 700 ? `100%` : `250px`}
            bgColor={Theme.grey_C}
          >
            작성일
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? (
              currentData.createdAt.slice(0, 10)
            ) : (
              <CircularIndeterminate />
            )}
          </Board_D_List>
        </Board_D>
        <Board_D dr={`row`}>
          <Board_D_List
            width={width < 700 ? `100%` : `250px`}
            bgColor={Theme.grey_C}
          >
            연락처
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData.tel : <CircularIndeterminate />}
          </Board_D_List>
          <Board_D_List
            width={width < 700 ? `100%` : `250px`}
            bgColor={Theme.grey_C}
          >
            조회수
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData.hit : <CircularIndeterminate />}
          </Board_D_List>
        </Board_D>
        <Board_D_Desc>
          <Wrapper
            id={"notice_description-js"}
            className={"ql-editor"}
            al={`flex-start`}
          ></Wrapper>
        </Board_D_Desc>

        <Wrapper>
          {currentFile.map((data, idx) => {
            return (
              <Board_D dr={`row`} margin={`5px 0`} key={idx}>
                <Board_D_List
                  width={width < 700 ? `100%` : `150px`}
                  height={`100%`}
                  bgColor={Theme.subTheme_C}
                  color={`#fff`}
                >
                  첨부파일
                </Board_D_List>
                <Board_D_List
                  width={width < 700 ? `100%` : `calc((100% - 150px))`}
                  ta={width < 700 ? `center` : `left`}
                >
                  <SpanText
                    cursor={`pointer`}
                    onClick={() => downloadHandler(data.file, data.name)}
                  >
                    {data.name}
                  </SpanText>
                </Board_D_List>
              </Board_D>
            );
          })}
        </Wrapper>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={_moveListBoard}
          >
            목록
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={_moveBeforeBoard}
          >
            이전
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={_moveNextBoard}
          >
            다음
          </CommonButton>
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
});
