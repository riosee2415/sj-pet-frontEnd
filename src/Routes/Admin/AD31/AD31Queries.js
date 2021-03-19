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
