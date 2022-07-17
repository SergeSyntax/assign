import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Button, styled, css } from '@mui/material';

export const ContainedButton = styled(Button)`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 4.5rem;
    min-width: 9rem;
    margin: 1rem 0;
    padding: 0;

    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 600;

    transition: all 0.2s;
    background: #0073b1;
    color: #fff;

    &:hover {
      box-shadow: ${theme.shadows[5]};
      background: #0073b1;
    }

    &:disabled {
      background: #0073b1;
    }
  `}
`;

ContainedButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export const OpenAuthGoogleButton = styled(ContainedButton)`
  color: #29303b;
  background: #fff;
  margin-bottom: 2.5rem;
  &:hover {
    background: #fff;
  }
`;

OpenAuthGoogleButton.defaultProps = {
  fullWidth: true,
  variant: 'contained',
  type: 'button',
  startIcon: React.createElement(FaGoogle),
};

export const OpenAuthGithubButton = styled(ContainedButton)`
  background: #29303b;
  margin-bottom: 2rem;
  &:hover {
    background: #29303b;
  }
`;

OpenAuthGithubButton.defaultProps = {
  fullWidth: true,
  type: 'button',
  startIcon: React.createElement(FaGithub),
};
