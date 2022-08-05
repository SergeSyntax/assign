import { Container, styled, css } from '@mui/material';

export const RegistrationContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: ${theme.shadows[5]};
  `}
`;

RegistrationContainer.defaultProps = { maxWidth: 'xs' };
