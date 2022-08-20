import { useRouter } from 'next/router';
import { handleApolloError, useAlertProduce } from 'src/alert';
import { useLoginMutation } from './login-form.gql';

export const useLogin = () => {
  const { display } = useAlertProduce();
  const router = useRouter();
  const [login, { loading }] = useLoginMutation({
    onError: handleApolloError(display),
    onCompleted: () => router.push('/dashboard'),
  });

  return { login, loading };
};
