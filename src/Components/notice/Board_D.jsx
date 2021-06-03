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
  padding: 30px 0;
  font-size: 22px;
  font-weight: 700;

  border-bottom: ${(props) =>
    props.borderBottom || `3px solid ${props.theme.black_C}`};
`;

const Board_D = styled.ul`
  width: 100%;
  height: ${(props) => (props.height ? props.height : `50px`)};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.bgColor};
  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const Board_D_List = styled.li`
  width: ${(props) => props.width};
  line-height: 50px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta || `center`};
  padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
  border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  border-bottom: ${(props) =>
    props.borderBottom || `1px solid ${props.theme.lightGrey_C}`};
`;

export default withResizeDetector(({ match, history, width }) => {
  ////////////// - USE CONTEXT- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentData, setCurrentData] = useState(null);
  const [currentFile, setCurrentFile] = useState([]);

  // const telData = currentData.tel;

  // const nextData1 = telData.substr(0, 3);
  // const nextData2 = telData.substr(7, 4);

  // const resultData = `${nextData1}****${nextData2};`;

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

  useTitle("PET MART 선진펫");
  return (
    <WholeWrapper margin={`80px 0 0 0`}>
      <RsWrapper padding={`80px 0`}>
        <Board_D_title>
          {currentData ? currentData.title : <CircularIndeterminate />}
        </Board_D_title>

        <Board_D dr={`row`}>
          <Board_D_List>작성자</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>
            {currentData ? currentData.client : <CircularIndeterminate />}
          </Board_D_List>
          <Board_D_List>연락처</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>
            {currentData ? currentData.tel : <CircularIndeterminate />}
          </Board_D_List>

          <Board_D_List>작성일</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>
            {currentData ? (
              currentData.createdAt.slice(0, 10)
            ) : (
              <CircularIndeterminate />
            )}
          </Board_D_List>

          <Board_D_List>조회수</Board_D_List>
          <Board_D_List color={Theme.subTheme_C}>
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
            height={`40px`}
            width={`100px`}
            margin={`0px 10px 0px 0px`}
            onClick={_moveListBoard}
            kindOf={`black`}
          >
            목록
          </CommonButton>

          <CommonButton
            height={`40px`}
            width={`100px`}
            margin={`0px 10px 0px 0px`}
            onClick={_moveBeforeBoard}
          >
            이전
          </CommonButton>

          <CommonButton
            height={`40px`}
            width={`100px`}
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
