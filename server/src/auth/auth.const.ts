import {
  AuthenticateOptionsGoogle,
  StrategyOptions as GoogleStrategyOptions,
} from 'passport-google-oauth20';
import { StrategyOptions as GithubStrategyOptions } from 'passport-github2';
import {
  CLIENT_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '@/common/config';

export const isGoogleProviderConnected = Boolean(GOOGLE_CLIENT_ID) && Boolean(GOOGLE_CLIENT_SECRET);
export const isGithubProviderConnected = Boolean(GITHUB_CLIENT_ID) && Boolean(GITHUB_CLIENT_SECRET);

const GOOGLE_CALLBACK_URL = '/auth/google/callback';
const GITHUB_CALLBACK_URL = '/auth/github/callback';

export const googleStrategyOptions: GoogleStrategyOptions = {
  clientID: GOOGLE_CLIENT_ID!,
  clientSecret: GOOGLE_CLIENT_SECRET!,
  callbackURL: GOOGLE_CALLBACK_URL,
  proxy: true,
};
export const githubStrategyOptions: GithubStrategyOptions = {
  clientID: GITHUB_CLIENT_ID!,
  clientSecret: GITHUB_CLIENT_SECRET!,
  callbackURL: GITHUB_CALLBACK_URL,
  proxy: true,
  scope: ['user:email'],
};

export const OAUTH_AUTH_OPTIONS: AuthenticateOptionsGoogle = {
  successRedirect: `${CLIENT_URL}/dashboard`,
  failureRedirect: `${CLIENT_URL}/500`,
};
