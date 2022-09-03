import { Maybe } from '@/common/types';
import passport from 'passport';
import { sign } from './auth.utils';
import { getUserFromJWT } from './users.service';
import { User } from './users.type';

passport.serializeUser<Maybe<string>>((user, done) => {
  if (user) {
    const token = sign(user as User);
    done(null, token);
  }
});

passport.deserializeUser<Maybe<string>>(async (jwt, done) => {
  const user = await getUserFromJWT(jwt);
  done(null, user);
});

export default passport;
