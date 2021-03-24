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
      tel
      workTime
    }
  }
`;

export const GET_STORE_ALL = gql`
  query getTotalStore {
    getTotalStore {
      _id
      title
      address
      thumbnailPath
      att
      lnt
      tel
      workTime
    }
  }
`;

export const GET_STORE_TOTALPAGE = gql`
  query getStoreTotalPageClient($limit: Int!) {
    getStoreTotalPageClient(limit: $limit)
  }
`;
