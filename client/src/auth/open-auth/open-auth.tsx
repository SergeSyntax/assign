import { BASE_URL } from 'config';
import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useOpenAuth } from './open-auth.hook';
import { OpenAuthGithubButton, OpenAuthGoogleButton } from './open-auth.styled';

const handleGoogleOpenAuth = () => window.open(`${BASE_URL}/auth/google`, '_self');
const handleGithubOpenAuth = () => window.open(`${BASE_URL}/auth/github`, '_self');

export const OpenAuth: React.FC = () => {
  const { isGithubProviderDisconnected, isGoogleProviderDisConnected, loading } = useOpenAuth();

  return (
    <>
      <OpenAuthGithubButton
        fullWidth
        inProgress={loading}
        type="button"
        color="inherit"
        text="continue with github"
        disabled={isGithubProviderDisconnected}
        onClick={handleGithubOpenAuth}
        startIcon={!loading && React.createElement(FaGoogle)}
      />
      <OpenAuthGoogleButton
        fullWidth
        inProgress={loading}
        type="button"
        color="inherit"
        text="continue with google"
        disabled={isGoogleProviderDisConnected}
        onClick={handleGoogleOpenAuth}
        startIcon={!loading && React.createElement(FaGithub)}
      />
    </>
  );
};
