import { gql } from "@apollo/client";

export const GET_ALL_STORE = gql`
  query getTotalStore {
    getTotalStore {
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
