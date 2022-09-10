/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Accessibility, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject_project {
  __typename: "Project";
  /**
   * support markdown language
   * Description for field
   * Supports **multi-line** description for your [API](http: // example.com)!
   */
  id: string;
  title: string;
  accessibility: Accessibility;
  createdAt: any;
  updatedAt: any;
}

export interface CreateProject_createProject {
  __typename: "ProjectMutationResponse";
  status: MutationStatus;
  project: CreateProject_createProject_project;
}

export interface CreateProject {
  createProject: CreateProject_createProject;
}

export interface CreateProjectVariables {
  title: string;
  accessibility: Accessibility;
}
