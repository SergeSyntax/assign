import { styled, css } from '@mui/material';

export const RubricItemParagraph = styled('p')`
  ${({ theme }) => css`
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.7;
    font-weight: 400;
    ${theme.breakpoints.down('md')} {
      font-size: 1.4rem;
    }
    ${theme.breakpoints.down('md')} {
      max-width: 40rem;
    }
  `}
`;
