import React from 'react';
import Link from 'next/link';
import { NavTabAttributes } from './nav-tabs.constant';
import { TabDashboard } from './tab.style';

interface ItemNAvProps extends NavTabAttributes {
  index: number;
}

export const ItemNav: React.FC<ItemNAvProps> = ({ href, index, icon, label }) => {
  return (
    <Link key={href} passHref href={href}>
      <TabDashboard tabIndex={index} icon={React.createElement(icon)} label={label} />
    </Link>
  );
};
