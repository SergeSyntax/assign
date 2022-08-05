import React from 'react';
import { BASE_URL } from '../../../common/config';
import { OpenAuthGithubButton } from './open-auth-github-button.styled';
import { OpenAuthGoogleButton } from './open-auth-google-button.styled';

const handleGoogleOpenAuth = () => window.open(`${BASE_URL}/auth/google`, '_self');
const handleGithubOpenAuth = () => window.open(`${BASE_URL}/auth/github`, '_self');

export const OpenAuth: React.FC = () => {
  return (
    <>
      <OpenAuthGithubButton onClick={handleGithubOpenAuth}>
        continue with github
      </OpenAuthGithubButton>
      <OpenAuthGoogleButton onClick={handleGoogleOpenAuth}>
        continue with google
      </OpenAuthGoogleButton>
    </>
  );
};
