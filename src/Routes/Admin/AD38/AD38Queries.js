import { gql } from "@apollo/client";

export const GET_NEW_STORE_ONE = gql`
  query getNewStoreAdminOne($id: String!) {
    getNewStoreAdminOne(id: $id) {
      _id
      title
      thumbnailPath
    }
  }
`;

export const UPDATE_NEW_STORE_ONE = gql`
  mutation updateNewStoreOne(
    $id: String!
    $title: String!
    $thumbnailPath: String!
  ) {
    updateNewStoreOne(id: $id, title: $title, thumbnailPath: $thumbnailPath)
  }
`;
