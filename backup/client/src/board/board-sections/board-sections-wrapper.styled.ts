import { styled } from '@mui/material';

export const BoardSectionsWrapper = styled('div')`
  margin: 1rem;
  display: flex;
  position: absolute;
  inset: 0;
  padding: 1rem 0;

  // scroll
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: 1.2rem;
  scrollbar-color: rgba(253, 253, 253, 0.8) rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    width: 1.2rem;
    height: 1.2rem;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(253, 253, 253, 0.8);
    border-radius: 1rem;
    transition: all 0.3s;
    :hover {
      background: #fdfdfd;
    }
  }
`;
