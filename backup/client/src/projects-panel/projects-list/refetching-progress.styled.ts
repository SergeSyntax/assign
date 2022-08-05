import { LinearProgress, styled } from '@mui/material';
import { PROJECT_ITEM_MARGIN_BOTTOM_VALUE } from '../project-item';

export const RefetchingProgress = styled(LinearProgress)`
  height: 0.3rem;
  margin-bottom: ${PROJECT_ITEM_MARGIN_BOTTOM_VALUE};
`;
