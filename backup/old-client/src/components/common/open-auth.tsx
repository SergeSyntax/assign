import React, { Fragment } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubOpenAuth } from './button/github-open-auth.style';
import { GoogleOpenAuth } from './button/google-open-auth.style';

export const OpenAuth: React.FC = () => {
  return (
    <Fragment>
      <GithubOpenAuth
        startIcon={React.createElement(FaGithub)}
        type="button"
        text="continue with github"
        inProgress={false}
      />
      <GoogleOpenAuth
        startIcon={React.createElement(FaGoogle)}
        type="button"
        text="continue with google"
        inProgress={false}
      />
    </Fragment>
  );
};
