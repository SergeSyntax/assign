import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

const logoutHandler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.setHeader('Set-Cookie', [
    serialize('session', '', {
      maxAge: -1,
      path: '/',
    }),
  ]);

  res.redirect('/');
};

export default logoutHandler;
