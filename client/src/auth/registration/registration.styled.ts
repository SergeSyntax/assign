import { Container, styled, css } from '@mui/material';
import { Logo, Signature } from 'src/common';

export const RegistrationWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-225deg, #473b7b 0%, #3584a7 70%, #30d2be 100%);
  min-height: 100vh;
`;

export const RegistrationHeader = styled('div')`
  font-size: 2rem;
  text-align: center;
  margin: 2.4rem 0;
`;

export const RegistrationContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: ${theme.shadows[5]};
  `}
`;

RegistrationContainer.defaultProps = { maxWidth: 'xs' };

export const RegistrationHeaderTitle = styled('p')`
  margin: 0;
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.05rem;
  line-height: 1;
`;

export const RegistrationCondition = styled('p')`
  text-align: center;
  font-size: 1.4rem;
  margin: 0;

  a {
    margin: 0 0.5rem;
  }
`;

export const LoginLinkWrapper = styled('p')`
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 0;
  margin-top: 1.5rem;

  a {
    padding: 0.5rem;
  }
`;

export const RegistrationLogo = styled(Logo)`
  font-size: 4.6rem;
`;

export const RegistrationSignature = styled(Signature)`
  margin-top: 1rem;
  color: #fff;
  font-size: 1.3rem;
  letter-spacing: 0.06rem;
  margin-bottom: 2rem;
`;
