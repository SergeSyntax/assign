import httpProxy, { ProxyReqCallback, ProxyResCallback, ServerOptions } from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';
import { AUTHORIZATION_KEY, COOKIE_AUTH_KEY, getBearerToken, TARGET_URL } from 'src/config/const';

/**
 * extract the target api route from the env variables or use the default
 */

/**
 * creating a new proxy server with the http-proxy library
 * @link https://github.com/http-paarty/node-http-proxy#core-concept
 */
const proxy = httpProxy.createProxyServer();

/**
 * too boost performance we going to disable an API routes option that provide built in middleware
 *  which parse the incoming request with a config object export to change the default configs, too disable the parser.
 * @link https://nextjs.org/docs/api-routes/api-middlewares#custom-config
 */
export const config = {
  api: {
    bodyParser: false
  }
};

const proxyServerOptions: ServerOptions = { target: TARGET_URL, autoRewrite: false };

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
//
const proxyRequestCallback: ProxyReqCallback = (proxyReq, req, res, _options) => {
  const cookies = new Cookies(req, res);

  const authToken = cookies.get(COOKIE_AUTH_KEY);
  req.headers.cookie = '';

  if (authToken) proxyReq.setHeader(AUTHORIZATION_KEY, getBearerToken(authToken));
};

const proxyResponseCallback: ProxyResCallback = (proxyRes, req, res) => {
  if (req.url?.includes('login') || req.url?.includes('registration')) {
    const { authorization } = proxyRes.headers;
    const cookies = new Cookies(req, res);
    cookies.set(COOKIE_AUTH_KEY, authorization);
  }
};

/**
 * handle the api call
 * @param req next api request object
 * @param res next api response object
 * @returns
 */
const proxyHandler = (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise((resolve, reject) => {
    req.url = req.url?.replace('api/proxy/', '');
    proxy.web(req, res, proxyServerOptions);
    proxy.on('proxyReq', proxyRequestCallback);
    proxy.on('proxyRes', proxyResponseCallback);
    proxy.on('end', resolve);
    proxy.on('error', reject);
  });
};

export default proxyHandler;
