import { CardActionArea, styled } from '@mui/material';

export const TaskDescriptionText = styled(CardActionArea)`
  border: 1px solid transparent;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  padding: 7.5px 13px;
  letter-spacing: normal;
  line-height: 1.5;
  font-weight: 400;
  min-height: 6.7rem;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  word-break: break-word;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
