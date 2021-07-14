import { gql } from "@apollo/client";

export const CREATE_NAV_STORECONTACT = gql`
  mutation createNavStoreContact($name: String!, $mobile: String!) {
    createNavStoreContact(name: $name, mobile: $mobile)
  }
`;
