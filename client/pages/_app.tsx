import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
// import { ApolloProvider } from '@apollo/client';
import { theme, global } from '../styles';
import { AlertProvider } from '../src/alert';
import { createEmotionCache, useApollo } from '../config';
import { ApolloProvider } from '@apollo/client';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * @link CssBaseLine https://mui.com/components/css-baseline/#main-content
 */
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const apolloClient = useApollo(pageProps);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/*CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Global styles={global} />
        <ApolloProvider client={apolloClient}>
          <AlertProvider>
            <Component {...pageProps} />
          </AlertProvider>
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
