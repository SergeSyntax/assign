import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import { useCurrentUserQuery, UserIdentifiersFragment, UserIdentifiersFragmentDoc } from './auth.gql';

export const useInitializeAuth = () => {
  const router = useRouter();
  useCurrentUserQuery({
    ssr: false,
    onCompleted: () => router?.push('/dashboard'),
  });
};

export const useUserData = () => {
  const { data, loading } = useCurrentUserQuery();
  return { currentUser: data?.currentUser, loading };
};
