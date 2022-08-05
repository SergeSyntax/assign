import { useQuery } from '@apollo/client';
import { PROFILE } from './profile.gql';
import { Profile } from './__generated__/Profile';

export const useProfile = () =>
  useQuery<Profile>(PROFILE, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  });
