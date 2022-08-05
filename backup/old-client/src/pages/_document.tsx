import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../create-emotion-cache';
import { theme } from '../styles/theme';

export default class MyDocument extends Document {
  /**
   * `getInitialProps` belongs to `_document` (instead of `_app`),
   * it's compatible with static-site generation (SSG).
   */
  static async getInitialProps(ctx: DocumentContext) {
    /**
     * Resolution order
     * On the server:
     *  1. app.getInitialProps
     *  2. page.getInitialProps
     *  3. document.getInitialProps
     *  4. app.render
     *  5. page.render
     *  6. document.render
     *
     * On the server with error:
     *  1. document.getInitialProps
     *  2. app.render
     *  3. page.render
     *  4. document.render
     *
     * On the client
     *  1. app.getInitialProps
     *  2. page.getInitialProps
     *  3. app.render
     *  4. page.render
     */

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    // provides three APIs for doing server-side rendering with emotion to extract critical css,
    // inline critical css in html to a string and inline critical css in html to a stream.
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App: any) => props => (<App emotionCache={cache} {...props} />) as any
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags]
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ICON */}
          <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
          {/* manifest.json provides metadata used when your web app 
              is installed on a user's mobile device or desktop. See 
              https://developers.google.com/web/fundamentals/web-app-manifest/ */}
          <link rel="manifest" href="/icon/manifest.json" />
          <link rel="icon" href="/icon/favicon.ico" />
          <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
