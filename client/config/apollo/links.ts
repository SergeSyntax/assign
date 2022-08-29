import { HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { BASE_URL } from 'config/api';
import fetch from 'cross-fetch';

export const BASE_URL_APOLLO = `${BASE_URL}/graphql`;

const httpLink = new HttpLink({
  uri: BASE_URL_APOLLO, // Server URL (must be absolute)
  credentials: 'include', // Additional fetch() options like `credentials` or `headers`
  fetch,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message = '', locations = '', path = '' }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const loggerLink = new ApolloLink((operation, forward) => {
  console.log(`GraphQL Request: ${operation.operationName}`);
  operation.setContext({ start: new Date().getTime() });
  return forward(operation).map((response) => {
    const responseTime = new Date().getTime() - operation.getContext().start;
    console.log(`GraphQL Response took: ${responseTime}`);
    return response;
  });
});

/**
 * @link https://www.apollographql.com/docs/react/api/link/apollo-link-retry/
 */
const retryLink = new RetryLink({
  delay: { initial: 1000, max: 1500, jitter: true },
  attempts: { max: 5 },
});

export const getLinks = () => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return from([httpLink]);
    case 'production':
      return from([retryLink, errorLink, httpLink]);
    default:
      return from([loggerLink, retryLink, errorLink, httpLink]);
  }
};
