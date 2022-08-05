import { styled } from '@mui/material';
import { SECTION_PADDING } from './section.const';

export const SectionContent = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 0.4rem;
  padding: ${SECTION_PADDING}rem;

  scrollbar-width: 0.8rem;
  scrollbar-color: #bfc3cd rgba(9, 30, 66, 0.08);
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background: rgba(9, 30, 66, 0.08);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #bfc3cd;
    border-radius: 1rem;
    transition: all 0.3s;
    /* border: 3px solid rgba(9,30,66,.08); */
    :hover {
      background: #afb3bd;
    }
  }
`;
