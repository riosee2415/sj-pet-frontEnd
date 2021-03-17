import { gql } from "@apollo/client";

export const GET_MOBILEMAINBANNER = gql`
  query getMobileMainBanner {
    getMobileMainBanner {
      _id
      imagePath
      title
      content
      link
    }
  }
`;

export const MODIFY_MOBILEMAINBANNER = gql`
  mutation modifyMobileMainBanner(
    $id: String!
    $title: String!
    $content: String!
    $link: String!
  ) {
    modifyMobileMainBanner(
      id: $id
      title: $title
      content: $content
      link: $link
    )
  }
`;

export const MODIFY_MOBILEMAINBANNER_IMAGEPATH = gql`
  mutation modifyMobileMainBannerImagePath($id: String!, $imagePath: String!) {
    modifyMobileMainBannerImagePath(id: $id, imagePath: $imagePath)
  }
`;
