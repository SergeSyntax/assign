import { styled } from '@mui/material';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  component: IconType;
}

export const IconLabel = styled(
  ({ component, ...props }: Props): ReactElement => React.createElement(component, props)
)`
  margin-left: 1rem;
  margin-right: 0.7rem;
  font-size: 1.1em;
`;
