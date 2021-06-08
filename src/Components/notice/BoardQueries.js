import { gql } from "@apollo/client";

export const GET_NOTICEBOARD_DETAIL = gql`
  query getNoticeBoardDetail($id: String!) {
    getNoticeBoardDetail(id: $id) {
      _id
      title
      client
      tel
      hit
      createdAt
      description
      fileOriginName1
      filePath1
      fileOriginName2
      filePath2
      fileOriginName3
      filePath3
    }
  }
`;

export const GET_NOTICEBOARD_NEXT_ID = gql`
  query getNoticeBoardNextId($id: String!) {
    getNoticeBoardNextId(id: $id) {
      _id
    }
  }
`;

export const GET_NOTICEBOARD_BEFORE_ID = gql`
  query getNoticeBoardBeforeId($id: String!) {
    getNoticeBoardBeforeId(id: $id) {
      _id
    }
  }
`;

export const CREATE_NOTICEBOARD = gql`
  mutation createNoticeBoard(
    $title: String!
    $client: String!
    $tel: String!
    $type: String!
    $description: String!
    $filePath1: String!
    $fileOriginName1: String!
    $filePath2: String!
    $fileOriginName2: String!
    $filePath3: String!
    $fileOriginName3: String!
  ) {
    createNoticeBoard(
      title: $title
      client: $client
      tel: $tel
      type: $type
      description: $description
      filePath1: $filePath1
      fileOriginName1: $fileOriginName1
      filePath2: $filePath2
      fileOriginName2: $fileOriginName2
      filePath3: $filePath3
      fileOriginName3: $fileOriginName3
    )
  }
`;
