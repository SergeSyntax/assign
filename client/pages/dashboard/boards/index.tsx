import { NextPage } from 'next';
import { SEO } from 'src';
import { getServerSideProps } from 'src/auth/auth.util';
import { DashboardLayout } from 'src/dashboard';

const BoardPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Dashboard"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />
      <DashboardLayout>test</DashboardLayout>
    </>
  );
};

export { getServerSideProps };

export default BoardPage;
