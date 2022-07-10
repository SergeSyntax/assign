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

export const FeatureItemWrapper = styled('div')`
  ${({ theme }) => css`
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
    height: 42rem;
    background: rgba(237, 240, 245, 0.7);
    max-width: 30rem;
    border-radius: 2rem;
    padding: 2rem 3.5rem 1rem;

    ${theme.breakpoints.down('lg')} {
      max-width: 28rem;
    }

    ${theme.breakpoints.down('md')} {
      margin-bottom: 5rem;
      max-width: 30rem;
    }
  `}
`;

export const FeatureItemTitle = styled('h3')`
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FeatureItemParagraph = styled('p')`
  font-size: 1.6rem;
  line-height: 1.7;
  margin: 0;
`;
