import passport from './passport.service';
import { Router } from 'express';
import { CLIENT_URL } from '@/common/config';
import { AuthenticateOptions } from 'passport';

const authOptions: AuthenticateOptions = {
  successRedirect: `${CLIENT_URL}/dashboard`,
  failureRedirect: `${CLIENT_URL}/500`,
};

export const authRoute = Router();

authRoute.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRoute.get('/google/callback', passport.authenticate('google', authOptions));

/**
 * @link https://github.com/cfsghost/passport-github#readme
 */
authRoute.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
authRoute.get('/github/callback', passport.authenticate('github', authOptions));

authRoute.get('logout', (req, res) => {
  req.logOut({ keepSessionInfo: false }, (err) => {
    res.redirect(CLIENT_URL);
  });
});
