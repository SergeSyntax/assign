import { useRouter } from 'next/router';
import { useCurrentUserQuery } from './auth.gql';

export const useInitializeAuth = () => {
  const router = useRouter();
  useCurrentUserQuery({
    onCompleted: () => router.push('/dashboard'),
  });
};
