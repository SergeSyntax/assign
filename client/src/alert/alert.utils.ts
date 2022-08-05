import { ApolloError } from '@apollo/client';
import { AlertDisplayPayload } from './alert.types';

type DisplayAction = (payload: AlertDisplayPayload) => void;

export const handleApolloError = (display: DisplayAction) => (error: ApolloError) => {
  const [firstError] = error.graphQLErrors;
  display({
    message: firstError.message,
    severity: 'error',
  });
};
