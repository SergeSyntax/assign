import { styled } from '@mui/material';
import React, { ReactElement } from 'react';

interface LabelIconProps {
  component: React.ComponentType;
}

export const LabelIcon = styled(
  ({ component, ...props }: LabelIconProps): ReactElement => React.createElement(component, props)
)`
  margin-left: 1rem;
  margin-right: 0.7rem;
  font-size: 1.1em;
`;
