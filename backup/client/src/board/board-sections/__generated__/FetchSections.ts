/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchSections
// ====================================================

export interface FetchSections_fetchSections_sections_tasks {
  __typename: "Task";
  id: string;
  title: string;
  order: number | null;
  dueDate: any | null;
  description: string | null;
  sectionId: string;
  createdAt: any;
  updatedAt: any;
}

export interface FetchSections_fetchSections_sections {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  createdAt: any;
  updatedAt: any;
  tasks: FetchSections_fetchSections_sections_tasks[] | null;
}

export interface FetchSections_fetchSections {
  __typename: "SectionsResponse";
  total: number;
  sections: FetchSections_fetchSections_sections[];
}

export interface FetchSections {
  fetchSections: FetchSections_fetchSections | null;
}

export interface FetchSectionsVariables {
  id: string;
}
