import { styled, css } from '@mui/material';
import { SiPolymerproject } from 'react-icons/si';

export const SignatureIcon = styled(SiPolymerproject)`
  margin-left: 1rem;
  display: inline-block;
`;

export const SignatureText = styled('p')`
  ${({ theme }) => css`
    color: #cfcfcf;
    font-weight: 900;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.07rem;
    word-spacing: 0.5rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.2rem;
    }
  `}
`;
