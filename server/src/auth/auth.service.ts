import _ from 'lodash';
import passport, { Profile } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { Maybe } from '@/common/types';
import { sign } from './auth.util';
import { getUserFromJWT, handleOauth } from './users.service';
import { GithubVerificationHandler, GoogleVerificationHandler, User } from './users.type';
import {
  githubStrategyOptions,
  googleStrategyOptions,
  isGithubProviderConnected,
  isGoogleProviderConnected,
} from './auth.const';

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

const getUserImage = ([imagePayload]: Profile['photos'] = []): Maybe<string> => imagePayload?.value;

const getUserGoogleName = ({ name, displayName }: Profile): Maybe<string> => {
  if (displayName) return displayName;
  if (name) {
    const { givenName, familyName } = name;
    if (givenName && familyName) return `${_.capitalize(name.givenName)} ${_.capitalize}`;
  }
};

const googleVerificationHandler: GoogleVerificationHandler = async (
  _accessToken,
  _refreshToken,
  _params,
  profile,
  done,
) => {
  const { provider, photos = [], emails = [] } = profile;
  const email = emails.find((email) => email?.verified);
  const image = getUserImage(photos);
  const name = getUserGoogleName(profile);

  const payload = { image, email: email?.value ?? '', provider, name };
  await handleOauth(payload, done);
};

const githubVerificationHandler: GithubVerificationHandler = async (
  _accessToken,
  _refreshToken,
  _params,
  profile,
  done,
) => {
  const { provider, photos = [], emails = [], displayName: name } = profile;
  const image = getUserImage(photos);
  const email = emails.find((email) => email?.value);

  const payload = { provider, image, name, email: email?.value ?? '' };
  await handleOauth(payload, done);
};

if (isGoogleProviderConnected)
  passport.use(new GoogleStrategy(googleStrategyOptions, googleVerificationHandler));
if (isGithubProviderConnected)
  passport.use(new GitHubStrategy(githubStrategyOptions, githubVerificationHandler as any));

export default passport;
