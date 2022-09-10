import { Avatar, Menu, styled, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

export const UserOptionsMenuButton = styled(Button)`
  padding: unset;
  border-radius: 100%;
  min-width: unset;
  position: relative;
`;

export const UserAvatar = styled(Avatar)`
  color: #626262;
  background: #eef3f8;
  font-size: 1.6rem;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserOptionsMenu = styled(Menu)`
  & .MuiPaper-root.MuiPopover-paper.MuiPopover-paper {
    min-width: 22rem;
    top: 6.94rem !important;
  }
  & .MuiMenuItem-root {
    opacity: 0.9;
    font-size: 1.68rem;
    font-weight: bold;
    color: ${grey['700']};
    padding: 1rem 1.4rem;
    svg {
      font-size: 1.5em;
      margin-right: 1.4rem;
    }
  }
`;
