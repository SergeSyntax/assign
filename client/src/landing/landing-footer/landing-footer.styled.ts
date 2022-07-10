import { styled, css } from '@mui/material';
import { Signature } from '../../common';

export const LandingFooterMenuWrapper = styled('footer')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    background-color: #1e1e1e;
    color: #fff;
    align-items: center;
    font-size: 1.6rem;
    padding: 3rem;

    :hover {
      color: #a8a8a8;
    }

    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `}
`;

export const LandingFooterMenuList = styled('ul')`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    ${theme.breakpoints.down('md')} {
      margin-top: 3rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const LandingFooterSignatureWrapper = styled('div')`
  ${({ theme }) => css`
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    ${theme.breakpoints.down('md')} {
    }
  `}
`;

export const LandingFooterSignature = styled(Signature)`
  opacity: 0.5;
`;
