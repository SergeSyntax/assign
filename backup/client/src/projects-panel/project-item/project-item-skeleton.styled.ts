import { Skeleton, styled } from '@mui/material';
import { PROJECT_ITEM_HEIGHT_VALUE, PROJECT_ITEM_MARGIN_BOTTOM_VALUE } from './project-item.const';

export const ProjectItemSkeleton = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  min-height: ${PROJECT_ITEM_HEIGHT_VALUE};
  margin-bottom: ${PROJECT_ITEM_MARGIN_BOTTOM_VALUE};
`;

ProjectItemSkeleton.defaultProps = {
  variant: 'rectangular',
  animation: 'wave',
};
