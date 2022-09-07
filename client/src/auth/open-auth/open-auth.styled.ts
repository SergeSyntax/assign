import { styled } from '@mui/material';
import { SubmitButton } from 'src/common/button/button';

export const OpenAuthGoogleButton = styled(SubmitButton)`
  &,
  &:hover,
  &.loading {
    color: #29303b;
    background: #fff !important;
    margin-bottom: 2.5rem;

    svg {
      color: #29303b;
    }
  }
`;

export const OpenAuthGithubButton = styled(SubmitButton)`
  &,
  &:hover,
  &.loading {
    background: #29303b;
    margin-bottom: 2rem;
  }
`;
