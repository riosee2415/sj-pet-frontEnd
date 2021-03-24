import { gql } from "@apollo/client";

export const GET_BRAND_LIST = gql`
  query getBrandList {
    getBrandList {
      _id
      title
      thumbnail
      isDelete
    }
  }
`;

export const MODIFY_BRAND_BASIC = gql`
  mutation modifyBrandBasic(
    $id: String!
    $title: String!
    $thumbnail: String!
  ) {
    modifyBrandBasic(id: $id, title: $title, thumbnail: $thumbnail)
  }
`;

export const DELETE_BRAND = gql`
  mutation deleteBrand($id: String!) {
    deleteBrand(id: $id)
  }
`;
