import { Card, styled } from '@mui/material';
import {
  SECTION_MARGIN_LEFT,
  SECTION_MARGIN_RIGHT,
  SECTION_PADDING,
  SECTION_WIDTH,
} from './section.const';

export const SectionSkeleton = styled(Card)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background: #ebecf0;
  flex-shrink: 0;
  flex: 1;
  margin-bottom: 1rem;
  width: ${SECTION_WIDTH}rem;
  min-width: ${SECTION_WIDTH}rem;
  margin-left: ${SECTION_MARGIN_LEFT}rem;
  padding: ${SECTION_PADDING}rem;

  :not(:last-child) {
    margin-right: ${SECTION_MARGIN_RIGHT}rem;
  }
`;
