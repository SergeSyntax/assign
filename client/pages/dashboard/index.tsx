import { addApolloState, initializeApollo } from 'config';
import { GetServerSideProps, NextPage } from 'next';
import { SEO } from 'src';
import { CurrentUserDocument } from 'src/auth/auth.gql';
import { getServerSideProps } from 'src/auth/auth.util';

const DashboardPage: NextPage = () => {
  <SEO
    title="Dashboard"
    description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
  />;
  return <div>Home</div>;
};

export { getServerSideProps };

export default DashboardPage;
