import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import { styled } from '@mui/material';
import { IconType } from 'react-icons/lib';

interface Props {
  component: IconType;
}

export const IconItemListFeatureFeature = styled(
  ({ component, ...props }: Props): ReactElement => React.createElement(component, props)
)`
  ${({ theme }) => css`
    font-size: 4em;
    display: block;
    margin: 2rem auto;
    color: ${theme.palette.primary.main};
  `}
`;
