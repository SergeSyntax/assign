import { Tab as TabMUI, styled } from '@mui/material';

export const Tab = styled(TabMUI)`
  && {
    font-size: 1.2rem;
    min-width: 10rem;
    min-height: unset;
    line-height: 1.5;
    padding-top: 1rem;
    opacity: 0.9;
    &.MuiButtonBase-root > svg {
      font-size: 2.5rem;
    }
  }
`;
