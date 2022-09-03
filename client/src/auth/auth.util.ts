import { addApolloState, initializeApollo } from 'config';
import { GetServerSideProps } from 'next';
import { CurrentUserDocument } from './auth.gql';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const apolloClient = initializeApollo({ headers: req.headers });
  try {
    await apolloClient.query({
      query: CurrentUserDocument,
    });
    return addApolloState(apolloClient, { props: {} });
  } catch (error) {
    console.warn('redirect on auth failure');
  }

  return {
    redirect: {
      destination: '/auth/login',
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
      // https://stackoverflow.com/questions/2839585/what-is-correct-http-status-code-when-redirecting-to-a-login-page#answers
      statusCode: 307,
    },
  };
};
