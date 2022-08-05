import { IconType } from 'react-icons';
import { MdHome, MdLayers, MdPeople } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';

export interface NavTabAttributes {
  href: string;
  label: string;
  icon: IconType;
}

export const navTabs: NavTabAttributes[] = [
  { href: '/dashboard', label: 'Home', icon: MdHome },
  { href: '/dashboard/projects', label: 'Projects', icon: MdLayers },
  { href: '/dashboard/teams', label: 'Teams', icon: MdPeople },
  { href: '/dashboard/members', label: 'Members', icon: AiFillMessage }
];
