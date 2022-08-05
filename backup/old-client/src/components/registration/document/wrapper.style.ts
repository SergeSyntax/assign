import { css } from '@emotion/react';
import { Container, styled } from '@mui/material';

export const WrapperDocumentRegistration = styled(Container)`
  ${({ theme }) => css`
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: ${theme.shadows[5]};
  `}
`;

WrapperDocumentRegistration.defaultProps = { maxWidth: 'xs' };
