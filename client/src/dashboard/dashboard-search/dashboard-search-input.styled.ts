import { FiSearch } from 'react-icons/fi';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material';

export const DashboardSearchIcon = styled(FiSearch)`
  margin-right: 1.5rem;
  font-size: 2.5rem;
`;

export const DashboardSearchForm = styled('form')`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  padding-left: 1.5rem;
  border-radius: 2rem;
  background: #eef3f8;
`;

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
