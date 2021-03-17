import { gql } from "@apollo/client";

export const GET_FOOTER_INFO = gql`
  query getFooterInfo {
    getFooterInfo {
      cheifName
      businessName
      businessNumber
      tel
      email
      address
      privacyOfficer
    }
  }
`;
