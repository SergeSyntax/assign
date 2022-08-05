import { styled } from '@mui/material';

export const ProjectsListWrapper = styled('div')`
  position: absolute;
  inset: 0;
  overflow-y: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  scrollbar-width: 8px;
  scrollbar-color: #909090 #ccc;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #ccc;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 6px;
    transition: all 0.3s;
    /* border: 3px solid #ccc; */
    :hover {
      background-color: #a0a0a0;
    }
  }
`;
