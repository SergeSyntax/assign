import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AlertContext, alertDisplayFailure } from 'src/alert';
import { REGISTRATION } from './registration.gql';
import { Registration, RegistrationVariables } from './__generated__/Registration';

export const useRegistration = () => {
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  const [register, { loading }] = useMutation<Registration, RegistrationVariables>(REGISTRATION, {
    onCompleted(data) {
      console.log(data);

      // localStorage.setItem('token', data.login?.token ?? '');
      // router.push('dashboard');
    },
    onError(err) {
      if (err.message === 'Failed to fetch') {
        return dispatch(alertDisplayFailure('Network Error'));
      }

      const { graphQLErrors, networkError, clientErrors } = err;
      console.log(JSON.stringify(err, null, 2));
      err.message;
      if (graphQLErrors.length) {
        const [firstGraphQLErrors] = graphQLErrors;
        return dispatch(alertDisplayFailure(firstGraphQLErrors.message));
      }

      if (networkError) {
        // return dispatch(alertDisplayFailureNetwork(networkError.));
      }
    },
  });

  return { register, loading };
};
