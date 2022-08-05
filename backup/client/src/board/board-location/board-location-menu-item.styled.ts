import { MenuItem, styled } from '@mui/material';

export const BoardLocationMenuItem = styled(MenuItem)`
  & {
    font-size: 1.4rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &:hover {
    background: hsla(206, 100%, 79%, 0.3);
  }
`;
