import passport, { Profile } from 'passport';
import { User } from 'src/types/user';
import { signJWT } from 'src/utils/crypto';

passport.serializeUser((user, done) => {
  const token = signJWT(user as User);
  done(null, token);
});

passport.deserializeUser(async (jwt, done) => {
  // const user = await getUserIdFromJWT(jwt as string);
  done(null, {});
});

export default passport;
