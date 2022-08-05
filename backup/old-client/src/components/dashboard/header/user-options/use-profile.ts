import { useQuery, gql } from '@apollo/client';
import * as ProfileTypes from './__generated__/Profile';

const Profile = gql`
  query Profile {
    profile {
      id
      email
      name
      token
    }
  }
`;

// TODO: update to apollo
export const useProfile = () => useQuery<ProfileTypes.Profile>(Profile);
