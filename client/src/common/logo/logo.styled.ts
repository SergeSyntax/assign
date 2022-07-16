import { styled } from '@mui/material';
import { MdDashboard } from 'react-icons/md';

export const LogoWrapper = styled('a')`
  display: inline-flex;
  align-items: center;
  font-size: 4rem;
  color: #fff;
  transition: all 0.5s;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:active {
    background: radial-gradient(rgba(255, 255, 255, 0.4) 10%, transparent, transparent);
    opacity: 0.8;
    border-radius: 30%;
    outline: none;
  }
`;

LogoWrapper.defaultProps = { href: '/' };

export const LogoIcon = styled(MdDashboard)`
  margin-right: 0.3rem;
  font-size: 1.1em;
`;

export const LogoText = styled('h1')`
  font-family: 'Permanent Marker';
  user-select: none;
  letter-spacing: 0.3rem;
  font-size: inherit;
  line-height: 1;
  margin: 0;
`;
