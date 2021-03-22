import { gql } from "@apollo/client";

export const CREATE_STORE_ONE = gql`
  mutation createStoreOne(
    $title: String!
    $address: String!
    $lnt: String!
    $att: String!
    $thumbnailPath: String!
    $tel: String!
    $workTime: String!
  ) {
    createStoreOne(
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
