import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      username
    }
  }
`;
//이후에 공유하는 ui가 없으면 다시 header.js로 옮기기