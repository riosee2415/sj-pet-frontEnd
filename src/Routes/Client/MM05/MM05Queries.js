import { gql } from "@apollo/client";

export const CREATE_DIRECTREQUEST = gql`
  mutation createDirectRequest(
    $name: String!
    $loc: String!
    $mobile: String!
    $mayPay: String!
    $email: String!
    $isExistStore: String!
    $description: String!
    $isAgreement: Boolean!
  ) {
    createDirectRequest(
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
  query getFaqDetail(
    $typeName: String!
    $searchValue: String!
    $limit: Int!
    $currentPage: Int!
  ) {
    getFaqDetail(
      typeName: $typeName
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
  query getFaqTotalPage(
    $typeName: String!
    $searchValue: String!
    $limit: Int!
  ) {
    getFaqTotalPage(
      typeName: $typeName
      searchValue: $searchValue
      limit: $limit
    )
  }
`;
