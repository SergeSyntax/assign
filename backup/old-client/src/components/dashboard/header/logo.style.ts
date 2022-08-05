import { styled } from '@mui/system';
import { Logo } from 'src/components/common/layout/logo';

export const LogoDashboard = styled(Logo)`
  color: inherit;
  font-size: 4rem;
  filter: drop-shadow(2px 2px 5px #323232);
  margin-top: -0.4rem;

  h1 {
    display: none;
  }
`;
