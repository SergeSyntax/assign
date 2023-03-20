import { Card, styled } from '@mui/material';
import { PROJECT_ITEM_HEIGHT_VALUE, PROJECT_ITEM_MARGIN_BOTTOM_VALUE } from './project-item.const';

export const ProjectItemWrapper = styled(Card)`
  display: flex;
  min-height: ${PROJECT_ITEM_HEIGHT_VALUE};
  margin-bottom: ${PROJECT_ITEM_MARGIN_BOTTOM_VALUE};
`;
