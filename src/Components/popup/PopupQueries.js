import { gql } from "@apollo/client";

export const GET_POPUP = gql`
  query getPopup {
    getPopup {
      _id
      imagePath
      useYn
    }
  }
`;
