import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import { theme, global } from '../styles';
import createEmotionCache from '../src/create-emotion-cache';
import { useApollo } from '../src/apollo';
import { ApolloProvider } from '@apollo/client';
import { AlertContextProvider } from '../src/alert';

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

  const apolloClient = useApollo(pageProps);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        {/*CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
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
