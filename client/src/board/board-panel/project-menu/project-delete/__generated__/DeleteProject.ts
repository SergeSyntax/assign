/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteProject
// ====================================================

export interface DeleteProject_deleteProject_project {
  __typename: "Project";
  /**
   * support markdown language
   * Description for field
   * Supports **multi-line** description for your [API](http: // example.com)!
   */
  id: string;
}

export interface DeleteProject_deleteProject {
  __typename: "ProjectMutationResponse";
  status: MutationStatus;
  project: DeleteProject_deleteProject_project;
}

export interface DeleteProject {
  deleteProject: DeleteProject_deleteProject;
}

export interface DeleteProjectVariables {
  id: string;
}
