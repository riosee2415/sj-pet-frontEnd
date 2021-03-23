import { gql } from "@apollo/client";

export const GET_STORE = gql`
  query getAllStore($limit: Int!, $currentPage: Int!) {
    getAllStore(limit: $limit, currentPage: $currentPage) {
      _id
      title
      address
      thumbnailPath
      att
      lnt
    }
  }
`;

export const GET_TOTALSTORE = gql`
  query getTotalStore {
    getTotalStore {
      _id
      att
      lnt
      title
    }
  }
`;

export const GET_STORE_TOTALPAGE = gql`
  query getStoreTotalPageClient($limit: Int!) {
    getStoreTotalPageClient(limit: $limit)
  }
`;
