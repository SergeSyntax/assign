import { MdHome, MdLayers, MdListAlt, MdPeople } from 'react-icons/md';
import { DashboardNavTabProps } from './dashboard-nav-tab-props.interface';

export const DASHBOARD_NAV_TABS = Object.freeze<DashboardNavTabProps[]>([
  { href: '/dashboard', label: 'Home', icon: MdHome },
  { href: '/dashboard/teams', label: 'Teams', icon: MdPeople },
  { href: '/dashboard/projects', label: 'Projects', icon: MdLayers },
  { href: '/dashboard/documents', label: 'Documents', icon: MdListAlt },
]);
