import React from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import { Wrapper } from "../CommonComponents";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const EditorWrapper = styled(Wrapper)`
  & .quill {
    width: 100%;
  }

  & .ql-editor {
    padding: 0;
  }

  & .ql-toolbar.ql-snow {
    display: none;
  }

  & .ql-container.ql-snow {
    border: none;
  }
`;

const EditorViewer = ({ value, ...props }) => {
  return (
    <EditorWrapper {...props}>
      <ReactQuill theme="snow" value={value || ""} readOnly={true} />
    </EditorWrapper>
  );
};

export default EditorViewer;
