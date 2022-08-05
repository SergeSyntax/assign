import { AppBar, styled } from '@mui/material';

export const BoardHeaderAppBar = styled(AppBar)`
  background: hsla(0, 0%, 100%, 0.24);
  padding-top: 0.6rem;
`;

BoardHeaderAppBar.defaultProps = {
  position: 'static',
};
