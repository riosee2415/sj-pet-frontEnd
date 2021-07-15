import { gql } from "@apollo/client";

export const CREATE_NAV_STORECONTACT = gql`
  mutation createNavNoticeBoard($client: String!, $tel: String!) {
    createNavNoticeBoard(client: $client, tel: $tel)
  }
`;
