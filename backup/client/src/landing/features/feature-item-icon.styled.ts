import { styled, css } from '@mui/material';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface Props {
  component: IconType;
}

export const FeatureItemIcon = styled(
  ({ component, ...props }: Props): ReactElement => React.createElement(component, props)
)`
  ${({ theme }) => css`
    font-size: 4em;
    display: block;
    margin: 2rem auto;
    color: ${theme.palette.primary.main};
  `}
`;
