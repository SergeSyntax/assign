import { Container, styled, css } from '@mui/material';
import { Signature } from 'src/common';

export const RegistrationWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-225deg, #473b7b 0%, #3584a7 70%, #30d2be 100%);
  min-height: 100vh;
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


export const RegistrationSignature = styled(Signature)`
  margin-top: 1rem;
  color: #fff;
  font-size: 1.3rem;
  letter-spacing: 0.06rem;
  margin-bottom: 2rem;
`;
