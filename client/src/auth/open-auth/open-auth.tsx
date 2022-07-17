import { BASE_URL } from 'config';
import React from 'react';
import { OpenAuthGithubButton, OpenAuthGoogleButton } from './open-auth.styled';

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
