import { Avatar, styled } from '@mui/material';

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
