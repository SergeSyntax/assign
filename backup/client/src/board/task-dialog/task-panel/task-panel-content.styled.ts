import { CardContent, styled } from '@mui/material';

export const TaskPanelContent = styled(CardContent)`
  padding: 2rem 4.4rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'content menu';
`;
