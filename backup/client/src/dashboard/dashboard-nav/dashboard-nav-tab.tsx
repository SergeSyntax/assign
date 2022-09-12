import React from 'react';
import Link from 'next/link';
import { Tab } from './tab.style';
import { DashboardNavTabProps } from './dashboard-nav-tab-props.interface';

interface DashboardNavLinkProps extends DashboardNavTabProps {
  tabIndex: number;
}

export const DashboardNavTab: React.FC<DashboardNavLinkProps> = ({
  tabIndex,
  href,
  icon,
  label,
}) => {
  return (
    <Link passHref href={href}>
      <Tab tabIndex={tabIndex} icon={React.createElement(icon)} label={label} />
    </Link>
  );
};
