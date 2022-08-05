import { gql } from '@apollo/client';

export const PROFILE = gql`
  query Profile {
    profile {
      id
      email
      name
      image
    }
  }
`;
