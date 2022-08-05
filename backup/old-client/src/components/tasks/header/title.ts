import { CardActionArea, styled } from '@mui/material';

export const TitleHeaderTask = styled(CardActionArea)`
  word-break: break-word;
  padding: 1rem 2rem;
  font-size: 2.3rem;
  font-weight: bold;
  vertical-align: middle;
  min-height: 5rem;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
