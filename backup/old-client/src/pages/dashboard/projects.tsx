import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import React from 'react';
import { initializeApollo } from 'src/apollo/apolloClient';

import LayoutDashboard from 'src/components/dashboard/layout-dashboard';
import { PanelProject } from 'src/components/projects/panel';

// export const PROJECT_LIST_DATA = gql`
//   query Query {
//     projects
//   }
// `;

const Projects: React.FC = props => {
  return (
    <LayoutDashboard>
      <PanelProject />
    </LayoutDashboard>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apolloClient = initializeApollo();

  // await apolloClient.query({
  // query: PROJECT_LIST_DATA
  // });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};

export default Projects;
