import { gql } from "@apollo/client";

export const CREATE_DIRECTREQUEST = gql`
  mutation createStoreContact(
    $name: String!
    $loc: String!
    $mobile: String!
    $mayPay: String!
    $email: String!
    $isExistStore: Boolean!
    $description: String!
    $isAgreement: Boolean!
  ) {
    createStoreContact(
      name: $name
      loc: $loc
      mobile: $mobile
      mayPay: $mayPay
      email: $email
      isExistStore: $isExistStore
      description: $description
      isAgreement: $isAgreement
    )
  }
`;

export const GET_FAQ = gql`
  query getFaqDetail($searchValue: String!, $limit: Int!, $currentPage: Int!) {
    getFaqDetail(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
      _id
      sort
      type
      question
      answer
    }
  }
`;

export const GET_FAQ_TOTALPAGE = gql`
  query getFaqTotalPage($searchValue: String!, $limit: Int!) {
    getFaqTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_NOTICEBOARD = gql`
  query getNoticeBoardClient(
    $searchValue: String!
    $limit: Int!
    $currentPage: Int!
    $sort: String!
  ) {
    getNoticeBoardClient(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
      sort: $sort
    ) {
      _id
      title
      createdAt
    }
  }
`;

export const GET_NOTICEBOARD_TOTALPAGE = gql`
  query getNoticeBoardTotalPageClient($searchValue: String!, $limit: Int!) {
    getNoticeBoardTotalPageClient(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT = gql`
  query getNoticeBoardTotalPageOnlyCntClient($searchValue: String!) {
    getNoticeBoardTotalPageOnlyCntClient(searchValue: $searchValue)
  }
`;

export const GET_NOTICEBOARD_TYPE = gql`
  query getNoticeBoardType {
    getNoticeBoardType {
      _id
      typeName
    }
  }
`;
