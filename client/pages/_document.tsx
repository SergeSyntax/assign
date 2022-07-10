import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { theme } from '../styles';
import { createEmotionCache } from '../config';

interface EmotionStyle {
  emotionStyleTags: EmotionJSX.Element[];
}

type DocumentInitialPropsWithEmotionStyle = DocumentInitialProps & EmotionStyle;

export default class MyDocument extends Document<DocumentInitialPropsWithEmotionStyle> {
  /**
   * `getInitialProps` belongs to `_document` (instead of `_app`),
   * it's compatible with static-site generation (SSG).
   */
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialPropsWithEmotionStyle> {
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
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
