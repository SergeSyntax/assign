import { styled } from '@mui/material';
import { Logo } from '../../common/logo';

export const LoginHeaderLogo = styled(Logo)`
  && {
    font-size: 2.2em;
    color: transparent;
    background: linear-gradient(-225deg, #5b86e5 0%, #36d1dc 70%);
    background-clip: text;
    svg {
      color: #5fb8e6;
    }
  }
`;
