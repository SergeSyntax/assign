import { styled } from '@mui/material';
import { Logo } from '../../../common/logo';

export const LoginHeaderWrapper = styled('div')`
  font-size: 2rem;
  text-align: center;
`;

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

export const LoginHeaderTitleWrapper = styled('div')`
  font-size: 0.9em;
`;

export const LoginHeaderTitleMain = styled('h2')`
  font-weight: 400;
  margin-bottom: 0.7rem;
`;

export const LoginHeaderTitleSub = styled('div')`
  font-size: 0.85em;
  display: flex;
  flex-direction: column;
  color: #718096;
`;
