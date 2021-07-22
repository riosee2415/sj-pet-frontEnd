import { gql } from "@apollo/client";

export const GET_STORECONTACT = gql`
  query getStoreContact($isComplete: Boolean!) {
    getStoreContact(isComplete: $isComplete) {
      _id
      name
      loc
      mobile
      mayPay
      email
      isExistStore
      description
      createdAt
      completedAt
      isComplete
      isAgreement
    }
  }
`;

export const MODIFY_STORECONTACT_COMPLETE = gql`
  mutation modifyStoreContactComplete($id: String!) {
    modifyStoreContactComplete(id: $id)
  }
`;
