/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Sections
// ====================================================

export interface Sections_sections_tasks {
  __typename: "Task";
  sectionId: string;
  updatedAt: string | null;
  createdAt: string | null;
  id: string;
  title: string | null;
}

export interface Sections_sections {
  __typename: "Section";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  tasks: (Sections_sections_tasks | null)[] | null;
}

export interface Sections {
  sections: (Sections_sections | null)[] | null;
}

export interface SectionsVariables {
  projectId: string;
}
