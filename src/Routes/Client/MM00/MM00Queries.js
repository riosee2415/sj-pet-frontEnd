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

export const GET_STORE = gql`
  query getTotalStore {
    getTotalStore {
      _id
      title
      thumbnailPath
    }
  }
`;

export const GET_STORYVIEW = gql`
  query getAllStoryViewList {
    getAllStoryViewList {
      _id
      title
      content
      thumbnail
    }
  }
`;
