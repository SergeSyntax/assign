import { Toolbar, styled } from '@mui/material';

export const DashboardToolbar = styled(Toolbar)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
`;
