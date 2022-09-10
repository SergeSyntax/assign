import React from 'react';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { DashboardWrapper, DashboardContent } from './dashboard-layout.styled';

export const DashboardLayout: React.FC<{ children: string }> = ({ children }) => {
  return (
    <DashboardWrapper>
      <DashboardHeader />
      <DashboardContent>{children}</DashboardContent>
    </DashboardWrapper>
  );
};
