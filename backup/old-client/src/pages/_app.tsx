import * as React from 'react';
import Head from 'next/head';
import { AppContext, AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import createEmotionCache from '../create-emotion-cache';
import { theme } from '../styles/theme';
import { global } from '../styles/global';
import { ApolloProvider, gql } from '@apollo/client';
import { useApollo } from '../apollo/apolloClient';
import { AlertContextProvider } from 'src/components/alert/provider';
import App from 'next/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/* VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          <AlertContextProvider>
            <Component {...pageProps} />
          </AlertContextProvider>
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // const apolloClient = initializeApollo();

  // apolloClient
  //   .query({
  //     query: gql`
  //       query AnotherQuery {
  //         profile {
  //           id
  //           email
  //           name
  //           token
  //         }
  //       }
  //     `
  //   })
  //   .then(res => {
  //     console.log('auth succeed', res);
  //   })
  //   .catch(err => {
  //     console.log('auth failed', err);
  //   });

  // const mutation = gql`
  //   mutation Mutation($email: String, $password: String) {
  //     login(email: $email, password: $password) {
  //       id
  //       email
  //       name
  //       token
  //     }
  //   }
  // `;

  // await apolloClient
  //   .mutate({
  //     mutation,
  //     variables: {
  //       email: 'test.user@gmail.com',
  //       password: 'test@123'
  //     }
  //   })
  //   .then(console.log)
  //   .catch(console.log);

  return { ...appProps };
};

export default MyApp;
