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
