/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteProject
// ====================================================

export interface DeleteProject_deleteProject {
  __typename: "Project";
  id: string;
  title: string | null;
  owner: string | null;
  accessibility: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface DeleteProject {
  deleteProject: DeleteProject_deleteProject | null;
}

export interface DeleteProjectVariables {
  deleteProjectId: string;
}
