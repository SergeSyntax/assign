import { css } from '@emotion/react';
import { Container, styled } from '@mui/material';

export const WrapperListFeature = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
      margin: 10rem 0;
    }
  `}
`;
