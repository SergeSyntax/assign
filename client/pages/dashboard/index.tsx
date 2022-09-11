import { addApolloState, initializeApollo } from 'config';
import { GetServerSideProps, NextPage } from 'next';
import { SEO } from 'src';
import { CurrentUserDocument } from 'src/auth/auth.gql';
import { getServerSideProps } from 'src/auth/auth.util';
import { DashboardLayout } from 'src/dashboard';

const DashboardPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Dashboard"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />
      <DashboardLayout>Home</DashboardLayout>
    </>
  );
};

export { getServerSideProps };

export default DashboardPage;
