import { gql } from "@apollo/client";

export const GET_NEW_STORE_ADMIN = gql`
  query getNewStoreAdmin {
    getNewStoreAdmin {
      _id
      title
      thumbnailPath
    }
  }
`;
