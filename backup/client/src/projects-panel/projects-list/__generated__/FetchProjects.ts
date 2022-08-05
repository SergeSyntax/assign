/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArgs, Accessibility } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: FetchProjects
// ====================================================

export interface FetchProjects_fetchProjects_projects {
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

export interface FetchProjects_fetchProjects {
  __typename: "ProjectsResponse";
  total: number;
  projects: FetchProjects_fetchProjects_projects[];
}

export interface FetchProjects {
  fetchProjects: FetchProjects_fetchProjects | null;
}

export interface FetchProjectsVariables {
  args: PaginationArgs;
}
