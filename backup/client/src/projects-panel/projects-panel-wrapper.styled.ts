import { styled } from '@mui/material';

export const ProjectsPanelWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'menu content empty';
  justify-items: center;
  /* "button count status"; */
  flex: 1;
  margin: 4rem 0rem;
`;
