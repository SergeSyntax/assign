// import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import * as LoginTypes from './__generated__/Login';
import { useContext } from 'react';
import { AlertContext } from 'src/components/alert/context';
import { alertDisplayFailureNetwork } from 'src/components/alert/actions';

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
      name
      token
    }
  }
`;

// TODO: organize
export const useLogin = () => {
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  return useMutation<LoginTypes.Login, LoginTypes.LoginVariables>(LOGIN_USER, {
    onCompleted(data) {
      console.log('data', data.login?.token);
      localStorage.setItem('token', data.login?.token ?? '');

      router.push('dashboard');
    },
    onError: err => {
      const [errDetails] = err.graphQLErrors;
      if (errDetails) {
      }
      dispatch(
        alertDisplayFailureNetwork(
          errDetails.extensions.response.status as number,
          'invalid credentials'
        )
      );
    }
  });
};
