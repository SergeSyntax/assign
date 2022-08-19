import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($loginData: LoginData!) {
    login(data: $loginData) {
      status
      user {
        id
        name
        email
        token
      }
    }
  }
`;
