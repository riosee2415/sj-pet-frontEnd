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
