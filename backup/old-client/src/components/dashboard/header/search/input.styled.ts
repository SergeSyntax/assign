import { InputBase } from '@mui/material';
import { styled } from '@mui/system';

export const InputSearchDashboard = styled(InputBase)`
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
