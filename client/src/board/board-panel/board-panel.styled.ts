import { List, styled } from '@mui/material';

export const ProjectsPanelFilterWrapper = styled(List)`
  max-width: 25rem;
  margin-right: 3rem;
  max-height: 29rem;
  border-radius: 4rem;
  padding: 2rem;
  background: #fff;
  width: 100%;
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

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
