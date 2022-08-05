import { styled } from '@mui/material';
import { SECTION_MARGIN_LEFT, SECTION_MARGIN_RIGHT, SECTION_WIDTH } from './section.const';

export const SectionContainer = styled('div')`
  flex-shrink: 0;
  height: 100%;
  width: ${SECTION_WIDTH}rem;
  margin-left: ${SECTION_MARGIN_LEFT}rem;

  :not(:last-child) {
    margin-right: ${SECTION_MARGIN_RIGHT}rem;
  }
`;
