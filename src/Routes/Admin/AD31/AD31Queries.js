import { gql } from "@apollo/client";

export const GET_STORE_ONE = gql`
  query getStoreOne($id: String!) {
    getStoreOne(id: $id) {
      _id
      title
      address
      lnt
      att
      thumbnailPath
      tel
      workTime
    }
  }
`;

export const UPDATE_STORE_ONE = gql`
  mutation updateStoreOne(
    $id: String!
    $title: String!
    $address: String!
    $lnt: String!
    $att: String!
    $thumbnailPath: String!
    $tel: String!
    $workTime: String!
  ) {
    updateStoreOne(
      id: $id
      title: $title
      address: $address
      lnt: $lnt
      att: $att
      thumbnailPath: $thumbnailPath
      tel: $tel
      workTime: $workTime
    )
  }
`;

export const DELETE_STORE_ONE = gql`
  mutation deleteStoreOne($id: String!) {
    deleteStoreOne(id: $id)
  }
`;
