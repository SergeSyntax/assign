import React from 'react';
import { DashboardContent } from './dashboard-content.styled';
import { DashboardHeader } from './dashboard-header';
import { DashboardWrapper } from './dashboard-wrapper.styled';

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <DashboardWrapper>
      <DashboardHeader />
      <DashboardContent>{children}</DashboardContent>
    </DashboardWrapper>
  );
};
