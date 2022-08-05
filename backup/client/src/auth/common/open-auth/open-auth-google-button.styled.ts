import React from 'react';
import { styled } from '@mui/material';
import { ContainedButton } from '../../../common/buttons';
import { FaGoogle } from 'react-icons/fa';

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
