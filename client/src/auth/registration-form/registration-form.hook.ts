import { handleApolloError, useAlertProduce } from 'src/alert';
import { useRegistrationMutation } from './registration-form.gql';

export const useRegistration = () => {
  const { display } = useAlertProduce();
  const [register, { loading }] = useRegistrationMutation({
    onError: handleApolloError(display),
  });

  return { register, loading };
};
