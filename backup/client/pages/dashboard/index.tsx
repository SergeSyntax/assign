import { NextPage } from 'next';
import { SEO } from '../../src/common/seo';
import { DashboardLayout } from '../../src/dashboard';

const Dashboard: NextPage = () => {
  <SEO
    title="Dashboard"
    description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
  />;
  return <DashboardLayout>Home</DashboardLayout>;
};

export default Dashboard;
