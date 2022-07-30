import passport from 'passport';
import { User } from 'src/auth';
import { sign } from 'src/auth/auth.utils';

passport.serializeUser((user, done) => {
  const token = sign(user as User);
  done(null, token);
});

passport.deserializeUser(async (jwt, done) => {
  // const user = await getUserIdFromJWT(jwt as string);
  done(null, {});
});

export default passport;
