/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Project
// ====================================================

export interface Project_project {
  __typename: "Project";
  id: string;
  title: string | null;
  accessibility: boolean | null;
  owner: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Project {
  project: Project_project | null;
}

export interface ProjectVariables {
  projectId: string;
}
