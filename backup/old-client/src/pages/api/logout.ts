import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';
import { COOKIE_AUTH_KEY } from 'src/config/const';

/**
 * handle the api call
 * @param req next api request object
 * @param res next api response object
 * @returns
 */
const proxyHandler = (req: NextApiRequest, res: NextApiResponse): void => {
  const cookies = new Cookies(req, res);
  cookies.set(COOKIE_AUTH_KEY, null);
  res.redirect('/');
};

export default proxyHandler;
