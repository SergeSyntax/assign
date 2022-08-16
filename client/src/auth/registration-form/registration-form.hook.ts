import { useRouter } from 'next/router';
import { handleApolloError, useAlertProduce } from 'src/alert';
import { useRegistrationMutation } from './registration-form.gql';

export const useRegistration = () => {
  const { display } = useAlertProduce();
  const router = useRouter();
  const [register, { loading }] = useRegistrationMutation({
    onError: handleApolloError(display),
    onCompleted: () => router.push('/dashboard'),
  });

  return { register, loading };
};
