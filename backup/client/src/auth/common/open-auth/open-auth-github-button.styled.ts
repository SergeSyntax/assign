import React from 'react';
import { styled } from '@mui/material';
import { ContainedButton } from '../../../common/buttons';
import { FaGithub } from 'react-icons/fa';

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
