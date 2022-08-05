import { Card, styled } from '@mui/material';

export const ShapeSkeletonSection = styled(Card)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background: #ebecf0;
  flex-shrink: 0;
  margin-left: 1rem;
  min-width: 25rem;
  height: 100%;
  padding: 1rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;
