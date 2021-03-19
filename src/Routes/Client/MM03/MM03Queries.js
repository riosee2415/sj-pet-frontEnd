import { gql } from "@apollo/client";

export const GET_STORE = gql`
  query getAllStore {
    getAllStore {
      _id
      title
      address
      thumbnailPath
    }
  }
`;

export const GET_STORE_TOTALPAGE = gql`
  query getStoreTotalPageClient($limit: Int!) {
    getStoreTotalPageClient(limit: $limit)
  }
`;
