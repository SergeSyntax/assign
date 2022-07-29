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

export const LabelWrapper = styled('label')`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.8rem;
  padding: 0.5rem;
  color: #172b4d;
`;

export const SmallLabelWrapper = styled(LabelWrapper)`
  font-size: 1.5rem;
  font-weight: bold;
`;
