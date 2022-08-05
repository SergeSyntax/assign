/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RenameSection
// ====================================================

export interface RenameSection_renameSection {
  __typename: "Section";
  title: string | null;
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  sectionId: string;
}

export interface RenameSection {
  renameSection: RenameSection_renameSection | null;
}

export interface RenameSectionVariables {
  renameSectionId: string;
  title?: string | null;
}
