/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Query
// ====================================================

export interface Query_projects {
  __typename: "Project";
  id: string;
  title: string | null;
  accessibility: boolean | null;
  owner: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Query {
  projects: (Query_projects | null)[] | null;
}
