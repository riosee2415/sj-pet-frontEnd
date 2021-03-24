import { gql } from "@apollo/client";

export const GET_BRAND = gql`
  query getBrand {
    getBrand {
      _id
      title
      thumbnail
      isDelete
    }
  }
`;

export const CREATE_BRAND = gql`
  mutation createBrand($thumbnail: String!, $title: String!) {
    createBrand(thumbnail: $thumbnail, title: $title)
  }
`;
