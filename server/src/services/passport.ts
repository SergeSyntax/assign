import passport from 'passport';
import { User } from 'src/auth';
import { signJWT } from 'src/auth/auth.utils';

passport.serializeUser((user, done) => {
  const token = signJWT(user as User);
  done(null, token);
});

passport.deserializeUser(async (jwt, done) => {
  // const user = await getUserIdFromJWT(jwt as string);
  done(null, {});
});

export default passport;
