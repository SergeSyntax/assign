import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AlertContext } from 'src/components/alert/context';
import { alertDisplayFailureNetwork } from 'src/components/alert/actions';
import { gql, useMutation } from '@apollo/client';
import * as RegisterTypes from './__generated__/Registration';

export const Registration = gql`
  mutation Registration($email: String, $password: String, $name: String) {
    registration(email: $email, password: $password, name: $name) {
      id
      email
      name
      token
    }
  }
`;

export const useRegistration = () => {
  const router = useRouter();
  const { dispatch } = useContext(AlertContext);

  return useMutation<RegisterTypes.Registration, RegisterTypes.RegistrationVariables>(
    Registration,
    {
      onCompleted(data) {
        console.log('data', data);
        localStorage.setItem('token', data.registration!.token as string);

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
    }
  );
};
