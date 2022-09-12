import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AlertContext, alertDisplayFailure } from '../../alert';
import { LOGIN } from './login.gql';
import { Login, LoginVariables } from './__generated__/Login';

export const useLogin = () => {
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  const [login, { loading }] = useMutation<Login, LoginVariables>(LOGIN, {
    onCompleted(data) {
      localStorage.setItem('token', data.login?.token ?? '');
      router.push('dashboard');
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

  return { login, loading };
};
