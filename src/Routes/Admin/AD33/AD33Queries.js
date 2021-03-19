import { gql } from "@apollo/client";

export const GET_STORYVIEW_LIST = gql`
  query getStoryViewList {
    getStoryViewList {
      _id
      title
      thumbnail
      content
      isDelete
    }
  }
`;

export const MODIFY_STORYVIEW = gql`
  mutation modifyStoryView($id: String!, $content: String!) {
    modifyStoryView(id: $id, content: $content)
  }
`;

export const MODIFY_STORYVIEW_BASIC = gql`
  mutation modifyStoryViewBasic(
    $id: String!
    $title: String!
    $thumbnail: String!
  ) {
    modifyStoryViewBasic(id: $id, title: $title, thumbnail: $thumbnail)
  }
`;

export const DELETE_STORYVIEW = gql`
  mutation deleteStoryView($id: String!) {
    deleteStoryView(id: $id)
  }
`;
