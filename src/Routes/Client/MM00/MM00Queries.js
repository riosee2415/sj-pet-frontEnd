import { gql } from "@apollo/client";

export const GET_MAINBANNER = gql`
  query getMainBanner {
    getMainBanner {
      _id
      imagePath
      content
      title
    }
  }
`;

export const GET_MOBILEBANNER = gql`
  query getMobileMainBanner {
    getMobileMainBanner {
      _id
      imagePath
      content
      title
    }
  }
`;

export const ADD_ACCEPT_RECORD = gql`
  mutation addAcceptRecord($date: String!) {
    addAcceptRecord(date: $date)
  }
`;
