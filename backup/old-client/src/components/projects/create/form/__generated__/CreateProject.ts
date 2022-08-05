/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject {
  __typename: "Project";
  id: string;
  title: string | null;
  accessibility: boolean | null;
  owner: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CreateProject {
  createProject: CreateProject_createProject | null;
}

export interface CreateProjectVariables {
  title?: string | null;
  accessibility?: boolean | null;
}
