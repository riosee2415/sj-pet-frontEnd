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
  query getAllStoreByImportant {
    getAllStoreByImportant {
      _id
      title
      address
      thumbnailPath
      att
      lnt
      tel
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

export const GET_BRAND = gql`
  query getBrandList {
    getBrandList {
      _id
      thumbnail
    }
  }
`;
