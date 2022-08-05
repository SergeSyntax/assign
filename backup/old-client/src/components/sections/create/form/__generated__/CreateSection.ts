/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSection
// ====================================================

export interface CreateSection_createSection {
  __typename: "Section";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface CreateSection {
  createSection: CreateSection_createSection | null;
}

export interface CreateSectionVariables {
  projectId: string;
  title: string;
}
