import {
  GoogleCallbackParameters,
  VerifyCallback,
  Profile as GoogleProfile,
} from 'passport-google-oauth20';
import { Profile } from 'passport';
import { RegistrationInput, Role } from '../common/types/generated/graphql';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  password?: string;
  image?: string;
  provider?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OauthPayload {
  image?: string;
  email: string;
  provider: string;
  name?: string;
}

export type CreateUserPayload = RegistrationInput | OauthPayload;

interface GithubCallbackParameters {
  access_token: string;
  scope: string;
  token_type: string;
}

interface GitHubProfileEmail {
  value: string;
}
interface GithubProfile {
  id: string;
  nodeId: string;
  displayName: string;
  username: string;
  profileUrl: string;
  photos: Profile['photos'];
  provider: 'github';
  emails: GitHubProfileEmail[];
  _json: any;
  _raw: any;
}

export type GithubVerificationHandler = (
  accessToken: string,
  refreshToken: string,
  params: GithubCallbackParameters,
  profile: GithubProfile,
  verified: VerifyCallback,
) => void;

export type GoogleVerificationHandler = (
  accessToken: string,
  refreshToken: string,
  params: GoogleCallbackParameters,
  profile: GoogleProfile,
  done: VerifyCallback,
) => void;
