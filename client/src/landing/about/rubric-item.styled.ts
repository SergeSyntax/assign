import { styled, css } from '@mui/material';

export const RubricItemImage = styled('img')`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    max-width: 50rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.down('md')} {
      display: block;
      max-width: 30rem;
    }
  `}
`;

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

export const RubricItemTitle = styled('h3')`
  ${({ theme }) => css`
    font-size: 2.1rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.7rem;
    }
  `}
`;

export const RubricItemWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
    ${theme.breakpoints.down('md')} {
      justify-content: 'center';
      align-items: center;
      margin: 3rem;
      margin-top: 5rem;
    }
  `}
`;
