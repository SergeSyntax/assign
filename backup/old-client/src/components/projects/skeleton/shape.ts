import { Skeleton, styled } from '@mui/material';
import { PROJECT_ITEM_HEIGHT, PROJECT_ITEM_MARGIN_BOTTOM } from '../item/const';

export const ShapeSkeletonProject = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  min-height: ${PROJECT_ITEM_HEIGHT};
  margin-bottom: ${PROJECT_ITEM_MARGIN_BOTTOM};
`;
