import React from 'react';
import { SEO } from '../common/seo';
import { ContentDashboard } from './content.style';
import HeaderDashboard from './header/header';
import { WrapperDashboard } from './wrapper.styled';

interface Props {}

const LayoutDashboard: React.FC<Props> = ({ children }) => {
  return (
    <WrapperDashboard>
      <SEO
        title="Dashboard"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />
      <HeaderDashboard />
      <ContentDashboard>{children}</ContentDashboard>
    </WrapperDashboard>
  );
};

export default LayoutDashboard;
