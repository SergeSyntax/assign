import { InputBase, styled } from '@mui/material';

export const DashboardSearchInput = styled(InputBase)`
  input {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    line-height: 1;
    padding: 0.5rem;
    width: 14rem;

    ::placeholder {
      font-size: inherit;
      line-height: inherit;
    }
  }
`;
