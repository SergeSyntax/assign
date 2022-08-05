import { ApolloError } from '@apollo/client';
import { AlertDisplayPayload } from './alert.type';

type DisplayAction = (payload: AlertDisplayPayload) => void;

export const handleApolloError = (display: DisplayAction) => (error: ApolloError) => {
  const [firstError] = error.graphQLErrors;
  display({
    message: firstError?.message ?? (error.message === 'Failed to fetch' ? 'Network Error' : error.message),
    severity: 'error',
  });
};
