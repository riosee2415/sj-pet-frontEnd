import { gql } from "@apollo/client";

export const GET_BUSERS_BY_EXIT = gql`
  query getBUsersByExit($searchValue: String!) {
    getBUsersByExit(searchValue: $searchValue) {
      _id
      userId
      userPassword
      username
      zoneCode
      address
      detailAddress
      tel
      mobile
      email
      exitedAt
      isAgreement1
      isAgreement2
    }
  }
`;
