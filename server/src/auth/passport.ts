import passport from 'passport';
import { User } from 'src/auth';
import { sign, verify } from './auth.utils';
import { getUserFromJWT } from './users.service';

// TODO: fix user global express type
passport.serializeUser((user, done) => {
  const token = sign(user as User);
  done(null, token);
});

passport.deserializeUser(async (jwt, done) => {
  const user = await getUserFromJWT(jwt as string);
  done(null, user);
});

export default passport;
