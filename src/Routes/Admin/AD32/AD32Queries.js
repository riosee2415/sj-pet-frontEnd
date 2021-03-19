import { gql } from "@apollo/client";

export const GET_STORYVIEW = gql`
  query getStoryView {
    getStoryView {
      _id
      title
      content
      thumbnail
      isDelete
    }
  }
`;

export const CREATE_STORYVIEW = gql`
  mutation createStoryView(
    $thumbnail: String!
    $title: String!
    $content: String!
  ) {
    createStoryView(thumbnail: $thumbnail, title: $title, content: $content)
  }
`;
