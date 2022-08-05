import { styled, TextField } from '@mui/material';

export const BoardLocationMenuSearch = styled(TextField)`
  && {
    margin: 1rem 1.6rem;
  }
`;

BoardLocationMenuSearch.defaultProps = { size: 'small', placeholder: 'Find boards by name…' };
