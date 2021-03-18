import { gql } from "@apollo/client";

export const GET_ALL_STORE = gql`
  query getAllStore {
    getAllStore {
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
