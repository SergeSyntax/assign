import { styled } from '@mui/material';
import { Logo } from '../common/logo';

export const DashboardLogo = styled(Logo)`
  color: inherit;
  font-size: 4rem;
  filter: drop-shadow(2px 2px 5px #323232);
  margin-top: -0.4rem;

  h1 {
    display: none;
  }
`;
